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

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
}

export default http
