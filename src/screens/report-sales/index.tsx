import { useEffect, useState } from "react";
import { Button, Layout } from "../../components";
import { HeaderPage } from "../../components/container";
import SearchCmp from "../../components/search";
import Breadcrumbs from "../../components/Shared/Breadcumbs";
import styles from "./ReportSales.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../redux/store";
import { getAllProducts, getAllSales } from "../../redux/states";
import TableSales from "../../components/screens/report-sales/table";
import { Sale } from "../../types/sales";
import { format } from "date-fns";
import { DivisaFormater } from "../../utilities/divisa-formater";
import { Product } from "../../types/products";

const ReportSales = () => {
  const dispatch = useDispatch();
  const [saleId, setSaleId] = useState<any>();
  const { sales = [], success } = useSelector((state: AppStore) => state.Sales);
  const findSale: Sale = sales.find((item: Sale) => {
    return item.idSale === saleId;
  });

  const { products = [], success: sucessProducts } = useSelector(
    (state: AppStore) => state.Products
  );

  const productsInSale = products.filter((product: Product) =>
    findSale?.productIds.includes(product.idProduct)
  );

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  useEffect(() => {
    dispatch(getAllSales() as any);
    dispatch(getAllProducts() as any);
  }, [dispatch, success, sucessProducts]);

  return (
    <>
      <Layout>
        <HeaderPage title="Ventas">
          <Breadcrumbs items={["Ventas", "Reportes"]} />
        </HeaderPage>
        <div className={styles.hd_screen}>
          <SearchCmp onSearch={handleSearch} />
        </div>
        <div className={styles.columns}>
          <div className={styles.columOne}>
            <TableSales data={sales} setSaleId={setSaleId} />
          </div>
          <div className={styles.columTwo}>
            <div className={styles.header_sale}>
              <h3>Detalles de la venta</h3>
            </div>
            <div className={styles.body_sale}>
              <div className={styles.items_sale}>
                <p>Fecha de la venta</p>
                {findSale?.fechaVenta && (
                  <span>
                    {format(
                      new Date(findSale.fechaVenta),
                      "dd/MM/yyyy HH:mm:ss"
                    )}
                  </span>
                )}
              </div>
              <div className={styles.items_sale}>
                <p>Total de la venta</p>
                <span>{DivisaFormater(findSale?.totalVenta)}</span>
              </div>
              <div className={styles.group_products}>
                {productsInSale.map((product: Product) => (
                  <div className={styles.g_photo} key={product.idProduct}>
                    <img src={product.image} alt={product.name} />
                    <div className={styles.dataProduct}>
                      <p>{product.name}</p>
                      <p>{DivisaFormater(product.salePrice)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ReportSales;
