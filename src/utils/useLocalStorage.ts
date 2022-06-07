export const canNotUseLocalStorage = !window.localStorage

export const toDataArray = (key: string) => JSON.parse(localStorage.getItem(key))

const toDataJson = (data: object) => JSON.stringify(data)

export const setLocaoStorageWithObject = (key: string, data: object) => {
  localStorage.setItem(key, toDataJson(data))
}
