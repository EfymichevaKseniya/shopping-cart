import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LoadingStatus, ProductsState } from '../store.options';

const initialState: ProductsState = {
  data: {items: []},
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
  reducers: {},
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

export default productsSlice.reducer;