export interface Task {
  id: string
  title: string
  description?: string
  completed: boolean
  createdAt: Date
  updatedAt?: Date
  priority: 'low' | 'medium' | 'high'
}

export type FilterStatus = 'all' | 'active' | 'completed'

// add task type
export type PayloadTaskType = Omit<Task, 'id' | 'createdAt' | 'completed'>

// update task type
export type UpdateTaskType = Partial<Omit<Task, 'id' | 'createdAt'>>
