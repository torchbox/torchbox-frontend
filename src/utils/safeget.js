export const safeGet = (obj, key, defaultValue) => {
  try {
    return key.split(".").reduce((o, x) => {
      return (typeof o == "undefined" || o === null) ? defaultValue : o[x]
    }, obj)
  } catch(e) {
    return defaultValue
  }
}

export default safeGet
