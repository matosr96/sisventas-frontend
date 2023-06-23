import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import HeaderPage from "../../components/container/HeaderPage";
import Breadcrumbs from "../../components/Shared/Breadcumbs";
import { Button } from "../../components/Shared";
import styles from "./Categories.module.css";
import SearchCmp from "../../components/search";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../redux/store";
import { getAllCategories } from "../../redux/states/categories/thunks";
import { Category } from "../../types/categories";
import { Table } from "../../components/container";
import Empty from "../../components/container/Empty";
import FormCategoriesCreate from "./formularios/create";

const Categories = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user") || "")
    : "";

  const dispatch = useDispatch();
  const {
    categories = [],
    success,
    loading,
  } = useSelector((state: AppStore) => state.categories);

 

  const [categorieSelected, setCategorieSelected] = useState<Category>({
    idCategory: "",
    name: "",
    icon: "",
    user: 0
  });

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const filteredCategories = categories.filter((item: Category) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const categoriesForUser = filteredCategories.filter(
    (category: Category) => category.user === user.idUsuario
  );

  useEffect(() => {
    dispatch(getAllCategories() as any);
  }, [dispatch, success]);
  return (
    <>
      <Layout>
        <HeaderPage title="Categorias">
          <Breadcrumbs items={["Dashboard", "Categorias"]} />
        </HeaderPage>
        <div className={styles.hd_screen}>
          <SearchCmp onSearch={handleSearch} />
          <Button onClick={() => setOpenModal(!openModal)}>
            Crear Categoria
          </Button>
        </div>
        <div>
          {categoriesForUser?.length > 0 ? (
            <Table
              data={categoriesForUser}
              headers={["Nombre"]}
              keys={["name"]}
              setItemSelected={() => ({})}
              screenName="category"
            />
          ) : (
            <Empty
              title="Categoria"
              copy="Desde aquí puedes crear y personalizar tus categorias en tiempo real gracias a los múltiples informes disponibles."
              image="/LogoCompleto.svg"
            />
          )}
        </div>
        <FormCategoriesCreate
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
      </Layout>
    </>
  );
};

export default Categories;
