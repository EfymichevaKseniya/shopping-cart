import { Layout } from '@/shared/layout/layout';
import React, { useEffect, useState } from 'react';
import './shoppingCart.css'
import { useAppSelector } from '@/store/hooks';
import ShoppinCartTable from '@/features/shoppinCartTable/shoppingCartTable';
import Preloader from '@/shared/preloader/preloader';

const ShoppingCart: React.FC = () => {
  const { cartItems } = useAppSelector(state => state.shoppingCart)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 1000)
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
