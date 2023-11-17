import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { CartType, ProductItem } from '../store.options';

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems") || '')
    : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
} as CartType;

const shoppingCartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push({...action.payload, count: 1 });
      toast.success("Product added to cart", {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    increaseCount(state, action) {
      const itemIndex = state.cartItems.findIndex((item: ProductItem) => item.id === action.payload);
      if (itemIndex === -1) return

      if (state.cartItems[itemIndex].count >= 1) {
        state.cartItems[itemIndex].count += 1;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseCount(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );

      if (state.cartItems[itemIndex].count > 1) {
        state.cartItems[itemIndex].count -= 1;

      } else if (state.cartItems[itemIndex].count === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );

        toast.error("Товар удален из корзины", {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter((cartItem: ProductItem) => cartItem.id !== action.payload.id)
      toast.error('Товар удален из корзины', {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      return state;
    },
    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, count } = cartItem;
          const itemTotal = price * count;

          cartTotal.total += itemTotal;
          cartTotal.quantity += count;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart(state) {
       state.cartItems = [];
       toast.error("Все товары удалены из корзины", {
        position: "bottom-left",
       });
       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
       return state
    },
  },
});

export const { addToCart, removeFromCart, clearCart, increaseCount, decreaseCount, getTotals } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;