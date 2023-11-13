import React from 'react'
import { formatPrice } from '@/helpers/formatPrice'
import Button from '@/shared/button/button'
import { useAppDispatch } from '@/store/hooks'
import { decreaseCount, increaseCount, removeFromCart } from '@/store/reducers/shoppingCartSlice'
import { ProductInCartP } from './productInCart.options'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ProductInCart: React.FC<ProductInCartP> = ({ product }) => {
  const dispatch = useAppDispatch()

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product))
  }

  const handleIncreaseCount = () => dispatch(increaseCount(product.id))
  const handleDecreaseCount = () => dispatch(decreaseCount(product.id))

  return (
    <tr key={product.id}>
    <td>
      <div className='cart__table-title'>
        {product.name}
        <Button
          onClick={handleRemoveFromCart}
          className='remove__button'
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    </td>
    <td>
      <div className='cart__product-count'>
        <Button title='-' onClick={handleDecreaseCount} />
        <span className='count'>{product.count}</span>
        <Button title='+' onClick={handleIncreaseCount} />
      </div>
    </td>
    <td>{formatPrice.format(product.price * product.count)}</td>
  </tr>
  )
}

export default ProductInCart
