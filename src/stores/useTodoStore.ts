import { defineStore } from 'pinia'
import { ref, computed } from 'vue/dist/vue.js'
import type { Task, FilterStatus, PayloadTaskType, UpdateTaskType } from '@/utils/task.type'

// 🧠 Yêu cầu nghiệp vụ

// Xây dựng một ứng dụng quản lý Todo:

// 1️⃣ Chức năng chính
// Thêm task
// Sửa task
// Xóa task
// Đánh dấu completed
// Lọc task theo:
// all
// active
// completed
// Hiển thị tổng số task
// Hiển thị số task chưa hoàn thành

export const useTodoStore = defineStore('todo', () => {
  // const task = ref<string>('');
  const tasks = ref<Task[]>([])
  const filterStatus = ref<FilterStatus>('all')

  // getter computed để lọc tasks dựa trên filterStatus
  const filteredTask = computed<Task[]>(() => {
    switch (filterStatus.value) {
      case 'active':
        return tasks.value.filter((t) => !t.completed)
      case 'completed':
        return tasks.value.filter((t) => t.completed)
      default:
        return tasks.value
    }
  })

  const totalTask = computed<number>(() => tasks.value.length)

  const activeTaskCount = computed<number>(() => tasks.value.filter((t) => !t.completed).length)

  const completedTaskCount = computed<number>(() => tasks.value.filter((t) => t.completed).length)

  // action để thêm task mới vào tasks
  function addTask(payload: PayloadTaskType): void {
    const newTask: Task = {
      ...payload,
      id: Date.now().toString(),
      completed: false,
      createdAt: new Date(),
    }
    tasks.value.push(newTask)
  }

  function updateTask(id: string, payload: UpdateTaskType): void {
    const task = tasks.value.find((t) => t.id === id)

    if (!task) return
    // 💡 Vì sao dùng Object.assign?
    // Giữ reactivity
    // Không thay reference object
    Object.assign(task, payload, {
      updatedAt: new Date(),
    })
  }

  // delete task
  function deleteTask(id: string): void {
    tasks.value = tasks.value.filter((t) => t.id !== id)
  }

  // toggle task
  function toggleTask(id: string): void {
    const task = tasks.value.find((t) => t.id === id)
    if (!task) return

    task.completed = !task.completed
    task.updatedAt = new Date()
  }

  // set filter status
  function setFilterStatus(status: FilterStatus) {
    filterStatus.value = status
  }

  return {
    // state
    tasks,
    filterStatus,

    // getter
    filteredTask,
    totalTask,
    activeTaskCount,
    completedTaskCount,

    // action
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
    setFilterStatus,
  }
})
