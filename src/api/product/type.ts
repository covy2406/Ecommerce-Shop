import type { ApiResponse } from "@/utils/type.common"

export interface InterfaceGetDetailProduct {
  id: number,
  title?: string,
  price?: number,
  description?: string,
  category?: string,
  image?: string
}

export interface InterfaceGetDetailProduct extends ApiResponse<InterfaceGetDetailProduct> {}
export interface InterfaceGetAllProduct extends ApiResponse<InterfaceGetDetailProduct[]> {}
export interface InterfaceAddProduct extends Omit<InterfaceGetDetailProduct, 'id'> {}
export interface InterfaceUpdateProduct extends Partial<Omit<InterfaceGetDetailProduct, 'id'>> {}