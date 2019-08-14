import Cookies from 'js-cookie'

let TokenKey = 'Czz'

// 获取token
export function getToken () {
  return Cookies.get(TokenKey)
}

// 创建token
export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

// 移除token
export function removeToken () {
  return Cookies.remove(TokenKey)
}
