export type CartType = {
  cartItems: ProductItem[]
  cartTotalQuantity: number
  cartTotalAmount: number
}

export type ProductItem = {
  id: number
  image: string
  name: string
  price: number
  count: number
}

export type ProductsState = {
  data: { items: ProductItem[] }
  status: LoadingStatus
}

export enum LoadingStatus {
  IDLE = 'idle',
  PENDING = 'pending',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed'
}