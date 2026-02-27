<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useGetDetailProduct } from '@/composables/useGetDetailProduct'
import { onMounted } from 'vue'

const route = useRoute()
const productId = route.params.id
const productDetail = useGetDetailProduct()

onMounted(() => {
  productDetail.fetchProductDetail(Number(productId))
})
</script>
<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="!productDetail.loading" class="max-w-2xl mx-auto bg-white rounded-md shadow-md p-6">
      <div>
        <img
          :src="productDetail?.productDetail?.image"
          alt="Product Image"
          class="w-full aspect-square object-cover mb-4 rounded-md"
        />
      </div>
      <h3 class="text-lg font-bold">{{ productDetail?.productDetail?.title ?? 'No title' }}</h3>
      <p>{{ productDetail?.productDetail?.category ?? 'Unknown Category' }}</p>
      <p class="text-sm text-gray-500">Price: ${{ productDetail?.productDetail?.price }}</p>
      <p class="mt-4">
        {{ productDetail?.productDetail?.description ?? 'No description available' }}
      </p>
      <div class="flex justify-end mt-4">
        <router-link
          :to="`/products/${productId}`"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Edit Product
        </router-link>
      </div>
    </div>
    <div class="flex justify-center items-center min-h-screen" v-else>Loading...</div>
  </div>
</template>
