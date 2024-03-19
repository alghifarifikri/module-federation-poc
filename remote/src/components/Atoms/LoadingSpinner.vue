<template>
  <div class="w-full">
    <nuxt-icon
      class="loading-spinner"
      :style="{ fontSize: size }"
      filled
      name="loading-spinner"
    />
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '30px'
    }
  }
}
</script>

<style lang="scss" scoped>
:deep() {
  .loading-spinner {
    @apply m-auto;
    svg {
      @apply animate-spin;
    }
  }
}
</style>
