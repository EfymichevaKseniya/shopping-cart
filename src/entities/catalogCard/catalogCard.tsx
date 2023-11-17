import React, { useState } from 'react';
import './catalogCard.css'
import Button from '@/shared/button/button';
import { addToCart } from '@/store/reducers/shoppingCartSlice';
import { ProductItem } from '@/store/store.options';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import ProductCount from '@/features/productCount/productCount';
import { getShoppingCart } from '@/store/store';
import AddToFavorite from '@/features/addToFavorite/addToFavorite';

const CatalogCard: React.FC<ProductItem> = (product) => {
  const { cartItems } = useAppSelector(getShoppingCart)
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
      <AddToFavorite id={id} />
      {addedToCart && clonedElement}
      <figure className='card__image'>
        <img src={image} alt={name} />
      </figure>
      <p className='card__price'>{price}</p>
      <div className='card__info'>
        <p className='card__title'>{name}</p>
        {foundedInCartById ? (
          <div className='card__product-count'>
            <ProductCount product={product} />
          </div>
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
