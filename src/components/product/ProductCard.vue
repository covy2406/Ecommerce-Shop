<script setup lang="ts">
import type { InterfaceGetAllProduct } from '@/api/product/type'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'

const router = useRouter()

defineProps<{
  product: InterfaceGetAllProduct
}>()
</script>

<template>
  <div
    class="relative rounded-md border border-transparent overflow-hidden hover:border-gray-300 p-1"
  >
    <div>
      <img
        :src="product.image"
        alt="Product Image"
        class="w-full aspect-square object-cover mb-4 rounded-md"
      />
    </div>
    <div>
      <h3 class="text-lg font-bold">{{ product?.title ?? '' }}</h3>
      <p>{{ product?.category ?? '' }}</p>
      <p class="text-sm text-gray-500">Price: ${{ product?.price ?? 0 }}</p>
    </div>
    <div class="flex items-center justify-between my-2">
      <button class="cursor-pointer rounded-md px-3 py-2 text-white bg-blue-500 hover:bg-blue-600">
        Add to cart
      </button>
      <router-link
        :to="{ name: 'product-detail', params: { id: product.id } }"
        class="cursor-pointer ml-2 rounded-md px-3 py-2 text-white bg-gray-500 hover:bg-gray-600"
        >View Detail</router-link
      >
    </div>
  </div>
</template>
