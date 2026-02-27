export interface User {
  id: number
  name: string
  email: string
  gender: 'male' | 'female',
  status: 'active' | 'inactive',
  old?: number,
  hobbies?: string[]
}

export interface Mai extends Omit<User, 'hobbies'> {
  phone: string
}

export interface Lan extends Pick<User, 'hobbies' | 'name' | 'email'> {
  hobbies: string[]
  name: string
  email: string
}

export type ApiResponseCommon<T> = {
  code: number
  data: T
  message: string
}

// Bai 2
export type ApiResponse<T> = 
  | { status: 'success'; code: number; data: T }
  | { status: 'error'; code: number; message: string }
  | { status: 'pending'; code: number }

export function handleResponse <T>(response: ApiResponse<T>): T {
  switch(response.status) {
    case 'success':
      console.log('Request successful with code:', response.code);
      return response.data;
    case 'error':
      throw new Error(response.message);
    case 'pending':
      throw new Error('Request is still pending');
    default:
      const _exhaustive: never = response;
      return _exhaustive;
      // throw new Error('Unknown response status');
  }
}

// Bai 3: Generic Fetch Wrapper

// async function fetchData<T>(url: string): Promise<T> {
//   const res = await fetch(url);
//   if (!res.ok) {
//     throw new Error("Network error");
//   }
//   return res.json() as Promise<T>;
// }

// async function fetchList<T>(url: string): Promise<T[]> {
//   const res = await fetch(url);
//   return res.json() as Promise<T[]>;
// }

export async function fetchData<T>(url: string): Promise<ApiResponseCommon<T>> {
  const res = await fetch(url);
  if(!res.ok) {
    throw new Error("Network error");
  }
  return res.json() as Promise<ApiResponseCommon<T>>;
}

export async function fetchList<T>(url: string): Promise<ApiResponseCommon<T[]>> {
  const res = await fetch(url);
  if(!res.ok) {
    throw new Error("Network error");
  }
  return res.json() as Promise<ApiResponseCommon<T[]>>;
}

// Bai 4: Generic Form Validator: using Generic + Mapped Type + Indexed Access Type.
// 1️⃣ Tổng quan: Code này làm gì?
// Đây là một generic validation engine.
// Nó cho phép bạn:
// Truyền vào một object bất kỳ (data)
// Truyền vào một object rules tương ứng với từng field
// Trả về object kết quả boolean theo từng field

// Nó đảm bảo:
// Rules phải khớp 100% với cấu trúc của data
// Type của value trong rule luôn đúng với field tương ứng
// Không thể validate sai key
// Không thể truyền sai type

// type ValidationRules<T> = {
//  // K: key của T (lặp qua từng key của T tương ứng), T[K]: type của field tương ứng
//   [K in keyof T]: (value: T[K]) => boolean;
// };

// function validate<T>(
//   data: T,
//   rules: ValidationRules<T>
// ): { [K in keyof T]: boolean } {
//   const result = {} as { [K in keyof T]: boolean };

//   for (const key in rules) {
//     result[key] = rules[key](data[key]);
//   }

//   return result;
// }

export type ValidationRules<T> = {
  [K in keyof T]: (value: T[K]) => boolean;
};

// Một hàm có kiểu khai báo không phải là 'undefined', 'void' hoặc 'any' thì phải trả về một giá trị.
export function validate<T>(
  data: T,
  rules: ValidationRules<T> 
): { [K in keyof T]: boolean} {
  const result = {} as { [K in keyof T]: boolean};

  for(const key in rules) {
    result[key] = rules[key](data[key]);
  }
  
  return result;
}

// Bai 5: Type-safe Store
export type User1 = {
  id: number
  name: string
  email: string
}

export function CreateStore() {
  // State sẽ có kiểu là một object với key 'user' và value có thể là User1 hoặc null
  let state: {user: User1 | null} = {
    user: null
  }
  return {
    // Getter để truy cập vào state, trả về kiểu {user: User1 | null}
    get State() {
      return state
    },

    // Setter để truy cập vào state, nhận vào 1 user có kiểu User1 và gán nó vào state.user
    setUser(user: User1) {
      state.user = user
    },

    // Method để xóa user, gán state.user về null
    clearUser() {
      state.user = null
    }
  }
}

// Bai 6:


