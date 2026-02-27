<script setup lang="ts">
import { ref } from 'vue';
import { handleResponse } from '@/views/LearningTypeScript';
import { useAuthStore } from '@/stores/authStore';
import type { InterfaceGetAllProduct } from '@/api/product/type';

// import Login  from '@/views/Login.vue'

// function handleLogin(payload: { username: string; password: string }) {
//   console.log("Login with:", payload);
// }

const authStore = useAuthStore();
const counter = ref(0);
const product = ref<InterfaceGetAllProduct | null>(null);


function increment() {
  counter.value++;
}


</script>

<template>
  <main class="min-h-screen">
    <!-- <div class="container mx-auto px-4 py-8">Home</div> -->
    <!-- <Login @submit="handleLogin"></Login> -->
  <div class="container mx-auto px-4 py-8">
    <p>counter: {{ counter }}</p>
    <button class="bg-blue-500 rounded-md px-3 py-2 text-white" @click="increment">Increment</button>
  </div>
  <div>
    <p>Test handle Response API</p>
    <button class="bg-green-500 rounded-md px-3 py-2 text-white" @click="handleResponse({ status: 'success', code: 200, data: { message: 'Hello, World!' } })">Test Success</button>
    <button class="bg-red-500 rounded-md px-3 py-2 text-white mx-4" @click="handleResponse({ status: 'error', code: 500, message: 'Internal Server Error' })">Test Error</button>
    <button class="bg-yellow-500 rounded-md px-3 py-2 text-white" @click="handleResponse({ status: 'pending', code: 102 })">Test Pending</button>
    <!-- <CustomButton @click="handleResponse({ status: 'success', code: 200, data: { message: 'Hello, World!' } })">Custom Button</CustomButton> -->
  </div>
  <div class="container mx-auto px-4 py-8">

  </div>
  </main>
</template>
