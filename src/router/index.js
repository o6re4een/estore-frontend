import { createWebHistory, createRouter } from 'vue-router'

// import HomeView from '@/views/HomeView.vue'
import ProductPage from '@/components/ProductPage.vue'

const routes = [
  { path: '/', component: () => import('@/views/HomeView.vue') },
  {
    path: '/product/:id',

    component: ProductPage
  },
  {
    path: '/basket',
    component: () => import('@/views/BasketView.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
