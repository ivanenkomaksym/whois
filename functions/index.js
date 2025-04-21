const SECRET_HEADER_NAME = 'X-API-Secret';

export function onRequest(context) {
  const { request, env, next } = context;

  // Clone headers from the original request
  const modifiedHeaders = new Headers(request.headers);
  modifiedHeaders.set(SECRET_HEADER_NAME, env.API_SECRET);

  // Clone the request with the new headers
  const modifiedRequest = new Request(request, {
    headers: modifiedHeaders,
  });

  // Log for debugging (optional)
  const url = new URL(request.url);
  console.log(`Injecting ${SECRET_HEADER_NAME} for: ${url.pathname}`);

  // Pass control to next function/middleware or origin
  return next(modifiedRequest);
}