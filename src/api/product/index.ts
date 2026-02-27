import { API_URL } from '..'
import type {
  InterfaceGetDetailProduct,
  InterfaceGetAllProduct,
  InterfaceAddProduct,
  InterfaceUpdateProduct,
} from './type'

export const getDetailProduct = async (id: number): Promise<InterfaceGetDetailProduct> => {
  const res = await fetch(`${API_URL}products/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return (await res.json()) as InterfaceGetDetailProduct
}

export const getAllProduct = async () // params: InterfaceGetAllProduct,
: Promise<InterfaceGetAllProduct[]> => {
  const res = await fetch(`${API_URL}products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return (await res.json()) as InterfaceGetAllProduct[]
}

export const addNewProduct = async (
  params: InterfaceAddProduct,
): Promise<InterfaceGetDetailProduct> => {
  const res = await fetch(`${API_URL}products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })
  return (await res.json()) as InterfaceGetDetailProduct
}

export const deleteProduct = async (id: number): Promise<void> => {
  await fetch(`${API_URL}products/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const updateProduct = async (
  id: number,
  body: InterfaceUpdateProduct,
): Promise<InterfaceGetDetailProduct> => {
  const res = await fetch(`${API_URL}products/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  return (await res.json()) as InterfaceGetDetailProduct
}
