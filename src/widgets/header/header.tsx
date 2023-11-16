'use client';
import React from 'react'
import Button from '@/shared/button/button';
import './header.css'
import { useNavigate } from "react-router-dom";
import { useAppSelector } from '@/store/hooks';
import { RootState } from '@/store/store';
import routes from '@/navigator/routes.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const { cartItems } = useAppSelector((state: RootState) => state.shoppingCart)
  return (
    <div className='header__wrapper'>
      <Button
        title='Каталог'
        onClick={() => navigate(routes.catalog)}
      />
      <div className='cart__button'>
        <Button
          onClick={() => navigate(routes.cart)}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
        </Button>
        <span className='cart__items-count'>{cartItems.length || 0}</span>
      </div>
    </div>
  )
}