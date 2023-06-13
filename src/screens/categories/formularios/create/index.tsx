import React, { useEffect, useState } from "react";
import styles from "./CreateCategory.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../../../redux/store";
import { createCategory, resetCategory } from "../../../../redux/states";
import { Field, Input, Modal } from "../../../../components";

interface Props {
  setOpenModal: Function;
  openModal: boolean;
}

const FormCategoriesCreate = ({ setOpenModal, openModal }: Props) => {
  const dispatch = useDispatch();
  const { success } = useSelector((state: AppStore) => state.categories);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const submitCreateHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(createCategory({ name: name, icon: image }) as any);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (success) {
      setOpenModal(false);
      dispatch(resetCategory());
    }
  }, [success, dispatch]);

  return (
    <Modal isOpen={openModal} setIsOpen={setOpenModal} title="Categoria">
      <form onSubmit={submitCreateHandler}>
        <Field label="Nombre de la categoria">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value.toUpperCase())}
          />
        </Field>

        <Field label="Icono">
          <div className={styles.custom_select}>
            <div
              className={image === "bx bxs-color" ? styles.selected_icon : ""}
              onClick={() => setImage("bx bxs-color")}
            >
              <i className="bx bxs-color"></i>
            </div>

            <div
              className={image === "bx bx-hard-hat" ? styles.selected_icon : ""}
              onClick={() => setImage("bx bx-hard-hat")}
            >
              <i className="bx bx-hard-hat"></i>
            </div>
          </div>
        </Field>
        <button className={styles.btn_categories_form} type="submit">
          Guardar
        </button>
      </form>
    </Modal>
  );
};

export default FormCategoriesCreate;
