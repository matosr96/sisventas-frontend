import React, { useEffect, useState } from "react";
import styles from "./FormCategories.module.css";
import Modal from "../../../components/Shared/Modal";
import Field from "../../../components/Field";
import Input from "../../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../../redux/store";
import {
  createCategory,
  reset,
  updateCategory,
} from "../../../redux/states/categories/slice";

interface Props {
  setOpenModal: Function;
  openModal: boolean;
  operation: "create" | "update";
  defaultData?: any;
}

const FormCategories = ({
  setOpenModal,
  openModal,
  defaultData,
  operation,
}: Props) => {
  const dispatch = useDispatch();
  const { success } = useSelector((state: AppStore) => state.categories);

  const [name, setName] = useState("");
  const [imageUpdate, setImageUpdate] = useState("");

  const submitCreateHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (operation === "create") {
      try {
        dispatch(createCategory({ name: name, icon: imageUpdate }) as any);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
        }
      }
    } else {
      dispatch(
        updateCategory({
          idCategory: defaultData.idCategory,
          name,
          icon: imageUpdate,
        }) as any
      );
    }
  };

  useEffect(() => {
    if (success) {
      setOpenModal(false);
      dispatch(reset());
    }
  }, [success, dispatch]);

  return (
    <Modal isOpen={openModal} setIsOpen={setOpenModal} title="Categoria">
      <form onSubmit={submitCreateHandler}>
        <Field label="Nombre de la categoria">
          <Input
            value={name}
            placeholder={defaultData?.name}
            onChange={(e) => setName(e.target.value.toUpperCase())}
          />
        </Field>

        <Field label="Icono">
          <div className={styles.custom_select}>
            <div
              className={
                imageUpdate == "bx bxs-color" ? styles.selected_icon : ""
              }
              onClick={() => setImageUpdate("bx bxs-color")}
            >
              <i className="bx bxs-color"></i>
            </div>

            <div
              className={
                imageUpdate == "bx bx-hard-hat" ? styles.selected_icon : ""
              }
              onClick={() => setImageUpdate("bx bx-hard-hat")}
            >
              <i className="bx bx-hard-hat"></i>
            </div>

            <div
              className={
                imageUpdate == "bx bxs-hand" ? styles.selected_icon : ""
              }
              onClick={() => setImageUpdate("bx bxs-hand")}
            >
              <i className="bx bxs-hand"></i>
            </div>

            <div
              className={
                imageUpdate == "bx bx-shape-square" ? styles.selected_icon : ""
              }
              onClick={() => setImageUpdate("bx bx-shape-square")}
            >
              <i className="bx bx-shape-square"></i>
            </div>

            <div
              className={
                imageUpdate == "bx bxs-check-shield" ? styles.selected_icon : ""
              }
              onClick={() => setImageUpdate("bx bxs-check-shield")}
            >
              <i className="bx bxs-check-shield"></i>
            </div>

            <div
              className={
                imageUpdate == "bx bxs-bolt-circle" ? styles.selected_icon : ""
              }
              onClick={() => setImageUpdate("bx bxs-bolt-circle")}
            >
              <i className="bx bxs-bolt-circle"></i>
            </div>

            <div
              className={
                imageUpdate == "bx bx-archive" ? styles.selected_icon : ""
              }
              onClick={() => setImageUpdate("bx bx-archive")}
            >
              <i className="bx bx-archive"></i>
            </div>

            <div
              className={
                imageUpdate == "bx bx-book" ? styles.selected_icon : ""
              }
              onClick={() => setImageUpdate("bx bx-book")}
            >
              <i className="bx bx-book"></i>
            </div>

            <div
              className={
                imageUpdate == "bx bx-laptop" ? styles.selected_icon : ""
              }
              onClick={() => setImageUpdate("bx bx-laptop")}
            >
              <i className="bx bx-laptop"></i>
            </div>

            <div
              className={
                imageUpdate == "bx bx-group" ? styles.selected_icon : ""
              }
              onClick={() => setImageUpdate("bx bx-group")}
            >
              <i className="bx bx-group"></i>
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

export default FormCategories;
