<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main class="px-4 py-10 text-center text-teal-700 dark:text-gray-200">
    <div class="text-4xl">
      <div class="i-carbon-warning" />
    </div>
    <RouterView />
    <div>
      <button class="text-sm m-3 mt-8 px-6 py-2 rounded bg-teal-700/10" @click="router.back()">
        返回
      </button>
    </div>
  </main>
</template>
