import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { InterfaceSigninUser, InterfaceSigInPrams } from '@/api/signin/type'
import { signin } from '@/api/signin'

interface AuthState {
  user: InterfaceSigninUser | null
}

export const useAuthStore = defineStore('auth', () => {
  // state
  const user = ref<InterfaceSigninUser | null>(null)
  const token = ref<string | null>(localStorage.getItem('token'))

  const loading = ref(false)
  const error = ref<string | null>(null)

  // ── Getters ────────────────────────────────────────
  const isAuthenticated = computed(() => !!token.value)

  // ── Actions ────────────────────────────────────────
  async function login(credentials: InterfaceSigninUser) {
    loading.value = true
    error.value = null

    try {
      const res = await signin(credentials)

      token.value = res.token
      localStorage.setItem('token', res.token)

      // Nếu API có endpoint /me thì fetch user ở đây
      // user.value = await fetchMe(res.token)
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Đăng nhập thất bại'
      throw err
    } finally {
      loading.value = false
    }
  }

  function setUser(data: InterfaceSigninUser) {
    user.value = data
  }

  function logout() {
    user.value = null
    token.value = null
    localStorage.removeItem('token')
  }

  return {
    user,
    token,
    loading,
    error,
    isAuthenticated,
    login,
    logout,
    setUser
  }
})
