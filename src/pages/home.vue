<script lang="ts" setup></script>

<template>
  <div class="text-teal-700">
    <h1 class="text-3xl font-bold">Home Page</h1>
    <RouterLink class="hover:underline" to="/about">Go to About Page</RouterLink>
  </div>
</template>

<style scoped></style>

<route lang="yaml">
meta:
  layout: default
</route>
