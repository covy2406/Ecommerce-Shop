import type { ApiResponse } from '@/utils/type.common'

export interface InterfaceGetAllCartResponse {
  id: number
  userId: number
  date: string
  products: IProduct[]
  __v: number
}

export interface IProduct {
  productId: number
  quantity: number
}

export interface InterfaceGetAllCart extends ApiResponse<InterfaceGetAllCartResponse[]> {}
export interface InterfaceGetDetailCartResponse extends ApiResponse<InterfaceGetAllCartResponse> {}
