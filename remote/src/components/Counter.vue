<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterStore } from "../stores/counter";
const counterStore = useCounterStore();
const { count } = storeToRefs(counterStore);
</script>

<template>
  <button
    class="button"
    @click="counterStore.increment"
  >
    Remote counter: {{ count }}
  </button>
</template>

<style>
.button {
  background: #0084ff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 16px;
}
</style>