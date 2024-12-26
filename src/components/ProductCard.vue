<template>
  <div
    class="flex flex-col items-start gap-4 max-w-[310px] p-4 bg-surface rounded-xl text-text overflow-hidden hover:scale-110 transition-all duration-500"
  >
    <h2 class="text-xl font-semibold">
      {{ title.slice(0, 20) + '...' }}
    </h2>
    <CardDevider />
    <div class="w-full max-h-24 overflow-hidden">
      <img :src="imageUrl" class="w-full h-24 object-contain" />
    </div>

    <RatingComponent :rate="rating.rate" :count="rating.count" />
    <CardDevider />
    <div class="flex flex-col gap-3">
      <p class="text-sm text-start">
        {{ description.slice(0, 50) + '...' }}
      </p>
      <div class="w-full flex justify-end">
        <p
          class="text-sm text-end p-2 bg-secondary hover:bg-primary duration-500 rounded-lg w-fit text-surface"
        >
          {{ price }} $
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import RatingComponent from '@/components/RatingComponent.vue'
import CardDevider from '@/components/CardDevider.vue'
import { ref, defineProps } from 'vue'

const props = defineProps({
  imageUrl: {
    type: String,
    required: true,
    default: ''
  },
  description: {
    type: String,
    required: true,
    default: ''
  },
  price: {
    type: Number,
    required: true,
    default: 0
  },
  title: {
    type: String,
    required: true,
    default: ''
  },
  rating: {
    type: Object,
    required: true,
    default: 0
  }
})
</script>

<style lang="scss" scoped></style>
