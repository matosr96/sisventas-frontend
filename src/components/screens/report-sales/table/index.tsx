import React from "react";
import { Sale } from "../../../../types/sales";
import styles from "./TableSales.module.css";
import swal from "sweetalert";

interface Props {
  data: Sale[];
}

const TableSales = ({ data }: Props) => {
  const handleEditSale = (id: string) => {
    // Implementa la lógica para editar una venta aquí
  };

  const handleDeleteSale = (id: string) => {
    swal({
      text: "¿Estás seguro de que deseas eliminar esta venta?",
      icon: "warning",
      buttons: ["Cancelar", "Eliminar"],
      dangerMode: true,
    }).then((confirmDelete) => {
      if (confirmDelete) {
        // Implementa la lógica para eliminar una venta aquí
        swal("Venta eliminada correctamente.", {
          icon: "success",
        });
      }
    });
  };

  return (
    <div className={styles.container_table}>
      <table>
        <thead>
          <tr>
            <th>Total</th>
            <th>Fecha de la compra</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((sale: Sale) => (
            <tr key={sale.idSale}>
              <td>{sale.totalVenta}</td>
              <td>{sale.fechaVenta.toString()}</td>
              <td>
                <div className={styles.actions_btn}>
                  <button
                    className={styles.edit}
                    onClick={() => handleEditSale(sale.idSale)}
                  >
                    <i className="bx bxs-edit"></i>
                  </button>
                  <button
                    className={styles.trash}
                    onClick={() => handleDeleteSale(sale.idSale)}
                  >
                    <i className="bx bxs-trash-alt"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSales;
