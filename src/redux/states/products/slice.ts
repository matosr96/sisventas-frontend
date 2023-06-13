import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  CreateProductDto,
  EmptyProductState,
  EmptyProductsState,
  PartialProduct,
} from "../../../types/products";
import {
  createProductThunk,
  deleteProductThunk,
  updateProductThunk,
} from "./thunk";

export const createProduct = createAsyncThunk(
  "products/create",
  async (data: CreateProductDto, thunkAPI) => {
    try {
      return await createProductThunk(data);
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "products/update",
  async (data: PartialProduct, thunkAPI) => {
    try {
      return await updateProductThunk(data);
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/delete",
  async (id: string, thunkAPI) => {
    try {
      return await deleteProductThunk(id);
    } catch (err) {
      console.log(err);
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: EmptyProductsState,
    product: EmptyProductState,
    loading: false,
    success: false,
    error: "",
  },
  reducers: {
    reset: (state) => {
      (state.loading = false), (state.success = false), (state.error = "");
    },
    loadingProductById: (state) => {
      state.loading = true;
    },
    setProductById: (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
    },
    setOneProductById: (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
    },
    deleteProductReducer: (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
    },
    updateProductReducer: (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.product = {};
      })
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.product = {};
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.product = {};
      });
  },
});

export const { reset: resetProduct } = productsSlice.actions;
export const {
  loadingProductById,
  setProductById,
  setOneProductById,
  deleteProductReducer,
  updateProductReducer,
} = productsSlice.actions;
