import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { InterfaceGetDetailCartResponse } from '@/api/cart/type'
import { getDetailCart } from '@/api/cart'

export const useGetDetailCart = defineStore('getDetailCart', () => {
  const cartDetail = ref<InterfaceGetDetailCartResponse | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchDetailCart(id: number) {
    loading.value = true
    error.value = null
    try {
      const res = await getDetailCart(id)
      cartDetail.value = res
    } catch (err) {
      error.value = err as string
    } finally {
      loading.value = false
    }
  }

  return {
    cartDetail,
    loading,
    error,
    fetchDetailCart,
  }
})
