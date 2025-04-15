// Define which paths should have the secret header added
// Adjust this pattern to match your API routes served by Cloud Run
const API_PATHS = ['/api/']; 
const SECRET_HEADER_NAME = 'X-API-Secret'; // Example header name

export async function onRequest(context) {
  const { request, env, next } = context;
  const url = new URL(request.url);

  // Check if the request path matches your API paths
  const isApiPath = API_PATHS.some(path => url.pathname.startsWith(path));

  // If it's not an API path, just proceed without modification
  if (!isApiPath) {
    return await next(); 
  }

  // Clone the request to make it mutable
  const newRequest = new Request(request);

  // Add the custom header with the secret from environment variables
  newRequest.headers.set(SECRET_HEADER_NAME, env.API_SECRET); 

  // Continue the request chain, potentially fetching from the origin (your API)
  // Or just pass control if this middleware is only for header injection
  // before Cloudflare proxies to the origin defined elsewhere.
  // Depending on how Pages is configured (proxying vs direct function fetch),
  // you might just need `next()` if Pages is already set up to proxy /api/* // to your Cloud Run URL. Let's assume Pages proxies based on domain/path rules:

  console.log(`Added ${SECRET_HEADER_NAME} header for path: ${url.pathname}`); // Optional: for debugging

  // Proceed with the modified request
  return await next(newRequest); 
}