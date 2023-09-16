export type CartType = {
  cartItems: ProductItem[]
}

export type ProductItem = {
  id: number
  image: string
  name: string
  price: number
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