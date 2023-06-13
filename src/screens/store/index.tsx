import React, { useEffect, useState } from "react";
import styles from "./Shop.module.css";
import Layout from "../../components/Layout";
import { HeaderPage } from "../../components/container";
import Breadcrumbs from "../../components/Shared/Breadcumbs";
import SearchCmp from "../../components/search";
import { AppStore } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/states/products/thunk";
import CardProduct from "../../components/products/card";
import { Product } from "../../types/products";
import SaleDetails from "./details";

const ShopScreen = () => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    products = [],
    success,
    loading,
  } = useSelector((state: AppStore) => state.Products);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const [productId, setProductId] = useState<Product[]>([]);

  const saveProduct = (product: Product) => {
    setProductId([...productId, product]);
  };

  const HandleDetailsModal = () => {
    setOpenDetails(!openDetails);
  };

  console.log(productId);

  useEffect(() => {
    dispatch(getAllProducts() as any);
  }, [dispatch, success]);

  console.log(products);

  return (
    <>
      <Layout>
        <HeaderPage title="Sisventas Shop">
          <Breadcrumbs items={["Sisventas Shop", "Tienda"]} />
        </HeaderPage>
        <div className={styles.hd_screen}>
          <SearchCmp onSearch={handleSearch} />
          <div className={styles.container_cart}>
            <button className={styles.btn_cart} onClick={HandleDetailsModal}>
              <i className="bx bxs-cart-alt"></i>
            </button>
            <button className={styles.amount_id}>{productId.length}</button>
          </div>
        </div>
        <div className={styles.container_banner}>
          <div className={styles.text_banner}>
            <h3>Bienvenido a sisventas</h3>
            <img src="./LogoIcon.svg" alt="logo" />
            <p>Encuentra los mejores productos a los mejores precios</p>
          </div>
        </div>
        <div className={styles.body_shop}>
          <div className={styles.container_cards}>
            {products?.map((product: Product) => (
              <CardProduct data={product} setProductId={saveProduct} />
            ))}
          </div>
        </div>
      </Layout>
      <SaleDetails
        openModal={openDetails}
        setOpenModal={setOpenDetails}
        ProductsData={productId}
        setProductsData={setProductId}
      />
    </>
  );
};

export default ShopScreen;
