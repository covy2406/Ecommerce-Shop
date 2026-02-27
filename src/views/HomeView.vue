<script setup lang="ts">
import { ref } from 'vue'
// import { useAuthStore } from '@/stores/authStore';
// import type { InterfaceGetAllProduct } from '@/api/product/type';
import { useGetAllProducts } from '@/composables/useGetAllProducts'
import { onMounted } from 'vue'
import ProductCard from '@/components/product/ProductCard.vue'

// import Login  from '@/views/Login.vue'

// function handleLogin(payload: { username: string; password: string }) {
//   console.log("Login with:", payload);
// }

// const authStore = useAuthStore();
// const counter = ref(0)
const productStore = useGetAllProducts()

// handle response API products
onMounted(() => {
  productStore.fetchProducts()
})

// function increment() {
//   counter.value++
// }
</script>

<template>
  <main class="min-h-screen">
    <!-- <div class="container mx-auto px-4 py-8">Home</div> -->
    <!-- <Login @submit="handleLogin"></Login> -->
    <!-- <div class="container mx-auto px-4 py-8">
    <p>counter: {{ counter }}</p>
    <button class="bg-blue-500 rounded-md px-3 py-2 text-white" @click="increment">Increment</button>
  </div>
  <div>
    <p>Test handle Response API</p>
    <button class="bg-green-500 rounded-md px-3 py-2 text-white" @click="handleResponse({ status: 'success', code: 200, data: { message: 'Hello, World!' } })">Test Success</button>
    <button class="bg-red-500 rounded-md px-3 py-2 text-white mx-4" @click="handleResponse({ status: 'error', code: 500, message: 'Internal Server Error' })">Test Error</button>
    <button class="bg-yellow-500 rounded-md px-3 py-2 text-white" @click="handleResponse({ status: 'pending', code: 102 })">Test Pending</button>
  </div> -->
    <div class="container mx-auto px-4 py-8">
      <div
        v-if="!productStore.loading"
        class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <div
          v-for="product in productStore.products"
          :key="product.id"
          class="border border-transparent mb-2 rounded-md"
        >
          <ProductCard :product="product"></ProductCard>
        </div>
      </div>
      <!-- loading phải nằm giữa trung tâm page -->
      <div class="flex min-h-screen justify-center items-center" v-else>Processing…</div>
    </div>
  </main>
</template>
