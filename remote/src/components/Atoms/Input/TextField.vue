<template>
  <!-- <Field 
    :id="fieldId"
    v-slot="{ field, errors }"
    v-model="innerValue"
    class="mb-4"
    :vid="vid"
    tag="div"
    :name="name"
    :rules="parsedRules"
  > -->
    <v-text-field
      v-model="innerValue"
      :label="$attrs.label"
      :type="isPasswordField ? (!showPassword ? 'password' : 'text') : type"
      :variant="variant"
      :class="['text-field', $attrs.class]"
      @click="$emit('click')"
      @blur="handleBlur($event)"
      @focus="handleFocus($event)"
      @paste="handlePaste($event)"
      @keypress="handleKeypress($event)"
      @keyup="handleKeyup($event)"
      @input="($event) => $emit('input', $event)"
    >
      <template v-if="isPasswordField" #append-inner>
        <button type="button" @click="showPassword = !showPassword">
          <nuxt-icon
            :name="showPassword ? 'icon-eye' : 'icon-eye-slash'"
            class="text-xl"
            filled
          />
        </button>
      </template>
      <template v-if="prefix" #prepend-inner>
        <slot name="prefix"></slot>
      </template>
    </v-text-field>
  <!-- </Field> -->
</template>

<script>
import { regexKeyupInput, regexInput } from "../../../utils/helpers.js";
import { device } from "../../../utils/device.js";

export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    vid: {
      type: String
    },
    type: {
      type: String,
      default: 'text'
    },
    variant: {
      type: String,
      default: 'underlined'
    },
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      default: null
    },
    mdCounter: {
      type: Boolean,
      default: false
    },
    disabledColor: {
      type: Boolean,
      default: false
    },
    regexInput: {
      type: String,
      default: null
    },
    appendIcon: {
      type: String,
      default: null
    },
    maxlength: {
      type: String,
      default: null
    },
    fieldType: {
      type: String,
      default: null,
      validator(value) {
        return ['currency', 'number', 'textarea'].includes(value)
      }
    },
    rules: {
      type: [Object, String],
      default: ''
    },
    presistentLabel: {
      type: Boolean,
      default: false
    },
    // eslint-disable-next-line vue/require-default-prop
    value: {
      type: null
    },
    inputClass: {
      type: String,
      default: ''
    },
    prefix: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click', 'input', 'blur', 'focus', 'error'],
  data: () => ({
    showPassword: false,
    isPasswordField: false
  }),
  computed: {
    parsedRules() {
      if (this.type === 'password' && typeof this.rules === 'object') {
        return {
          ...this.rules,
          max: 40,
          regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d\S]{7,40}$/
        }
      } else {
        return this.rules
      }
    },
    innerValue: {
      get() {
        return this.value
      },
      set(newValue) {
        console.log('newValue', newValue)
        this.$emit('input', newValue)
      }
    },
    fieldId() {
      return this.id ? this.id : (Math.random() + 1).toString(36).substring(7)
    }
  },
  mounted() {
    console.log('isDesktop', device().isDesktop)
    console.log('isMobile', device().isMobile)
    this.isPasswordField = this.type === 'password'
  },
  methods: {
    handleBlur(e) {
      this.$emit('blur', e)
      const value = e.target.value
      if (value) {
        if (this.fieldType === 'currency') {
          this.innerValue = value.replace(/(.)(?=(\d{3})+$)/g, '$1.')
        }
      }
    },
    handleFocus(e) {
      this.$emit('focus', e)
      if (e.target.value) {
        if (this.fieldType === 'currency') {
          this.innerValue = null
        }
      }
    },
    handlePaste(e) {
      if (this.regexInput) {
        const regex = new RegExp('[^' + this.regexInput + ']', 'g')
        setTimeout(() => {
          const message = e.target.value
          this.innerValue = message.replace(regex, '')
        }, 1)
      }
    },
    handleKeypress(e) {
      if (device().isDesktop) {
        if (this.regexInput) regexInput(e, this.regexInput)
      }
    },
    handleKeyup(e) {
      if (device().isMobileOrTablet) {
        regexKeyupInput(
          e.target.value,
          this.fieldType,
          this.regexInput,
          (type, value) => {
            if (type === 'target.value') {
              e.target.value = value
            }
            this.innerValue = value
          }
        )
        this.handeMaxLengthOnMobile(e)
      }
    },
    handeMaxLengthOnMobile(e) {
      const max = parseInt(this.maxlength)
      if (e.target.value.length > max) {
        e.target.value = e.target.value.substr(0, max)
      }
    },
    errorMessages(value) {
      if (value) {
        this.$emit('error', true)
        if (value.includes('karakter') && this.fieldType === 'number') {
          return value.replace('karakter', 'digit')
        } else if (value.includes('Format salah') && this.type === 'password') {
          return 'Minimum 7 karakter dengan huruf besar, huruf kecil, dan angka'
        } else {
          return value
        }
      }
      this.$emit('error', false)
      return ''
    }
  }
}
</script>

<style lang="scss">
@import './input.style.scss';
</style>
