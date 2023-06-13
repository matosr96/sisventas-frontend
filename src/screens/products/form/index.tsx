import React, { useEffect, useState } from "react";
import styles from "./FormProducts.module.css";
import { Modal } from "../../../components/Shared";
import Field from "../../../components/Field";
import Input from "../../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  resetProduct,
  updateProduct,
} from "../../../redux/states/products/slice";
import InputCloudinary from "../../../components/InputCloudinary/InputCloudinary";
import { AppStore } from "../../../redux/store";
import { getAllCategories } from "../../../redux/states/categories/thunks";
import { Category } from "../../../types/categories";
import { convertToNumber, currencyMask } from "../../../utilities/currencyMask";
import { CreateProductDto, Product } from "../../../types/products/index";

interface Props {
  setOpenModal: Function;
  openModal: boolean;
  operation: "create" | "update";
  defaultData?: CreateProductDto | Product;
}

const FormProducts = ({
  setOpenModal,
  openModal,
  defaultData,
  operation,
}: Props) => {
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");

  const [product, setProduct] = useState<CreateProductDto>({
    name: "",
    purchasePrice: 0,
    salePrice: 0,
    currentStock: 0,
    initialStock: 0,
    statusProduct: "",
    category: { idCategory: 0 },
    image: "",
    low: 0,
    sales: 0,
  });

  const [purchasePrice, setPurchasePrice] = useState(
    product.purchasePrice || ""
  );

  const [salePrice, setSalePrice] = useState("");

  const handlePurchasePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPurchasePrice(e.target.value);
  };

  const handleSalePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSalePrice(e.target.value);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const submitCreateHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let SavedNumber = convertToNumber(purchasePrice);
    let SavedNumber2 = convertToNumber(salePrice);
    if (operation === "create") {
      try {
        dispatch(
          createProduct({
            ...product,
            category: { idCategory: Number(product.category) },
            purchasePrice: SavedNumber,
            salePrice: SavedNumber2,
            currentStock: product.initialStock,
            image: url,
          }) as any
        );
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
        }
      }
    } else {
      dispatch(updateProduct(product) as any);
    }
  };

  const { categories = [], success } = useSelector(
    (state: AppStore) => state.categories
  );

  const { success: succesProduct } = useSelector(
    (state: AppStore) => state.Products
  );

  useEffect(() => {
    dispatch(getAllCategories() as any);

    if (succesProduct) {
      setOpenModal(false);
      dispatch(resetProduct());
    }

    const storedProduct = localStorage.getItem("ProductoAEditar")
      ? JSON.parse(localStorage.getItem("ProductoAEditar") || "")
      : "";

    if (operation === "update") {
      setProduct(storedProduct);
    } else {
      setProduct({
        name: "",
        purchasePrice: 0,
        salePrice: 0,
        currentStock: 0,
        initialStock: 0,
        statusProduct: "",
        category: { idCategory: 0 },
        image: "",
        low: 0,
        sales: 0,
      });
    }
  }, [dispatch, succesProduct]);

  console.log(categories);

  return (
    <Modal isOpen={openModal} setIsOpen={setOpenModal} title="Productos">
      <form onSubmit={submitCreateHandler}>
        <div className={styles.container_form}>
          <div className={styles.data_text}>
            <Field label="Nombre del producto">
              <Input
                name="name"
                value={product.name}
                placeholder={product.name}
                onChange={handleChange}
              />
            </Field>

            <Field label="Precio de compra">
              <Input
                type="text"
                name="purchasePrice"
                value={"$" + purchasePrice}
                onChange={(e) => handlePurchasePrice(currencyMask(e))}
              />
            </Field>

            <Field label="Precio de venta">
              <Input
                name="salePrice"
                value={"$" + salePrice}
                onChange={(e) => handleSalePrice(currencyMask(e))}
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

export default FormProducts;
