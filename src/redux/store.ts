import { configureStore } from "@reduxjs/toolkit";
import { categoriesSlice } from "./states/categories/slice";
import { productsSlice } from "./states/products/slice";
import { salesSlice } from "./states";

export interface AppStore {
  categories: any;
  Products: any;
  Sales: any;
}

export default configureStore<AppStore>({
  reducer: {
    categories: categoriesSlice.reducer,
    Products: productsSlice.reducer,
    Sales: salesSlice.reducer,
  },
});
