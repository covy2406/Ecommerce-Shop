import { defineStore } from 'pinia'
import type { InterfaceGetAllUser } from '@/api/user/type'
import { ref } from 'vue'
import { getAllUser } from '@/api/user'

export const useGetAllUsers = defineStore('getAllUsers', () => {
  const users = ref<InterfaceGetAllUser[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  async function fetchUsers() {
    loading.value = true
    error.value = null
    try {
      const res = await getAllUser()
      users.value = res
    } catch (err) {
      error.value = err as string
    } finally {
      loading.value = false
    }
  }

  return {
    users,
    loading,
    error,
    fetchUsers,
  }
})
