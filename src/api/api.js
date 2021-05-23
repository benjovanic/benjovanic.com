import { handleResponse, handleError } from './apiUtils';

const baseUrl = 'https://api-benjovanic-dot-com.herokuapp.com';

export const healthCheck = () => fetch(`${baseUrl}/health-check`)
  .then(handleResponse)
  .catch(handleError);

export const contact = (data) => fetch(`${baseUrl}/contact`, {
  method: 'POST',
  headers: { 'content-type': 'application/json' },
  body: JSON.stringify(data),
})
  .then(handleResponse)
  .catch(handleError);
