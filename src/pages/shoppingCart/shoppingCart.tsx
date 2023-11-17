import { Layout } from '@/shared/layout/layout';
import React, { useEffect, useState } from 'react';
import './shoppingCart.css'
import { useAppSelector } from '@/store/hooks';
import ShoppinCartTable from '@/features/shoppinCartTable/shoppingCartTable';
import Preloader from '@/shared/preloader/preloader';
import { getShoppingCart } from '@/store/store';

const ShoppingCart: React.FC = () => {
  const { cartItems } = useAppSelector(getShoppingCart)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  if (loading) return <Preloader />
  return (
    <Layout>
      {cartItems.length === 0 ? (
        <div className='shopping__cart-empty'>Корзина пуста</div>
        ) : (
          <ShoppinCartTable items={cartItems} />
        )
      }
    </Layout>
  )
}

export default ShoppingCart
