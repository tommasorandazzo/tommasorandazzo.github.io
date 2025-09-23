import createHttpHeaders from './createHttpHeaders';

/**
 * @function
 * fetchJson
 *  Fetches JSON data from specified endpoint URL.
 *
 *  The URL endpoint.
 */
export default async (url: string, apiKey = false, headers: { [key: string]: string } = {}) => {
  if (url.startsWith('/')) {
    // Assume endpoint if not absolute URL.
    url = import.meta.env.VITE_API_URL + url;
  }

  return await fetch(url, {
    headers: createHttpHeaders(apiKey, headers),
  })
    .then(response => response.json())
    .then(
      result => result,
      error => console.error(error)
    );
};
