/**
 * createHttpHeaders
 * @param {object} values A key/value object for custom header values.
 * @returns {Promise<Headers>}
 */
export default async (values = {}) => {
  // Set up header values.
  const headerValues: any = {
    'Content-Type': 'application/json',
    ...values,
  };

  // Add session token
  await fetch('/session/token')
    .then(response => response.text())
    .then(
      token => {
        headerValues['X-CSRF-Token'] = token;
      },
      error => console.error(error),
    );

  // Set up and return headers.
  const headers = new Headers(headerValues);

  return headers;
};
