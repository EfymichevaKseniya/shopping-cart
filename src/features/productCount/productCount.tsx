import Button from "@/shared/button/button";
import { useAppDispatch } from "@/store/hooks";
import { decreaseCount, increaseCount } from "@/store/reducers/shoppingCartSlice";
import { ProductItem } from "@/store/store.options";
import React from "react";

const ProductCount: React.FC<{ product: ProductItem }> = ({ product }) => {
    const dispatch = useAppDispatch()

    const handleIncreaseCount = () => dispatch(increaseCount(product.id))
    const handleDecreaseCount = () => dispatch(decreaseCount(product.id))

    return (
        <div className='cart__product-count'>
            <Button title='-' onClick={handleDecreaseCount} />
            <span className='count'>{product.count || 1}</span>
            <Button title='+' onClick={handleIncreaseCount} />
        </div>
    )
}

export default ProductCount
