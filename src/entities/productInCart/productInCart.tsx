import React from 'react'
import { formatPrice } from '@/helpers/formatPrice'
import Button from '@/shared/button/button'
import { useAppDispatch } from '@/store/hooks'
import { removeFromCart } from '@/store/reducers/shoppingCartSlice'
import { ProductInCartP } from './productInCart.options'

const ProductInCart: React.FC<ProductInCartP> = ({ product }) => {
  const dispatch = useAppDispatch()

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product))
  }

  return (
    <tr key={product.id}>
    <td>
      <div className='cart__table-title'>
        {product.name}
        <Button
          title='Убрать'
          onClick={handleRemoveFromCart}
          className='remove__button'
        />
      </div>
    </td>
    <td>{formatPrice.format(product.price)}</td>
  </tr>
  )
}

export default ProductInCart
