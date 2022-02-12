import http from './httpService'
import config from '../config.json'

const { apiUrl } = config
const apiEndpoint = apiUrl + '/movies'

function movieUrl (id) {
  return `${apiEndpoint}/${id}`
}

export function getMovie (movieId) {
  return http.get(movieUrl(movieId))
}

export function saveMovie (movie) {
  /** update/create movie */
  if (movie._id) {
    const body = { ...movie }
    delete body._id
    return http.put(movieUrl(movie._id), body) // update movie
  }

  http.post(apiEndpoint, movie) // create movie
}

export function getMovies () {
  return http.get(apiEndpoint)
}

export function deleteMovie (movieId) {
  http.delete(movieUrl(movieId))
}
