import { Modal } from "../../../components";
import styles from "./Details.module.css";
import { Product } from "../../../types/products";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CreateSaleDto } from "../../../types/sales";
import { createSale, updateProduct } from "../../../redux/states";
import swal from "sweetalert";
import { DivisaFormater } from "../../../utilities/divisa-formater";

interface Props {
  setOpenModal: Function;
  openModal: boolean;
  ProductsData: Product[];
  setProductsData: Function;
}

const SaleDetails = ({
  setOpenModal,
  openModal,
  ProductsData,
  setProductsData,
}: Props) => {
  const dispatch = useDispatch();
  const productIds = ProductsData.map((product) => Number(product.idProduct));

  const totalSalePrice = ProductsData.reduce(
    (total, product) => total + product.salePrice,
    0
  );

  console.log("TOTAL DE LA VENTA", totalSalePrice);

  const [sale, setSale] = useState<CreateSaleDto>({
    fechaVenta: new Date(),
    totalVenta: totalSalePrice,
    productIds: productIds,
    userId: 0,
  });

  const handleCreateSale = (e: any) => {
    e.preventDefault();
    try {
      swal({
        text: "¿Estás seguro de que deseas realizar la venta?",
        icon: "warning",
        buttons: ["Cancelar", "Confirmar"],
        dangerMode: true,
      }).then((confirmSale) => {
        if (confirmSale) {
          dispatch(
            createSale({
              ...sale,
              totalVenta: totalSalePrice,
              productIds: productIds,
            }) as any
          );

          // Actualizar el stock y las ventas de los productos
          ProductsData.forEach((product) => {
            const updatedProduct: Product = {
              ...product,
              currentStock: product.currentStock - 1,
              sales: product.sales + 1,
            };
            dispatch(updateProduct(updatedProduct) as any);
          });

          // Mostrar mensaje de venta realizada correctamente
          swal("Venta realizada correctamente.", {
            icon: "success",
          });

          setOpenModal(!openModal);
          setProductsData([]);
        }
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  const [deletedProductId, setDeletedProductId] = useState<number | null>(null);
  const handleDelete = (idProduct: number) => {
    setDeletedProductId(idProduct);
  };

  const updatedProductsData = ProductsData.filter(
    (product) => product.idProduct.toString() !== deletedProductId?.toString()
  );

  useEffect(() => {
    setProductsData(updatedProductsData);
  }, [deletedProductId, setProductsData, updatedProductsData]);

  return (
    <Modal isOpen={openModal} setIsOpen={setOpenModal} title="Detalle compra">
      <div className={styles.card_details}>
        <div className={styles.form_details}>
          {ProductsData?.map((product: Product) => (
            <div key={product.idProduct} className={styles.card_product}>
              <div className={styles.items_details}>
                <div className={styles.section_product}>
                  <div className={styles.image_Details}>
                    <img src={product.image} alt="image" />
                  </div>
                  <div className={styles.info_product}>
                    <p>{product.name.toUpperCase()}</p>
                    <span>{product.salePrice}</span>
                  </div>
                </div>
                <button onClick={() => handleDelete(Number(product.idProduct))}>
                  <i className="bx bx-trash"></i>
                </button>
              </div>
            </div>
          ))}
          <div className={styles.banner_info_sale}>
            <p>Total</p>
            <span>{totalSalePrice}</span>
          </div>
          <div className={styles.btn_sale}>
            <button onClick={handleCreateSale}>Confirmar venta</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SaleDetails;
