/**
 * createHttpHeaders
 * @param {object} values A key/value object for custom header values.
 * @returns {Headers}
 */
export default (values = {}) => {
  // Set up header values.
  const headerValues: any = {
    'Content-Type': 'application/json',
    ...values,
  };

  // Set up and return headers.
  return new Headers(headerValues);
};
