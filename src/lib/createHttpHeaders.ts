/**
 * createHttpHeaders
 * @param {object} values A key/value object for custom header values.
 * @returns {Headers}
 */
export default (apiToken = false, values = {}) => {
  // Set up header values.
  const headerValues: { [key: string]: string } = {
    'Content-Type': 'application/json',
    ...values,
  };

  if (apiToken) {
    headerValues['X-API-TOKEN'] = import.meta.env.VITE_API_TOKEN;
  }

  console.log(headerValues);


  // Set up and return headers.
  return new Headers(headerValues);
};
