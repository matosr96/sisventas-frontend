import swal from "sweetalert";
import { deleteCategory, deleteProduct, deleteSale } from "../../redux/states";

const confirmationMessages = {
  category: "¿Estás seguro de que deseas eliminar esta Categoría?",
  product: "¿Estás seguro de que deseas eliminar este Producto?",
  sale: "¿Estás seguro de que deseas eliminar esta Venta?",
};

const successMessages = {
  category: "Categoría eliminada correctamente.",
  product: "Producto eliminado correctamente.",
  sale: "Venta eliminada correctamente.",
};

type ItemConfig = {
  [key: string]: {
    confirmationMessage: string;
    successMessage: string;
    deleteAction: (uuid: string) => void;
  };
};

const itemConfig: ItemConfig = {
  category: {
    confirmationMessage: confirmationMessages.category,
    successMessage: successMessages.category,
    deleteAction: deleteCategory,
  },
  product: {
    confirmationMessage: confirmationMessages.product,
    successMessage: successMessages.product,
    deleteAction: deleteProduct,
  },
  client: {
    confirmationMessage: confirmationMessages.sale,
    successMessage: successMessages.sale,
    deleteAction: deleteSale,
  },
};

export const deleteItem = (dispatch: any, name: string, uuid: string) => {
    console.log("EN EL CONFIRMAR", uuid)
  const config = itemConfig[name];
  if (config) {
    swal({
      text: config.confirmationMessage,
      icon: "warning",
      buttons: ["Cancelar", "Eliminar"],
      dangerMode: true,
    }).then((willDelete: any) => {
      if (willDelete) {
        dispatch(config.deleteAction(uuid));
        swal(config.successMessage, {
          icon: "success",
        });
      }
    });
  }
};
