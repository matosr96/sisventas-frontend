import { useEffect, useState } from "react";
import { Button, Layout } from "../../components";
import { HeaderPage } from "../../components/container";
import SearchCmp from "../../components/search";
import Breadcrumbs from "../../components/Shared/Breadcumbs";
import styles from "./ReportSales.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../redux/store";
import { getAllSales } from "../../redux/states";
import TableSales from "../../components/screens/report-sales/table";

const ReportSales = () => {
  const dispatch = useDispatch();
  const {
    sales = [],
    success,
    loading,
  } = useSelector((state: AppStore) => state.Sales);
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };
  useEffect(() => {
    dispatch(getAllSales() as any);
  }, [dispatch, success]);

  console.log("VENTAS", sales);
  return (
    <>
      <Layout>
        <HeaderPage title="Ventas">
          <Breadcrumbs items={["Ventas", "Reportes"]} />
        </HeaderPage>
        <div className={styles.hd_screen}>
          <SearchCmp onSearch={handleSearch} />
        </div>
        <TableSales data={sales} />
      </Layout>
    </>
  );
};

export default ReportSales;
