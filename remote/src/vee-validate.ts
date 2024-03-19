import { defineRule, Field, Form } from 'vee-validate'
import * as rules from '@vee-validate/rules'
import { messages } from './assets/json/validation.json'

// import { messages } from 'vee-validate/dist/locale/en.json'
// import { messages } from 'vee-validate/dist/locale/id.json'

const messageReplacements = {
  min: '{min}',
  max: '{max}',
  length: '{length}',
  width: '{width}',
  height: '{height}',
  size: '{size}'
}

Object.keys(rules).forEach((rule) => {
    defineRule(rule, (value: string, args: string) => {
    // @ts-ignore 
    const validationResult = rules[rule](value, args)  
    if (validationResult === true) {
      return true
    }
    
    // @ts-ignore 
    let customMessage = messages[rule]

    Object.keys(messageReplacements).forEach((replacement) => {
      if (customMessage.includes(`{${replacement}}`)) {
        customMessage = customMessage.replace(`{${replacement}}`, args[0])
      }
    })

    return customMessage || 'Not Valid'
  })
})
export {
  Field,
  Form
}
