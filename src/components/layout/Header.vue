<template>
  <header class="inset-0 flex items-center justify-center">
    <!-- <h1 class="text-4xl font-bold">Home</h1> -->
    <nav class="container mx-auto h-16 py-4">
      <div class="flex items-center justify-between">
        <div class="shrink-0">
          <router-link
            to="/"
            class="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            Logo
          </router-link>
        </div>
        <div>
          <router-link
            to="/"
            class="text-gray-600 hover:text-gray-800 transition-colors px-3 py-2 rounded-md text-sm font-medium"
            active-class="text-indigo-600"
          >
            Home
          </router-link>
          <router-link
            to="/about"
            class="text-gray-600 hover:text-gray-800 transition-colors px-3 py-2 rounded-md text-sm font-medium"
            active-class="text-indigo-600"
          >
            About
          </router-link>
          <router-link
            to="/login"
            class="text-gray-600 hover:text-gray-800 transition-colors px-3 py-2 rounded-md text-sm font-medium"
            active-class="text-indigo-600"
          >
            Login
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
