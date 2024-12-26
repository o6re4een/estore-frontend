<template>
  <div
    class="min-h-screen bg-background text-text flex justify-center items-center md:p-6 p-0 animate__fadeInDown animate__animated"
  >
    <div class="max-w-4xl bg-surface md:p-6 p-2 rounded-xl shadow-lg flex flex-col gap-6">
      <h1 class="text-2xl font-bold text-primary">{{ product?.title }}</h1>
      <div class="flex flex-col sm:flex-col gap-6">
        <img
          :src="product?.image"
          alt="Product Image"
          class="w-full sm:w-1/2 h-auto object-contain rounded-lg"
        />
        <div class="flex flex-col justify-between gap-4">
          <div></div>
          <p class="text-muted">{{ product?.description }}</p>
          <div class="flex justify-between items-center">
            <span class="text-xl font-semibold">{{ product?.price }} $</span>
            <button
              class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              @click="addToBasket(product)"
            >
              Add to Cart
            </button>
          </div>
          <RatingComponent :rate="product?.rating?.rate" :count="product?.rating?.count" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useProductsStore } from '@/stores/products'

import { useRoute } from 'vue-router'
import RatingComponent from '@/components/RatingComponent.vue'
const productsStore = useProductsStore()
const { addToBasket, removeFromBasket } = productsStore
const selectedProduct = computed(() => productsStore.selectedProduct)

const route = useRoute()
const product = ref(null)

onMounted(async () => {
  if (!selectedProduct.value) {
    await productsStore.fetchProductById(route.params.id)
  }
  // Заглушка: данные для продукта
  console.log(route.params.id, selectedProduct.value)
  product.value = {
    id: route.params.id,
    ...selectedProduct.value
  }
})
</script>

<style scoped>
/* Адаптивные стили */
</style>
