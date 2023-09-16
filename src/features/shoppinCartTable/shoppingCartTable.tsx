import React from 'react';
import Button from '@/shared/button/button';
import { useAppDispatch } from '@/store/hooks';
import { removeFromCart } from '@/store/reducers/shoppingCartSlice';
import { ShoppingCartTableP } from './shoppingCartTable.options';
import { ProductItem } from '@/store/store.options';
import './shoppingCartTable.css'

const ShoppinCartTable: React.FC<ShoppingCartTableP> = ({ items }) => {
  const dispatch = useAppDispatch()
  const handleRemoveFromCart = (product: ProductItem) => {
    dispatch(removeFromCart(product))
  }

  let rubels = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
  });

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
          {items.map((product) =>
            <tr key={product.id}>
              <td>
                <div className='cart__table-title'>
                  {product.name}
                  <Button
                    title='Убрать'
                    onClick={() => handleRemoveFromCart(product)}
                    className='remove__button'
                  />
                </div>
              </td>
              <td>{rubels.format(product.price)}</td>
            </tr>
          ) }
        </tbody>
      </table>
      <div className='total__price'>
        <h2 className='total__price-title'>Итого</h2>
        <span className='total__price-amount'>{rubels.format(totalPrice)}</span>
      </div>
    </section>
  )
}

export default ShoppinCartTable