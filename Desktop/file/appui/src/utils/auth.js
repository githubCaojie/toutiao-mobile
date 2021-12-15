import Cookies from 'js-cookie'

const ContentToken = 'content-token'
const ContentTokenRef = 'content-token-ref'

export function getToken () {
  return Cookies.get(ContentToken)
}
export function setToken(token) {
  return Cookies.set(ContentToken, token)
}

export function getRefToken() {
  return Cookies.get(ContentTokenRef)
}
export function setRefToken(token) {
  return Cookies.set(ContentTokenRef, token)
}