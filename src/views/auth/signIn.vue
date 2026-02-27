<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import type { InterfaceSigninUser } from '@/api/signin/type'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()
const form = reactive<InterfaceSigninUser>({
  username: '',
  password: '',
})

function handleSubmit() {
  try {
    authStore.login(form)
    router.push('/')
  } catch (err) {
    console.error('Login failed:', err)
  }
}
</script>

<template>
  <div class="min-h-screen">
    <form class="container mx-auto px-4 py-8 w-100">
      <div class="mb-4">
        <label for="username">Username:</label>
        <input
          class="block w-full mt-1 p-2 border rounded-md"
          type="text"
          id="username"
          name="username"
          data-testid="username-input"
          v-model="form.username"
        />
      </div>
      <div class="mb-4">
        <label for="password">Password:</label>
        <input
          class="block w-full mt-1 p-2 border rounded-md"
          type="password"
          id="password"
          name="password"
          data-testid="password-input"
          v-model="form.password"
        />
      </div>
      <button
        class="bg-blue-500 rounded-md px-3 py-2 text-white hover:bg-blue-600"
        @click.prevent="handleSubmit"
      >
        Submit
      </button>
    </form>
  </div>
</template>
