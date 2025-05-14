/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

// Define an interface to type the environment variables (secrets, etc.)
// 'AUTH_SECRET_KEY' should match the name you used with 'wrangler secret put'
export interface Env {
  AUTH_SECRET_KEY: string;
}

// The fetch handler is the entry point for incoming requests
export default {
  async fetch(
    request: Request,
    env: Env, // Access environment variables via the 'env' object
    ctx: ExecutionContext // Provides access to waitUntil for background tasks
  ): Promise<Response> {
    // Define the base URL of your Google Cloud Run service
    const cloudRunBaseUrl = 'https://whois-api-176352655180.europe-central2.run.app'; // Example: 'https://your-service-abcdef-uc.a.run.app'

    // Create a new URL object for the incoming request
    const incomingUrl = new URL(request.url);

    // Construct the full URL for the backend request, using the Cloud Run base URL
    // We take the path and query parameters from the incoming request
    const backendUrl = new URL(incomingUrl.pathname + incomingUrl.search, cloudRunBaseUrl);

	console.log('Incoming request URL:', incomingUrl.toString());
	console.log('Backend request URL:', backendUrl.toString());

    // Clone the incoming request so we can modify its headers
    const newRequest = new Request(request);

    // Define the name of the custom authentication header
    const authHeaderName = 'X-Secret-Header'; // This must match the header name your Cloud Run backend expects

    // Get the secret value from the environment variables securely
    const authHeaderValue = env.AUTH_SECRET_KEY;

    // Add the custom authentication header to the request going to the backend
    newRequest.headers.set(authHeaderName, authHeaderValue);

	console.log('Setting authentication header:', authHeaderName, 'with value:', authHeaderValue);

    try {
      // Fetch the response from your Google Cloud Run backend
      const response = await fetch(backendUrl.toString(), newRequest);

      // You can optionally inspect or modify the response from the backend here
      // For example, you might add CORS headers if needed, although Cloudflare can often handle this.

      // Return the response received from the backend back to the client (your frontend)
      return response;

    } catch (error) {
      // Log any errors that occur during the fetch operation
      console.error('Error fetching from Cloud Run:', error);

      // Return an error response to the client
      return new Response('Error communicating with the backend.', { status: 500 });
    }
  },
};