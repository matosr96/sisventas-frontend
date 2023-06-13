import React, { useEffect, useState } from "react";
import styles from "./Update.module.css";
import { Field, Input, InputCloudinary, Modal } from "../../../components";
import { convertToNumber, currencyMask } from "../../../utilities/currencyMask";
import { useDispatch, useSelector } from "react-redux";
import { PartialProduct, Product } from "../../../types/products";
import { getAllCategories, updateProduct } from "../../../redux/states";
import { AppStore } from "../../../redux/store";
import { Category } from "../../../types/categories";


interface Props {
  setOpenModal: Function;
  openModal: boolean;
  uuidProduct: string;
}

const UpdateProduct = ({ setOpenModal, openModal, uuidProduct }: Props) => {
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");

  const { products = [], success: succesProduct } = useSelector(
    (state: AppStore) => state.Products
  );

  const filteredProduct =
    products.find((product: Product) => product.idProduct === uuidProduct) ||
    {};

  const [product, setProduct] = useState<PartialProduct>({
    name: filteredProduct.name || "",
    purchasePrice: filteredProduct.purchasePrice || 0,
    salePrice: filteredProduct.salePrice || 0,
    currentStock: filteredProduct.currentStock || 0,
    initialStock: filteredProduct.initialStock || 0,
    statusProduct: filteredProduct.statusProduct || "",
    category: { idCategory: filteredProduct.category?.idCategory || 0 },
    image: filteredProduct.image || "",
    low: filteredProduct.low || 0,
    sales: filteredProduct.sales || 0,
  });

  const [purchasePrice, setPurchasePrice] = useState(
    product.purchasePrice || ""
  );
  const [salePrice, setSalePrice] = useState(product.salePrice || "");

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

  const { categories = [], success } = useSelector(
    (state: AppStore) => state.categories
  );

  const submitUpdateHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let SavedNumber = convertToNumber(purchasePrice);
    let SavedNumber2 = convertToNumber(salePrice);
    try {
      const updatedProduct = {
        ...filteredProduct,
        category: { idCategory: product.category?.idCategory },
        purchasePrice: SavedNumber,
        salePrice: SavedNumber2,
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
    dispatch(getAllCategories() as any);
  }, [dispatch]);

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
                value={product.name}
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
            value={filteredProduct.initialStock}
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

export default UpdateProduct;
