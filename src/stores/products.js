import { defineStore } from 'pinia'
export const useProductsStore = defineStore(
  'products',
  {
    state: () => ({
      products: [],
      categories: [],
      filteredProducts: [],
      selectCategory: '',
      selectedProduct: null,
      userBasket: []
    }),

    actions: {
      async fetchProducts() {
        if (localStorage.getItem('products')) {
          this.products = JSON.parse(localStorage.getItem('products'))
          this.filteredProducts = this.products
          return
        }
        const response = await fetch('https://fakestoreapi.com/products')

        this.products = await response.json()
        this.filteredProducts = this.products
        localStorage.setItem('products', JSON.stringify(this.products))
        // console.log(this.products)
      },
      selectProduct(product) {
        this.selectedProduct = product
      },
      getBasket() {
        if (localStorage.getItem('userBasket')) {
          this.userBasket = JSON.parse(localStorage.getItem('userBasket'))
        }
      },

      addToBasket(product) {
        if (this.userBasket.some((item) => item.id === product.id)) {
          this.userBasket = this.userBasket.map((item) => {
            if (item.id === product.id) {
              item.quantity++
            }
            return item
          })
        } else {
          this.userBasket.push({ ...product, quantity: 1 })
        }

        localStorage.setItem('userBasket', JSON.stringify(this.userBasket))
      },
      removeFromBasket(product) {
        if (this.userBasket.some((item) => item.id === product.id)) {
          this.userBasket = this.userBasket.map((item) => {
            if (item.id === product.id) {
              item.quantity--
            }
            return item
          })
          this.userBasket = this.userBasket.filter((item) => item.quantity > 0)
        }

        localStorage.setItem('userBasket', JSON.stringify(this.userBasket))
        return
      },

      async fetchProductById(id) {
        const resp = await fetch('https://fakestoreapi.com/products/' + id)
        this.selectedProduct = await resp.json()

        return
      },
      selectCategory(category) {
        if (category === 'ALL') {
          this.filteredProducts = this.products

          return
        }
        this.selectedCategory = category
        this.filteredProducts = this.products.filter(
          (product) => product.category === this.selectedCategory
        )
      },
      async fetchCategories() {
        if (localStorage.getItem('categories')) {
          this.categories = JSON.parse(localStorage.getItem('categories'))
          return
        }
        const response = await fetch(`https://fakestoreapi.com/products/categories`)
        this.categories = await response.json()
        localStorage.setItem('categories', JSON.stringify(this.categories))
      },

      async fetchProductsByCategory(category) {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
        this.products = await response.json()
      }
    }
  },
  {
    persist: {
      debug: true,
      storage: localStorage,
      pick: ['userBasket']
    }
  }
)
