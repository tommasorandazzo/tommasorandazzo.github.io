import createHttpHeaders from './createHttpHeaders';

/**
 * @function
 * fetchJson
 *  Fetches JSON data from specified endpoint URL.
 *
 *  The URL endpoint.
 */
export default async (url: string) => {
  // if (url.startsWith('/')) {
  //   url = import.meta.env.VITE_API_URL + url;
  // }

  return await fetch(url, {
    headers: await createHttpHeaders(),
  })
    .then(response => response.json())
    .then(
      result => result,
      error => console.error(error)
    );
};
