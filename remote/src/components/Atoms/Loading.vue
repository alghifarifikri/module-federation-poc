<template>
  <div>
    <div v-if="loading" class="loading" :style="{ background: bgColor }">
      <div class="flex flex-col justify-center items-center relative">
        <div>
          <div class="spin">
            <div style="margin-right: 4px">
              <img class="w-10 h-10" src="/img/logo/bizhare-logo.webp" />
            </div>
          </div>
        </div>
        <!-- eslint-disable vue/no-v-html -->
        <p
          v-if="loadingMessage"
          class="mt-5 text-white text-center"
          v-html="loadingMessage"
        ></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    loading() {
      return this.$store.state.index.loading
    },
    loadingMessage() {
      return this.$store.state.index.loadingMessage
    },
    bgColor() {
      return this.$store.state.index.loadingBgColor || 'rgba(0, 0, 0, 0.5)'
    }
  }
}
</script>
<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  display: flex;
  z-index: 100;
  overflow: hidden;
  // background: rgba(0, 0, 0, 0.5);

  //loading
  @keyframes spinner {
    0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
  }
  .spin {
    @apply bg-white w-[90px] h-[90px] flex justify-center items-center rounded-full relative;
    &::before {
      animation: 1.5s linear infinite spinner;
      animation-play-state: inherit;
      border: solid 5px #cfd0d1;
      border-bottom-color: #002e79;
      border-radius: 100%;
      content: '';
      height: 90px;
      width: 90px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      will-change: transform;
    }
  }
}
</style>
