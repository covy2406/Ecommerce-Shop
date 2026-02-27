import type { ApiResponse } from "@/utils/type.common"

export interface InterfaceGetDetailUser {
  id: number,
  username: string,
  email: string,
  password: string
  address: IAddress,
  name: IName,
  phone: string,
  __v: number
}


export interface InterfaceGetAllUser {
  id: number,
  username: string,
  email: string,
  password: string
  address: IAddress,
  name: IName,
  phone: string,
  __v: number
}

interface IName {
  firstName: string,
  lastName: string
}

interface IAddress {
  geolocation: IGeolocation,
  city: string,
  street: string,
  number: number,
  zipcode: string
}

interface IGeolocation {
  lat: string,
  long: string
}

export interface InterfaceGetDetailUser extends ApiResponse<InterfaceGetDetailUser> {}

export interface InterfaceGetAllUser extends ApiResponse<InterfaceGetAllUser[]> {}

export interface InterfaceAddNewUser extends Omit<InterfaceGetAllUser, 'id'> {}

export interface InterfaceUpdateUser extends Partial<Omit<InterfaceGetDetailUser, 'id'>> {}
