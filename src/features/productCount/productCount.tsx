import Button from "@/shared/button/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { decreaseCount, increaseCount } from "@/store/reducers/shoppingCartSlice";
import { getShoppingCart } from "@/store/store";
import { ProductItem } from "@/store/store.options";
import React from "react";

const ProductCount: React.FC<{ product: ProductItem }> = ({ product }) => {
    const dispatch = useAppDispatch()
    const { cartItems } = useAppSelector(getShoppingCart)

    const handleIncreaseCount = () => dispatch(increaseCount(product.id))
    const handleDecreaseCount = () => dispatch(decreaseCount(product.id))

    const productCount = cartItems.find((item: ProductItem) => item.id === product.id)?.count

    return (
        <div className='cart__product-count'>
            <Button title='-' onClick={handleDecreaseCount} />
            <span className='count'>{productCount}</span>
            <Button title='+' onClick={handleIncreaseCount} />
        </div>
    )
}

export default ProductCount
