import { API_URL } from "..";
import type { InterfaceGetDetailProduct, InterfaceGetAllProduct, InterfaceAddProduct, InterfaceUpdateProduct } from "./type";

export const getDetailProduct = async (id: number): Promise<InterfaceGetDetailProduct> => {
  try {
    const res = await fetch(`${API_URL}products/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return (await res.json()) as InterfaceGetDetailProduct
  } catch (e) {
    throw e 
  }
}

export const getAllProduct = async (params: InterfaceGetAllProduct): Promise<InterfaceGetDetailProduct[]> => {
  try {
    const res = await fetch(`${API_URL}products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return (await res.json()) as InterfaceGetDetailProduct[]
  } catch (e) {
    throw e 
  }
}

export const addNewProduct = async (params: InterfaceAddProduct): Promise<InterfaceGetDetailProduct> => {
  try {
    const res = await fetch(`${API_URL}products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
    return (await res.json()) as InterfaceGetDetailProduct
  } catch (e) {
    throw e 
  }
}


export const deleteProduct = async (id: number): Promise<void> => {
  try {
    await fetch(`${API_URL}products/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  } catch (e) {
    throw e 
  }
}

export const updateProduct = async (id: number, params: InterfaceUpdateProduct): Promise<InterfaceGetDetailProduct> => {
  try {
    const res = await fetch(`${API_URL}products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
    return (await res.json()) as InterfaceGetDetailProduct
  } catch (e) {
    throw e 
  }
}