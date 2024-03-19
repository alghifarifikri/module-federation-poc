<script setup lang="ts">
import { loadRemoteModule } from "@softarc/native-federation";
import { defineAsyncComponent } from "vue";

const Navigation: any = defineAsyncComponent(async () => loadRemoteModule("remote-app", "./Navigation"));
</script>

<template>
  <Navigation v-if="!!Navigation" />
</template>