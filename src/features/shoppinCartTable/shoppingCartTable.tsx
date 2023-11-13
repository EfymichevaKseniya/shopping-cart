import React from 'react';
import { ShoppingCartTableP } from './shoppingCartTable.options';
import './shoppingCartTable.css'
import ProductInCart from '@/entities/productInCart/productInCart';
import { formatPrice } from '@/helpers/formatPrice';
import Button from '@/shared/button/button';
import { useAppDispatch } from '@/store/hooks';
import { clearCart } from '@/store/reducers/shoppingCartSlice';

const ShoppinCartTable: React.FC<ShoppingCartTableP> = ({ items }) => {
  const totalPrice = items.reduce((sum, item) => sum += item.price * item.count, 0)
  const dispatch = useAppDispatch()
  const handleClearCart = () => dispatch(clearCart())
  return (
    <section>
      <table className='cart__table-wrapper'>
        <thead>
          <tr className='cart__table-header'>
            <th>Название</th>
            <th>Количество</th>
            <th>Стоимость</th>
          </tr>
        </thead>
        <tbody>
          {items.map((product) => <ProductInCart key={product.id} product={product} />)}
        </tbody>
      </table>
      <div className='cart__table-footer'>
        <Button
          title='Очистить корзину'
          onClick={handleClearCart}
        />
        <div className='total__price'>
          <h2 className='total__price-title'>Итого</h2>
          <span className='total__price-amount'>{formatPrice.format(totalPrice)}</span>
        </div>
      </div>
    </section>
  )
}

export default ShoppinCartTable