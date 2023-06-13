import { useState, FunctionComponent } from "react";
import styles from "./ContextMenu.module.css";

interface Props {
  item: any;
  openMenu: boolean;
  selected: string;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  deleteItem: Function;
  setItemSelected: Function;
}

const ContextMenu: FunctionComponent<Props> = ({
  item,
  openMenu,
  setOpenMenu,
  deleteItem,
  setSelected,
  selected,
  setItemSelected,
}) => {
  const handlerMenu = (uuid: string): void => {
    setOpenMenu((openMenu) => !openMenu);
    setSelected(uuid);
  };
  return (
    <div className={styles.actions}>
      <button
        className={styles.btn_context}
        onClick={() => handlerMenu(item.idCategory)}
      >
        <i className="bx bx-dots-vertical-rounded"></i>
      </button>
      <div
        className={`${styles.context_menu} ${
          openMenu && selected === item.idCategory ? styles.active : ""
        }`}
      >
        <button
          className={styles.editButton}
          onClick={() => setItemSelected(item)}
        >
          Editar
        </button>
        <button
          className={styles.deleteButton}
          onClick={() => deleteItem(item.idCategory)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ContextMenu;
