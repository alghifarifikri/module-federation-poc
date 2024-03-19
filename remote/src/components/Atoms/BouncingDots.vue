<template>
  <div class="loadingContainer">
    <div class="ball1"></div>
    <div class="ball2"></div>
    <div class="ball3"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.loadingContainer {
  position: relative;
  width: auto;
  margin-left: 8px;
  margin-bottom: 4px;
  align-self: flex-end;
}
.loadingContainer div {
  height: 4px;
  width: 4px;
  border-radius: 100%;
  float: left;
  margin: 0 3px;
  background: #002e79;
}
.loadingContainer .ball1 {
  z-index: 1;
  -moz-animation: bounce 2s infinite ease-in-out;
  -webkit-animation: bounce 2s infinite ease-in-out;
}
.loadingContainer .ball2 {
  -moz-animation: bounce 2s infinite ease-in-out;
  -webkit-animation: bounce 2s infinite ease-in-out;
  -webkit-animation-delay: 0.25s;
  animation-delay: 0.25s;
}
.loadingContainer .ball3 {
  -moz-animation: bounce 2s infinite ease-in-out;
  -webkit-animation: bounce 2s infinite ease-in-out;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
}
.loadingContainer .ball4 {
  -moz-animation: bounce 2s infinite ease-in-out;
  -webkit-animation: bounce 2s infinite ease-in-out;
  -webkit-animation-delay: 0.75s;
  animation-delay: 0.75s;
}

@-moz-keyframes bounce {
  0%,
  15% {
    -moz-transform: translate(0, 0);
  }
  50% {
    -moz-transform: translate(0, -5px);
    opacity: 0.7;
  }
  85%,
  100% {
    -moz-transform: translate(0, 0);
  }
}
@-webkit-keyframes bounce {
  0%,
  20% {
    -webkit-transform: translate(0, 0);
  }
  50% {
    -webkit-transform: translate(0, -5px);
    opacity: 0.7;
  }
  80%,
  100% {
    -webkit-transform: translate(0, 0);
  }
}
</style>
