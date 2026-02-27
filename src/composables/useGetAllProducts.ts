import { defineStore } from 'pinia'
import type { InterfaceGetAllProduct } from '@/api/product/type'
import { getAllProduct } from '@/api/product'
import { ref } from 'vue'

export const useGetAllProducts = defineStore('getAllProducts', () => {
  const products = ref<InterfaceGetAllProduct[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchProducts() {
    loading.value = true
    error.value = null
    try {
      products.value = await getAllProduct()
    } catch (err) {
      error.value = err as string
    } finally {
      loading.value = false
    }
  }

  return {
    products,
    loading,
    error,
    fetchProducts,
  }
})
