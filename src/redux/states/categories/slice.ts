import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  CreateCategoryDto,
  EmptyCategoriesState,
  EmptyCategoryState,
  PartialCategory,
} from "../../../types/categories";
import {
  createCategoryThunk,
  deleteCategoriaThunk,
  updateCategoryThunks,
} from "./thunks";

export const createCategory = createAsyncThunk(
  "categories/create",
  async (data: CreateCategoryDto, thunkAPI) => {
    try {
      return await createCategoryThunk(data);
    } catch (err) {
      console.log(err);
    }
  }
);

export const updateCategory = createAsyncThunk(
  "categories/update",
  async (data: PartialCategory, thunkAPI) => {
    try {
      return await updateCategoryThunks(data);
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "categories/delete",
  async (id: string, thunkAPI) => {
    try {
      return await deleteCategoriaThunk(id);
    } catch (err) {
      console.log(err);
    }
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: EmptyCategoriesState,
    category: EmptyCategoryState,
    loading: false,
    success: false,
    error: "",
  },
  reducers: {
    reset: (state) => {
      (state.loading = false), (state.success = false), (state.error = "");
    },
    loadingCategoryById: (state) => {
      state.loading = true;
    },
    setCategoryById: (state, action) => {
      state.loading = false;
      state.categories = action.payload.categories;
    },
    setOneCategoryById: (state, action) => {
      state.loading = false;
      state.category = action.payload.category;
    },
    deleteCategoriesReducer: (state, action) => {
      state.loading = false;
      state.categories = action.payload.categories;
    },
    updateCategoriesReducer: (state, action) => {
      state.loading = false;
      state.categories = action.payload.categories;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.category = {};
      })
      .addCase(updateCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.category = {};
      })
      .addCase(deleteCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = String(action.payload);
        state.category = {};
      });
  },
});

export const { reset } = categoriesSlice.actions;
export const {
  loadingCategoryById,
  setCategoryById,
  setOneCategoryById,
  deleteCategoriesReducer,
  updateCategoriesReducer,
} = categoriesSlice.actions;
