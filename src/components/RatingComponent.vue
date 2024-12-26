<template>
  <div class="flex items-center space-x-2">
    <div class="flex">
      <template v-for="star in 5" :key="star">
        <svg
          v-if="star <= Math.floor(rate)"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          class="w-6 h-6 text-yellow-500"
        >
          <path
            d="M12 .587l3.668 7.571 8.332 1.209-6.043 5.916 1.429 8.317-7.386-3.883-7.386 3.883 1.429-8.317-6.043-5.916 8.332-1.209z"
          />
        </svg>
        <svg
          v-else-if="star - 1 < rate"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          class="w-6 h-6 text-yellow-500"
        >
          <defs>
            <linearGradient id="half" x1="0" x2="100%" y1="0" y2="0">
              <stop offset="50%" stop-color="currentColor" />
              <stop offset="50%" stop-color="transparent" />
            </linearGradient>
          </defs>
          <path
            fill="url(#half)"
            d="M12 .587l3.668 7.571 8.332 1.209-6.043 5.916 1.429 8.317-7.386-3.883-7.386 3.883 1.429-8.317-6.043-5.916 8.332-1.209z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6 text-gray-300"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4.252l2.382 4.828 5.351.779-3.868 3.765.913 5.324L12 15.637l-4.778 2.511.913-5.324-3.868-3.765 5.351-.779L12 4.252z"
          />
        </svg>
      </template>
    </div>

    <span class="text-gray-600 text-sm">({{ count }})</span>
  </div>
</template>

<script setup>
const props = defineProps({
  rate: {
    type: Number,
    required: true
  },
  count: {
    type: Number,
    required: true
  }
})
</script>

<style scoped></style>
