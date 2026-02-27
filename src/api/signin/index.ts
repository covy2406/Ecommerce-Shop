import type { InterfaceSigInPrams, InterfaceSigninUser } from './type'
import { API_URL } from '@/api/index'

// bổ xung thêm InterfaceSigInResponse có trả về là token: string

export async function signin(credentials: InterfaceSigninUser): Promise<InterfaceSigInPrams> {
  try {
    const res = await fetch(API_URL + 'auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
    if (!res.ok) {
      const message = await res.text()
      throw new Error(`[${res.status}] ${message}`)
    }
    return (await res.json()) as InterfaceSigInPrams
  } catch (error) {
    throw error
  }
}

