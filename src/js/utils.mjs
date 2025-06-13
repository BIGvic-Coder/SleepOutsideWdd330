// utils.mjs
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function renderHeader() {
  // Optional: Use this if you want to dynamically render a header
}
