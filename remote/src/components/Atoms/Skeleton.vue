<template>
  <div
    class="skeleton-loading"
    :style="!bgColor ? 'background: #eef3ff' : null"
    :class="[width, height, rounded, bgColor]"
  ></div>
</template>
<script>
export default {
  props: {
    width: {
      type: String,
      default: 'w-40'
    },
    height: {
      type: String,
      default: 'h-40'
    },
    rounded: {
      type: String,
      default: 'rounded-md'
    },
    bgColor: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.skeleton-loading {
  @apply overflow-hidden relative;
}

.skeleton-loading::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translateX(-100%);
  background: linear-gradient(
    100deg,
    hsla(0, 0%, 100%, 0),
    hsla(0, 0%, 100%, 0.541),
    hsla(0, 0%, 100%, 0)
  );
  content: '';
  animation: pulse 1.8s infinite;
}

@keyframes pulse {
  100% {
    transform: translateX(100%);
  }
}
</style>
