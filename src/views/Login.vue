<template>
  <main class="min-h-screen">
    <div class="container mx-auto px-4 py-8">
      <h1>Login</h1>
      <form
        @submit.prevent="handleSubmit"
        data-testid="login-form"
        class="container mx-auto bg-slate-300 w-100 rounded-md p-4"
      >
        <div class="mb-4">
          <label for="username">Username:</label>
          <input
            class="block w-full mt-1 p-2 border rounded-md"
            type="text"
            id="username"
            name="username"
            v-model="username"
            data-testid="username-input"
          />
          <p v-if="usernameError" data-testid="username-error">
            {{ usernameError }}
          </p>
        </div>

        <div class="mb-4">
          <label for="password">Password:</label>
          <input
            class="block w-full mt-1 p-2 border rounded-md"
            type="password"
            id="password"
            name="password"
            v-model="password"
            data-testid="password-input"
          />
          <p v-if="passwordError" data-testid="password-error">
            {{ passwordError }}
          </p>
        </div>

        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          data-testid="submit-btn"
        >
          Login
        </button>
      </form>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const emit = defineEmits<{
  (e: 'submit', payload: { username: string; password: string }): void
}>()

const username = ref('')
const password = ref('')

// Validation
const usernameError = computed(() => (username.value.trim() === '' ? 'Username is required' : ''))

const passwordError = computed(() =>
  password.value.length < 6 ? 'Password must be at least 6 characters' : '',
)

function handleSubmit() {
  if (usernameError.value || passwordError.value) return

  console.log('Submitting:', { username: username.value, password: password.value })

  emit('submit', {
    username: username.value,
    password: password.value,
  })
}
</script>
