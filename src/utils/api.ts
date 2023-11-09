// src/utils/api.ts

const BASE_URL = 'http://localhost:3000/';

// This function sends an API request and returns the response data.
// It can be customized with different paths, methods, and bodies.
async function sendRequest(path: string, method: string = 'GET', body: any = null) {
  const url = `${BASE_URL}${path}`;
  const headers = {
    'Content-Type': 'application/json',
  };

  const config: RequestInit = {
    method,
    headers,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, config);

    if (!response.ok) {
      // Convert non-2xx HTTP responses into errors:
      const error = await response.json();
      throw new Error(error.message || 'Something went wrong');
    }

    // Parse the JSON or return null if the response body is empty:
    return response.status !== 204 ? await response.json() : null;
  } catch (error) {
    // Re-throw the error so it can be caught and handled by the calling code:
    throw error;
  }
}

export default sendRequest;
