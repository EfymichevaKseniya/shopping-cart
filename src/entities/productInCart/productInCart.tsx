import React from 'react'
import { formatPrice } from '@/helpers/formatPrice'
import Button from '@/shared/button/button'
import { useAppDispatch } from '@/store/hooks'
import { removeFromCart } from '@/store/reducers/shoppingCartSlice'
import { ProductInCartP } from './productInCart.options'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import ProductCount from '@/features/productCount/productCount'

const ProductInCart: React.FC<ProductInCartP> = ({ product }) => {
  const dispatch = useAppDispatch()

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product))
  }

  return (
    <tr key={product.id}>
    <td>
      <div className='cart__table-title'>
        <span>{product.name}</span>
        <Button
          onClick={handleRemoveFromCart}
          className='remove__button'
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </div>
    </td>
    <td>
      <ProductCount product={product} />
    </td>
    <td>{formatPrice.format(product.price * product.count)}</td>
  </tr>
  )
}

export default ProductInCart
