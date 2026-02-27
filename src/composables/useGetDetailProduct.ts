import { defineStore } from 'pinia'
import type { InterfaceGetDetailProduct } from '@/api/product/type'
import { getDetailProduct } from '@/api/product'
import { ref } from 'vue'

export const useGetDetailProduct = defineStore('getDetailProduct', () => {
  const productDetail = ref<InterfaceGetDetailProduct | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchProductDetail(id: number) {
    loading.value = true
    error.value = null
    try {
      productDetail.value = await getDetailProduct(id)
    } catch (err) {
      error.value = err as string
    } finally {
      loading.value = false
    }
  }

  return {
    productDetail,
    loading,
    error,
    fetchProductDetail,
  }
})
