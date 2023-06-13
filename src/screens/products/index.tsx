import { useEffect, useState } from "react";
import styles from "./Products.module.css";
import Layout from "../../components/Layout";
import { HeaderPage, Table } from "../../components/container";
import Breadcrumbs from "../../components/Shared/Breadcumbs";
import SearchCmp from "../../components/search";
import { Button } from "../../components/Shared";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../redux/store";
import { getAllProducts } from "../../redux/states/products/thunk";
import { Product } from "../../types/products";
import CreateProducts from "./create";
import { ScreenName } from "../../constants-definitions";

const Products = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();
  const {
    products = [],
    success,
    loading,
  } = useSelector((state: AppStore) => state.Products);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const filteredProducts = products.filter((item: Product) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  useEffect(() => {
    dispatch(getAllProducts() as any);
  }, [dispatch, success]);

  return (
    <>
      <Layout>
        <HeaderPage title="Productos">
          <Breadcrumbs items={["Dashboard", "Productos"]} />
        </HeaderPage>
        <div className={styles.hd_screen}>
          <SearchCmp onSearch={handleSearch} />
          <Button onClick={() => setOpenModal(!openModal)}>
            Crear Producto
          </Button>
        </div>
        <Table
          data={filteredProducts}
          headers={[
            "Nombre",
            "Costo de compra",
            "Precio de venta",
            "Stock Actual",
            "Stock inicial",
            "Vendidos",
            "Dados de baja",
          ]}
          keys={[
            "name",
            "purchasePrice",
            "salePrice",
            "currentStock",
            "initialStock",
            "sales",
            "low",
          ]}
          screenName={ScreenName.PRODUCT}
          setItemSelected={() => ({})}
        />
      </Layout>
      <CreateProducts openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default Products;
