import React from 'react';
import './catalogCard.css'
import Button from '@/shared/button/button';
import { addToCart } from '@/store/reducers/shoppingCartSlice';
import { ProductItem } from '@/store/store.options';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Link } from 'react-router-dom';
import routes from '@/navigator/routes.json'

const CatalogCard: React.FC<ProductItem> = (product) => {
  const { cartItems } = useAppSelector(state => state.shoppingCart)
  const dispatch = useAppDispatch();
  const { id, image, name, price } = product;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const foundedInCartById = cartItems.find(item => item.id === id)

  return (
    <div className='card__wrapper' key={id}>
      <figure className='card__image'>
        <img src={image} alt={name} />
      </figure>
      <p className='card__price'>{price}</p>
      <div className='card__info'>
        <p className='card__title'>{name}</p>
        {foundedInCartById ? (
          <Link
            className='card__button-order'
            to={routes.cart}
          >Оформить заказ</Link>
        ) : (
          <Button
            title='Добавить в корзину'
            className='card__button'
            onClick={handleAddToCart}
          />
        )}
      </div>
    </div>
  )
}

export default CatalogCard
