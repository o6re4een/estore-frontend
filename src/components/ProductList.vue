<template>
  <div class="flex flex-col items-start gap-8 animate__animated animate__fadeInUp">
    <div class="flex flex-row gap-2 justify-between w-full">
      <h1 class="text-2xl text-text">Наши лучшие товары</h1>
      <div class="flex flex-row gap-3">
        <button
          class="flex items-center justify-center rounded-full p-2 text-base bg-muted w-10 h-10 text-surface"
          @click="setPaginationSize(10)"
        >
          10
        </button>
        <button
          class="flex items-center justify-center rounded-full p-2 text-base bg-muted w-10 h-10 text-surface"
          @click="setPaginationSize(5)"
        >
          5
        </button>
      </div>
    </div>
    <div class="flex flex-col md:flex-row justify-between text-text w-full">
      <h2 class="text-xl">Категории товаров</h2>
      <div class="flex flex-col md:flex-row gap-2">
        <span
          class="text-text text-base bg-surface rounded-full text-center px-2 py-1"
          v-for="category of categories"
          @click="selectCategory(category)"
        >
          {{ category }}
        </span>
      </div>
    </div>

    <div class="flex flex-row gap-4 flex-wrap justify-evenly">
      <div v-for="(product, key) in currentPageProducts">
        <TransitionGroup tag="div" name="list">
          <RouterLink
            :to="`/product/${product.id}`"
            @click="selectProduct(product)"
            :key="product.id"
          >
            <ProductCard
              :title="product.title"
              :imageUrl="product.image"
              :description="product.description"
              :price="product.price"
              :rating="product.rating"
          /></RouterLink>
        </TransitionGroup>
      </div>
    </div>
    <div class="shop__pagination">
      <img
        src="@/assets/ArrowLeft.svg"
        alt="404 image"
        class="sh-pg__arr"
        @click="prevPage"
        :disabled="currentPage === 1"
      />
      <span class="pg__number">{{ currentPage }} / {{ totalPages }}</span>
      <img
        src="@/assets/ArrowRight.svg"
        alt="404 image"
        class="sh-pg__arr"
        @click="nextPage"
        :disabled="currentPage === totalPages"
      />
    </div>
  </div>
</template>

<script setup>
import { useProductsStore } from '@/stores/products'
import { computed, onMounted, ref } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
const productsStore = useProductsStore()

const { selectCategory, selectProduct } = productsStore
const products = computed(() => productsStore.filteredProducts)
const categories = computed(() => [...productsStore.categories, 'ALL'])

const productsPerPage = ref(10)
const currentPage = ref(1)
const totalPages = computed(() => Math.ceil(products.value.length / productsPerPage.value))

const setPaginationSize = (size) => {
  productsPerPage.value = size
}

const currentPageProducts = computed(() => {
  const start = (currentPage.value - 1) * productsPerPage.value
  const end = start + productsPerPage.value
  return products.value.slice(start, end)
})

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    scrollToTop()
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    scrollToTop()
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(async () => {
  console.log('mounted')

  if (!products.length) {
    await productsStore.fetchProducts()
  }
  if (!categories.value.length <= 1) {
    await productsStore.fetchCategories()
  }
})
</script>

<style scoped>
.shop__pagination {
  display: flex;
  flex-direction: row;
  align-self: center;
  gap: 10px;
  align-items: center;
  margin-bottom: 30px;
}

.pg__number {
  font-weight: 900;
}

.sh-pg__arr {
  cursor: pointer;
  width: 30px;
  height: 30px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.list-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.list-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.list-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
