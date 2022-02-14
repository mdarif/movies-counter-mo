import http from './httpService'
import config from '../config.json'
import jwtDecode from 'jwt-decode'

const { apiUrl } = config
const apiEndpoint = apiUrl + '/auth'
const tokenKey = 'token'

http.setJwt(getJwt())

export async function login (email, password) {
  const { data: jwt } = await http.post(apiEndpoint, {
    // data is the jwt token
    email,
    password
  })
  localStorage.setItem(tokenKey, jwt) //  save the token in local storage
}

export function loginWithJwt (jwt) {
  localStorage.setItem(tokenKey, jwt)
}

export function logout () {
  localStorage.removeItem(tokenKey)
}
export function getCurrentUser () {
  try {
    const jwt = localStorage.getItem(tokenKey)
    return jwtDecode(jwt)
  } catch (ex) {
    return null // we don't have a current user
  }
}

export function getJwt () {
  return localStorage.getItem(tokenKey)
}

const auth = {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt
}

export default auth
