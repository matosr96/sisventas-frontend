import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/login";
import { PrivateRoutes, PublicRoutes } from "./constants-definitions/Routes";
import Register from "./screens/register";
import MenuStore from "./screens/menu-store";
import Categories from "./screens/categories";
import Products from "./screens/products";
import ShopScreen from "./screens/store";
import ReportSales from "./screens/report-sales";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PublicRoutes.LOGIN} element={<Login />} />
        <Route path={PublicRoutes.REGISTER} element={<Register />} />
        <Route path={PrivateRoutes.MENU_STORE} element={<MenuStore />} />
        <Route path={PrivateRoutes.CATEGORIES} element={<Categories />} />
        <Route path={PrivateRoutes.PRODUCTS} element={<Products />} />
        <Route path={PrivateRoutes.SHOP} element={<ShopScreen />} />
        <Route path={PrivateRoutes.REPORT_SALE} element={<ReportSales />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
