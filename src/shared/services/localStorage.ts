export const getItem = (key: string) => {
  const result = window.localStorage.getItem(key)

  return result ? result : null
}

export const setItem = (key: string, value: string) => {
  window.localStorage.setItem(key, value)
}
