import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import shoppingCartReducer from './reducers/shoppingCartSlice';
import productsReducer from './reducers/productsSlice';

const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    products: productsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
