import Cookie from 'js-cookie';

/**
 * 设置cookie
 * @param {*} Info
 */
export function setUserCookies(Info) {
  console.log(Info);
  const arr = Object.entries(Info);
  console.log(arr);
  for (let i = 0; i < arr.length; i += 1) {
    Cookie.set(arr[i][0], arr[i][1]);
  }
  return true;
}

/**
 * 获取cookie
 */
export function getUserCookies() {
  return {
    username: Cookie.get('username'),
    appkey: Cookie.get('appkey'),
    role: Cookie.get('role'),
    email: Cookie.get('email'),
  };
}

/**
 * 移除cookie
 */
export function removeUserCookies() {
  Cookie.remove('username');
  Cookie.remove('appkey');
  Cookie.remove('role');
  Cookie.remove('email');
  return true;
}
