import React from 'react';
import { ShoppingCartTableP } from './shoppingCartTable.options';
import './shoppingCartTable.css'
import ProductInCart from '@/entities/productInCart/productInCart';
import { formatPrice } from '@/helpers/formatPrice';

const ShoppinCartTable: React.FC<ShoppingCartTableP> = ({ items }) => {
  const totalPrice = items.reduce((sum, item) => sum += item.price, 0)
  return (
    <section>
      <table className='cart__table-wrapper'>
        <thead>
          <tr className='cart__table-header'>
            <th>Название</th>
            <th>Стоимость</th>
          </tr>
        </thead>
        <tbody>
          {items.map((product) => <ProductInCart key={product.id} product={product} />)}
        </tbody>
      </table>
      <div className='total__price'>
        <h2 className='total__price-title'>Итого</h2>
        <span className='total__price-amount'>{formatPrice.format(totalPrice)}</span>
      </div>
    </section>
  )
}

export default ShoppinCartTable