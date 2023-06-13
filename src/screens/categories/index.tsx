import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import HeaderPage from "../../components/container/HeaderPage";
import Breadcrumbs from "../../components/Shared/Breadcumbs";
import { Button } from "../../components/Shared";
import styles from "./Categories.module.css";
import SearchCmp from "../../components/search";
import FormCategories from "./form";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../redux/store";
import { getAllCategories } from "../../redux/states/categories/thunks";
import { Category } from "../../types/categories";
import { deleteCategory } from "../../redux/states/categories/slice";
import { Table } from "../../components/container";

const Categories = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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
  });

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const filteredCategories = categories.filter((item: Category) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  console.log("CATEGORIAS", filteredCategories);

  const updateItem = (data: any) => {
    setOpenModalUpdate(!openModalUpdate);
    setCategorieSelected(data);
  };

  const deleteItem = (id: string) => {
    dispatch(deleteCategory(id) as any);
  };

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
        <Table
          data={filteredCategories}
          headers={["Icono", "Nombre"]}
          keys={["icon", "name"]}
          deleteItem={deleteItem}
          setItemSelected={() => ({})}
        />
      </Layout>
      <FormCategories
        openModal={openModal}
        setOpenModal={setOpenModal}
        operation="create"
      />
      <FormCategories
        openModal={openModalUpdate}
        setOpenModal={setOpenModalUpdate}
        operation="update"
        defaultData={categorieSelected}
      />
    </>
  );
};

export default Categories;
