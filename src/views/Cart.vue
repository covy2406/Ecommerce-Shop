<script setup lang="ts">
import { useGetDetailCart } from '@/composables/useGetDetailCart'
import { onMounted } from 'vue'

const cartsStore = useGetDetailCart()

onMounted(() => {
  cartsStore.fetchDetailCart(1)
})

console.log('cartsStore', cartsStore.cartDetail)
console.log('product cart', cartsStore?.cartDetail?.data?.products)
</script>
<template>
  <div class="min-h-screen mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold">Cart</h1>
    <table class="w-full mt-4 border-collapse border border-gray-300">
      <thead class="bg-gray-200">
        <tr class="border border-gray-300">
          <th class="p-2 border border-collapse border-gray-300">Product Name</th>
          <th class="p-2 border border-collapse border-gray-300">Quantity</th>
          <th class="p-2 border border-collapse border-gray-300">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border border-gray-300 border-collapse"
          v-for="product in cartsStore?.cartDetail?.data?.products"
          :key="product?.productId"
        >
          <td class="p-2 border border-collapse border-gray-300">{{ product?.productId }}</td>
          <td class="p-2 border border-collapse border-gray-300">{{ product?.quantity }}</td>
          <td class="p-2 border border-collapse border-gray-300">$20</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
