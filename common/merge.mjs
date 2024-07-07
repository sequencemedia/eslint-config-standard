export function getLanguageOptions ({ languageOptions = {} }) {
  return languageOptions
}

export function getLinterOptions ({ linterOptions = {} }) {
  return linterOptions
}

export function getProcessor ({ processor = {} }) {
  return processor
}

export function getRules ({ rules = {} }) {
  return rules
}

export function getSettings ({ settings = {} }) {
  return settings
}

export function mergeLanguageOptions (alpha = {}, omega = {}) {
  return (
    Object
      .assign(
        structuredClone(getLanguageOptions(alpha)),
        getLanguageOptions(omega)
      )
  )
}

export function mergeLinterOptions (alpha = {}, omega = {}) {
  return (
    Object
      .assign(
        structuredClone(getLinterOptions(alpha)),
        getLinterOptions(omega)
      )
  )
}

export function mergeRules (alpha = {}, omega = {}) {
  return (
    Object
      .assign(
        structuredClone(getRules(alpha)),
        getRules(omega)
      )
  )
}

export function mergeSettings (alpha = {}, omega = {}) {
  return (
    Object
      .assign(
        structuredClone(getSettings(alpha)),
        getSettings(omega)
      )
  )
}
