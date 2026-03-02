import { defineStore } from 'pinia'
import type { InterfaceGetAllCartResponse } from '@/api/cart/type'
import { ref } from 'vue'
import { getAllCart } from '@/api/cart'

export const useGetAllCart = defineStore('getAllCart', () => {
  const carts = ref<InterfaceGetAllCartResponse[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchCarts() {
    loading.value = true
    error.value = null
    try {
      const res = await getAllCart()
      carts.value = res
    } catch (err) {
      error.value = err as string
    } finally {
      loading.value = false
    }
  }

  return {
    carts,
    loading,
    error,
    fetchCarts,
  }
})
