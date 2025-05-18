/**
 * createHttpHeaders
 * @param {object} values A key/value object for custom header values.
 * @returns {Promise<Headers>}
 */
export default async (values = {}) => {
  // Set up header values.
  const headerValues = {
    'Content-Type': 'application/json',
    ...values,
  };

  // Add session token
  await fetch(`${import.meta.env.VITE_API_URL}/session/token`)
    .then(response => response.text())
    .then(
      token => {
        headerValues['X-CSRF-Token'] = token;
      },
      error => {}
    );

  // Set up and return headers.
  const headers = new Headers(headerValues);

  return headers;
};
