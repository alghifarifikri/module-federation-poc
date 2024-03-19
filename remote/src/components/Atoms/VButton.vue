<template>
  <button
    :class="[
      'w-full button',
      { primary: isPrimary, secondary: !isPrimary, disabled: disabled },
      classes
    ]"
    :type="$attrs.type || 'submit'"
    :disabled="disabled"
    @click="$emit('action')"
  >
    {{ text }} <BouncingDots v-if="isLoading" />
  </button>
</template>

<script>
import BouncingDots from './BouncingDots.vue'

export default {
  components: { BouncingDots },
  props: {
    text: {
      type: String,
      required: true
    },
    isPrimary: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    classes: {
      type: String,
      default: ''
    }
  },
  emits: ['action']
}
</script>
