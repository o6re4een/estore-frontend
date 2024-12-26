<template>
  <section class="flex flex-row gap-2 bg-surface mb-16 animate__animated animate__fadeInDown">
    <div class="flex flex-row gap-2 container mx-auto p-4 justify-between items-center text-text">
      <RouterLink to="/" class="text-text text-2xl">
        <div class="flex flex-row gap-2 items-center">
          <svg
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
          <span class="text-text text-2xl">Ecommerce Shop</span>
        </div>
      </RouterLink>
      <!-- Иконка корзины -->
      <RouterLink to="/basket" class="flex flex-row gap-2 items-center relative">
        <img src="@/assets/basket-shopping-simple.svg" class="w-8 h-8" />

        <span
          class="text-text text-sm absolute bg-primary px-[6px] left-5 top-0 py-0.5 rounded-full"
          >{{ userBasket.length }}</span
        >
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { useProductsStore } from '../stores/products'
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'

const store = useProductsStore()
const storeRefs = storeToRefs(store)
const { userBasket } = storeRefs
onMounted(() => {
  store.getBasket()
})
</script>

<style lang="scss" scoped></style>
