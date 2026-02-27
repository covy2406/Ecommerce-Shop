import type { InterfaceGetAllUser, InterfaceGetDetailUser, InterfaceUpdateUser } from "./type";
import { API_URL } from '@/api/index'

export async function getDetailUser(id: number): Promise<InterfaceGetDetailUser> {
  try {
    const res = await fetch(`${API_URL}users/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return (await res.json()) as InterfaceGetDetailUser
  } catch (e) {
    throw e
  }
}

export async function getAllUser(params: InterfaceGetAllUser): Promise<InterfaceGetDetailUser[]> {
  try {
    const res = await fetch(`${API_URL}users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return (await res.json()) as InterfaceGetDetailUser[]
  } catch (e) {
    throw e
  }
}

export async function addNewUser(username: string, email: string, password: string): Promise<InterfaceGetDetailUser> {
  try {
    const res = await fetch(`${API_URL}users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password
      }),
    })
    return (await res.json()) as InterfaceGetDetailUser
  } catch (e) {
    throw e
  }
}

export async function updateUser(id: number, data: InterfaceUpdateUser): Promise<InterfaceGetDetailUser> {
  try {
    const res = await fetch(`${API_URL}users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return (await res.json()) as InterfaceGetDetailUser
  } catch (e) {
    throw e
  }
}