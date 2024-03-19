const regexPaste = (event, form, field, include = '') => {
  const regex = new RegExp('[^' + include + ']', 'g')
  setTimeout(() => {
    const message = event.target.value
    form[field] = message.replace(regex, '')
  }, 1)
}

const regexInput = (event, include = '') => {
  const regex = new RegExp('^[' + include + ']*$', 'g')

  return event.key.match(regex) ? true : event.preventDefault()
}

const regexKeyupInput = (value, fieldType, regex, callback) => {
  if (regex) {
    let type = ''
    let replacedValue = ''
    const lastChar = value.substr(value.length - 1)
    const parsedRegex = new RegExp('[^' + regex + ']', 'g')
    const invalidValue = "0,1,2,3,4,5,6,7,8,9,-,π,'".split(',')
    // invalidRegex => value yang tidak support sama reassign local variable jadi harus di reassign ke event.target.value

    if (
      invalidValue.includes(lastChar) ||
      ['number', 'currency'].includes(fieldType)
    ) {
      type = 'target.value'
    } else {
      type = 'local.variabel'
    }
    replacedValue = value.replace(parsedRegex, '')
    return callback(type, replacedValue)
  }
}

const regexReplace = (value, include = '') => {
  const regex = new RegExp('[^' + include + ']', 'g')
  return value.replace(regex, '')
}

const pushPath = (path) => {
  history.pushState({}, null, path)
}

const replacePath = (path, canonical) => {
  const { $store } = useNuxtApp()
  if (process.client && path) {
    if (canonical)
      document.querySelector('link[rel="canonical"]').href = canonical
    $store.commit('setPathChanged', true)
    history.replaceState({}, null, path)
  }
}

const numberOnly = (e) => {
  if (e.charCode >= 48 && e.charCode <= 57) return
  return e.preventDefault()
}

const formatCurrency = (value) => {
  if (!value) return 0
  const number = Math.round(value)
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

export {
  regexPaste,
  regexInput,
  regexKeyupInput,
  regexReplace,
  pushPath,
  replacePath,
  numberOnly,
  formatCurrency
}
