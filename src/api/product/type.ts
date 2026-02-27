import type { ApiResponse } from '@/utils/type.common'

export interface InterfaceGetDetailProduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: IRating
}

export interface InterfaceGetAllProduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: IRating
}

export interface IRating {
  rate: number
  count: number
}

export interface InterfaceGetDetailProduct extends ApiResponse<InterfaceGetDetailProduct> {}
export interface InterfaceGetAllProduct extends ApiResponse<InterfaceGetAllProduct[]> {}
export interface InterfaceAddProduct extends Omit<InterfaceGetDetailProduct, 'id'> {}
export interface InterfaceUpdateProduct extends Partial<Omit<InterfaceGetDetailProduct, 'id'>> {}
