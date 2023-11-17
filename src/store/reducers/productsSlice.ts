import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LoadingStatus, ProductsState } from '../store.options';

const initialState: ProductsState = {
  data: {items: []},
  favorites: localStorage.getItem("favorites")
  ? JSON.parse(localStorage.getItem("favorites") || '')
  : {},
  status: LoadingStatus.IDLE,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await fetch(
        "https://appevent.ru/dev/task1/catalog"
      );
      const result = response.json()
      return result;
    } catch (error) {
      console.log(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addFavorite(state, action) {
      const updatedFavorites = {
        ...state.favorites,
        [action.payload]: !state.favorites[action.payload],
      };

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    
      return {
        ...state,
        favorites: updatedFavorites,
      };
    }
  },
  extraReducers: (builder) => {
    builder.addCase(productsFetch.pending, (state, action) => {
      state.status = LoadingStatus.PENDING;
    })
    builder.addCase(productsFetch.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = LoadingStatus.SUCCEEDED;
    })
    builder.addCase(productsFetch.rejected, (state, action) => {
      state.status = LoadingStatus.FAILED;
    })
  },
});

export const { addFavorite } = productsSlice.actions;

export default productsSlice.reducer;