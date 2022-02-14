import axios from 'axios'
import { toast } from 'react-toastify'
import logger from './logService'

axios.interceptors.response.use(null, error => {
  const expectedError = //Handle Unexpected Errors Globally
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500

  if (!expectedError) {
    // If unexpected error
    logger.log(error) // Log the error
    // Raven.captureMessage('Something went wrong')
    toast.error('An unpexpected error occurred.')
  }

  return Promise.reject(error)
})

/** Calling Protected API Endpoints */
function setJwt (jwt) {
  // Configure default headers, you can specify config defaults that will be applied to every request
  axios.defaults.headers.common['x-auth-token'] = jwt
}

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
}

export default http
