import type { InterfaceGetAllCartResponse, InterfaceGetDetailCartResponse } from './type'
import { API_URL } from '@/api/index'

export const getAllCart = async (): Promise<InterfaceGetAllCartResponse[]> => {
  const res = await fetch(`${API_URL}carts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return (await res.json()) as InterfaceGetAllCartResponse[]
}

export const getDetailCart = async (id: number): Promise<InterfaceGetDetailCartResponse> => {
  const res = await fetch(`${API_URL}carts/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return (await res.json()) as InterfaceGetDetailCartResponse
}
