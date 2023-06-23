import { FunctionComponent, useState } from "react";
import styles from "./ContextMenu.module.css";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../hooks/delete";
import { ScreenName } from "../../../constants-definitions";
import FormCategoriesUpdate from "../../../screens/categories/formularios/update";
import FormUpdateProduct from "../../../screens/products/forms/update";

interface Props {
  item: any;
  openMenu: boolean;
  selected: string;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  setItemSelected: Function;
  screenName: string;
}

const ContextMenu: FunctionComponent<Props> = ({
  item,
  openMenu,
  setOpenMenu,
  setSelected,
  selected,
  setItemSelected,
  screenName,
}) => {
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handlerMenu = (uuid: string): void => {
    setOpenMenu((openMenu) => !openMenu);
    setSelected(uuid);
  };

  const itemId =
    screenName === "category"
      ? item.idCategory
      : screenName === "product"
      ? item.idProduct
      : "";

  const handleUpdate = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <div className={styles.actions}>
        <button
          className={styles.btn_context}
          onClick={() => handlerMenu(itemId)}
        >
          <i className="bx bx-dots-vertical-rounded"></i>
        </button>
        <div
          className={`${styles.context_menu} ${
            openMenu && selected === itemId ? styles.active : ""
          }`}
        >
          <button
            className={styles.editButton}
            onClick={() => {
              setItemSelected(item);
              handleUpdate();
            }}
          >
            Editar
          </button>
          <button
            className={styles.deleteButton}
            onClick={() => deleteItem(dispatch, screenName, itemId)}
          >
            Eliminar
          </button>
        </div>
      </div>
      {screenName === ScreenName.CATEGORY ? (
        <FormCategoriesUpdate
          setOpenModal={setOpenModal}
          openModal={openModal}
          id={selected}
        />
      ) : screenName === ScreenName.PRODUCT ? (
        <FormUpdateProduct
          setOpenModal={setOpenModal}
          openModal={openModal}
          uuidProduct={selected}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default ContextMenu;
