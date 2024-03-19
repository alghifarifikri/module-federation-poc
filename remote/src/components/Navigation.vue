<template>
    <nav class="navigation" v-bind="$attrs">
        <ul class="nav-item">
            <li>
                <a href="/" class="text-blue-500">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
                <a href="/blog">Blog</a>
            </li>
            <li>
                <a href="/publisher">Publisher</a>
            </li>
        </ul>
    </nav>
    <!-- <div class="mt-10">
        <Counter />
        <Dialog />
    </div> -->
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

// import Counter from "../components/Counter.vue";
// import Dialog from "../components/Dialog.vue";
onMounted(() => {
    localStorage.setItem('test-nav', 'test')
})
</script>

<style lang="scss">
.navigation {
    @apply bg-blue-500 p-2;
    .nav-item {
        @apply flex gap-2;
        li {
            @apply list-none;
            a {
                @apply underline text-white;
            }
        }
    }
}
</style>