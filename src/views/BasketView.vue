<template>
  <div class="basket-container animate__animated animate__fadeInDown">
    <h1 class="text-2xl font-bold mb-4">Корзина</h1>
    <div v-if="basketItems.length > 0" class="basket-items">
      <div
        v-for="(item, index) in basketItems"
        :key="index"
        class="basket-item flex items-center justify-between mb-4"
      >
        <div class="flex items-center gap-4">
          <img :src="item.image" alt="Product Image" class="w-20 h-20 rounded" />
          <div>
            <h2 class="text-lg font-medium">{{ item.title }}</h2>
            <p class="text-gray-600">{{ item.price }} ₽</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <button
            @click="decreaseQuantity(item)"
            class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            -
          </button>
          <span>{{ item.quantity }}</span>
          <button
            @click="increaseQuantity(item)"
            class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>
        <button @click="removeItem(item)" class="text-red-500 hover:text-red-600">Удалить</button>
      </div>
      <div class="basket-summary mt-6">
        <h3 class="text-xl font-medium">Итог:</h3>
        <p class="text-lg">{{ totalAmount }} $</p>
        <button
          @click="checkout"
          class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Оформить заказ
        </button>
      </div>
    </div>
    <p v-else class="text-gray-500">Корзина пуста.</p>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useProductsStore } from '@/stores/products'

const store = useProductsStore()

// Список товаров в корзине
const basketItems = computed(() => store.userBasket)

// Общая сумма товаров в корзине
const totalAmount = computed(() =>
  basketItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

// Увеличить количество товара
const increaseQuantity = (item) => {
  store.addToBasket(item)
}

// Уменьшить количество товара
const decreaseQuantity = (item) => {
  store.removeFromBasket(item)
}

// Удалить товар из корзины
const removeItem = (item) => {
  while (item.quantity > 0) {
    store.removeFromBasket(item)
  }
}

// Обработать оформление заказа
const checkout = () => {
  alert('Заказ оформлен!')
  store.userBasket = []
  localStorage.removeItem('basket')
}
onMounted(() => {
  store.getBasket()
})
</script>

<style scoped>
.basket-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
}
.basket-item img {
  object-fit: cover;
}
.basket-summary {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
