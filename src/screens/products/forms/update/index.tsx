import React, { useEffect, useState } from "react";
import styles from "./Update.module.css";
import { Field, Input, InputCloudinary, Modal } from "../../../../components";
import {
  convertToNumber,
  currencyMask,
} from "../../../../utilities/currencyMask";
import { useDispatch, useSelector } from "react-redux";
import { PartialProduct, Product } from "../../../../types/products";
import {
  getAllCategories,
  resetProduct,
  updateProduct,
} from "../../../../redux/states";
import { AppStore } from "../../../../redux/store";
import { Category } from "../../../../types/categories";

interface Props {
  setOpenModal: Function;
  openModal: boolean;
  uuidProduct: string;
}

const FormUpdateProduct = ({ setOpenModal, openModal, uuidProduct }: Props) => {
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");

  const { products = [], success: succesProduct } = useSelector(
    (state: AppStore) => state.Products
  );

  const filteredProduct =
    products.find((product: Product) => product.idProduct === uuidProduct) ||
    {};

  const [product, setProduct] = useState<any>({
    idProduct: filteredProduct.idProduct,
    name: "",
    purchasePrice: undefined,
    salePrice: undefined,
    currentStock: filteredProduct.currentStock,
    initialStock: undefined,
    statusProduct: filteredProduct.statusProduct,
    category: { idCategory: filteredProduct.category?.idCategory || 0 },
    image: filteredProduct.image || "",
    low: filteredProduct.low || 0,
    sales: filteredProduct.sales || 0,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setProduct((prev: any) => ({ ...prev, [name]: value || undefined }));
  };

  const { success: successProducts } = useSelector(
    (state: AppStore) => state.Products
  );

  const { categories = [], success } = useSelector(
    (state: AppStore) => state.categories
  );

  const submitUpdateHandler = async (e: any) => {
    e.preventDefault();

    try {
      const updatedProduct = {
        ...product,
        idProduct: filteredProduct.idProduct,
        purchasePrice:
          product.purchasePrice == undefined
            ? filteredProduct.purchasePrice
            : product.purchasePrice,

        salePrice:
          product.salePrice == undefined
            ? filteredProduct.salePrice
            : product.salePrice,
        initialStock:
          product.initialStock == undefined
            ? filteredProduct.initialStock
            : product.initialStock,
        category: { idCategory: product.category?.idCategory },
        currentStock: product.initialStock || 0,
        image: url,
      };
      dispatch(updateProduct(updatedProduct) as any);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (successProducts) {
      setOpenModal(false);
      dispatch(resetProduct());
    }
    dispatch(getAllCategories() as any);
  }, [dispatch, successProducts]);

  return (
    <Modal
      isOpen={openModal}
      setIsOpen={setOpenModal}
      title="Actualizar Productos"
    >
      <form onSubmit={submitUpdateHandler}>
        <div className={styles.container_form}>
          <div className={styles.data_text}>
            <Field label="Nombre del producto">
              <Input
                name="name"
                placeholder={filteredProduct.name}
                onChange={handleChange}
              />
            </Field>

            <Field label="Precio de compra">
              <Input
                type="text"
                placeholder={filteredProduct.purchasePrice}
                name="purchasePrice"
                value={product.purchasePrice}
                onChange={handleChange}
              />
            </Field>

            <Field label="Precio de venta">
              <Input
                type="text"
                name="salePrice"
                placeholder={filteredProduct.salePrice}
                value={product.salePrice}
                onChange={handleChange}
              />
            </Field>
          </div>
          <div className={styles.data_image}>
            <div className={styles.profile}>
              {url != "" ? (
                <img src={url} alt="profile-picture" />
              ) : (
                <InputCloudinary idInput="file-products" setImageUrl={setUrl} />
              )}
            </div>
          </div>
        </div>
        <Field label="Stock inicial">
          <Input
            type="number"
            name="initialStock"
            placeholder={filteredProduct.initialStock}
            value={product.initialStock}
            onChange={handleChange}
          />
        </Field>
        <Field label="Categoria">
          <select
            name="category"
            onChange={handleChange}
            className={styles.select_cat}
          >
            {categories?.map((category: Category) => (
              <option value={category.idCategory}>{category.name}</option>
            ))}
          </select>
        </Field>
        <button className={styles.btn_pdr_form} type="submit">
          Guardar
        </button>
      </form>
    </Modal>
  );
};

export default FormUpdateProduct;
