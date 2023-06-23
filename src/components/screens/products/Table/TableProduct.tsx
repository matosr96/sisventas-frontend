import { useDispatch } from "react-redux";
import { Product } from "../../../../types/products";
import styles from "./TableProduct.module.css";
import { deleteProduct } from "../../../../redux/states/products/slice";
import swal from "sweetalert";
import { useState } from "react";
import UpdateProduct from "../../../../screens/products/forms/update";

interface Props {
  data: Product[];
  setOpenModal: Function;
  openModal: boolean;
}

const TableProduct = ({ data, setOpenModal, openModal }: Props) => {
  const dispatch = useDispatch();
  const [idProduct, setIdProduct] = useState<string>("");

  const productSelected = (idProduct: string) => {
    setIdProduct(idProduct);
    setOpenModal(!openModal);
  };

  const handlerDelete = (id: string) => {
    swal({
      text: "¿Estás seguro de que deseas eliminar este producto?",
      icon: "warning",
      buttons: ["Cancelar", "Eliminar"],
      dangerMode: true,
    }).then((willDelete: any) => {
      if (willDelete) {
        dispatch(deleteProduct(id) as any);
        swal("Producto eliminado correctamente.", {
          icon: "success",
        });
      }
    });
  };
  return (
    <>
      <div className={styles.container_table}>
        {data?.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Precio de compra</th>
                <th>Precio de venta</th>
                <th>Stock Actual</th>
                <th>Stock inicial</th>
                <th>Vendidos</th>
                <th>Dados de baja</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((product: Product) => (
                <tr key={product.idProduct}>
                  <td>{product.name.toUpperCase()}</td>
                  <td>{product.purchasePrice}</td>
                  <td>{product.salePrice}</td>
                  <td>{product.currentStock}</td>
                  <td>{product.initialStock}</td>
                  <td>{product.sales}</td>
                  <td>{product.low}</td>
                  <td>
                    <div className={styles.actions_btn}>
                      <button
                        className={styles.edit}
                        onClick={() => productSelected(product.idProduct)}
                      >
                        <i className="bx bxs-edit"></i>
                      </button>
                      <button
                        className={styles.trash}
                        onClick={() => handlerDelete(product.idProduct)}
                      >
                        <i className="bx bxs-trash-alt"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h2>Hacer xomponente de vacio</h2>
        )}
      </div>
      <UpdateProduct
        openModal={openModal}
        setOpenModal={setOpenModal}
        uuidProduct={idProduct}
      />
    </>
  );
};

export default TableProduct;
