import React, { useState } from 'react';
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
  const [addedToCart, setAddedToCart] = useState(false)

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 1000)
  };

  const foundedInCartById = cartItems.find(item => item.id === id)
  const clonedElement = React.cloneElement(
    <figure className={`card__image-wrapper ${addedToCart ? 'fly' : ''}`}>
      <img src={image} alt={name} />
    </figure>
  )

  return (
    <div className='card__wrapper' key={id}>
      {addedToCart && clonedElement}
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
