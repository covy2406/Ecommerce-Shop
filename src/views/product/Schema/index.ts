import { z } from 'zod'

export const updateProductSchema = z.object({
  title: z.string().min(3, 'Title is required').max(100, 'Title must be at most 100 characters'),

  price: z.coerce.number().positive('Price must be a positive number'),

  description: z
    .string()
    .min(10, 'Description is required')
    .max(500, 'Description must be at most 500 characters'),

  category: z.string().min(5, 'Category is required'),

  image: z.string().url('Image must be a valid URL'),
  // Nếu dùng z.number() sẽ lỗi
  // coerce tự convert string → number
  rating: z.object({
    rate: z.coerce.number().min(0, 'Rate must be >= 0'),
    count: z.coerce.number().min(0, 'Count must be >= 0'),
  }),
})

export type UpdateProductSchemaType = z.infer<typeof updateProductSchema>
