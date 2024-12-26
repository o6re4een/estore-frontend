<template>
  <main class="bg-background min-h-screen">
    <HeaderComponent />
    <div class="container mx-auto flex flex-col items-center px-4 sm:px-0">
      <RouterView />
    </div>
  </main>
</template>

<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped></style>
