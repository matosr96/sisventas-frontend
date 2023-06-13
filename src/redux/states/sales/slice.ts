import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  CreateSaleDto,
  EmptySaleState,
  EmptySalesState,
  PartialSale,
} from "../../../types/sales";
import { createSaleThunk, deleteSaleThunk, updateSalesThunk } from "./thunk";

export const createSale = createAsyncThunk(
  "sales/create",
  async (data: CreateSaleDto, thunkAPI) => {
    try {
      return await createSaleThunk(data);
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateSale = createAsyncThunk(
  "sales/update",
  async (data: PartialSale, thunkAPI) => {
    try {
      return await updateSalesThunk(data);
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteSale = createAsyncThunk(
  "sales/delete",
  async (id: string, thunkAPI) => {
    try {
      return await deleteSaleThunk(id);
    } catch (err) {
      console.log(err);
    }
  }
);

export const salesSlice = createSlice({
  name: "sales",
  initialState: {
    sales: EmptySalesState,
    sale: EmptySaleState,
    loading: false,
    success: false,
    error: "",
  },
  reducers: {
    reset: (state) => {
      (state.loading = false), (state.success = false), (state.error = "");
    },
    loadingSaleById: (state) => {
      state.loading = true;
    },
    setSaleById: (state, action) => {
      state.loading = false;
      state.sales = action.payload.sales;
    },
    setOneSaleById: (state, action) => {
      state.loading = false;
      state.sales = action.payload.sales;
    },
    deleteSaleReducer: (state, action) => {
      state.loading = false;
      state.sales = action.payload.sales;
    },
    updateSaleReducer: (state, action) => {
      state.loading = false;
      state.sales = action.payload.sales;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSale.pending, (state) => {
        state.loading = true;
      })
      .addCase(createSale.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createSale.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.sale = {};
      })
      .addCase(updateSale.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateSale.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateSale.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.sale = {};
      })
      .addCase(deleteSale.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteSale.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(deleteSale.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.sale = {};
      });
  },
});

export const { reset: resetSale } = salesSlice.actions;
export const {
  loadingSaleById,
  setSaleById,
  setOneSaleById,
  deleteSaleReducer,
  updateSaleReducer,
} = salesSlice.actions;
