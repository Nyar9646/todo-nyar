export const canNotUseLocalStorage: boolean = !window.localStorage

export const toDataArray = (key: string): any => JSON.parse(localStorage.getItem(key))

const toDataJson = (data: object): any => JSON.stringify(data)

export const setLocalStorageWithObject = (key: string, data: object): void => {
  localStorage.setItem(key, toDataJson(data))
}
