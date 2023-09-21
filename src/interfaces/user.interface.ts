export interface User {
  name: string,
  id?: number,
  balance?: number, 
  email?: string,
  stocks: Stock[]
}

export interface Stock {
  id: number,
  name: string,
  price: number,
  quantity?: number
}