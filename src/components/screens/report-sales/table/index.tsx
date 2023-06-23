import { Sale } from "../../../../types/sales";
import styles from "./TableSales.module.css";
import swal from "sweetalert";
import { format } from "date-fns";

interface Props {
  data: Sale[];
  setSaleId: Function;
}

const TableSales = ({ data, setSaleId }: Props) => {
  const handleDeleteSale = (id: string) => {
    swal({
      text: "¿Estás seguro de que deseas eliminar esta venta?",
      icon: "warning",
      buttons: ["Cancelar", "Eliminar"],
      dangerMode: true,
    }).then((confirmDelete) => {
      if (confirmDelete) {
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
              <td>
                {format(
                  new Date(sale.fechaVenta.toString()),
                  "dd/MM/yyyy HH:mm:ss"
                )}
              </td>
              <td>
                <div className={styles.actions_btn}>
                  <button
                    className={styles.edit}
                    onClick={() => setSaleId(sale.idSale)}
                  >
                    <i className="bx bxs-show"></i>
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
