import React, { useEffect, useState } from "react";
import styles from "./UpdateCategory.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../../../redux/store";
import {
  getAllCategories,
  resetCategory,
  updateCategory,
} from "../../../../redux/states";
import { Field, Input, Modal } from "../../../../components";
import { Category } from "../../../../types/categories";

interface Props {
  setOpenModal: Function;
  openModal: boolean;
  id: string;
}

const FormCategoriesUpdate = ({ setOpenModal, openModal, id }: Props) => {
  const dispatch = useDispatch();

  const { categories = [], success } = useSelector(
    (state: AppStore) => state.categories
  );

  const filteredCategory: Category = categories.find((item: Category) => {
    return item.idCategory === id;
  });

  console.log("encontro esto", filteredCategory);

  const [nameUpdate, setNameUpdate] = useState("");
  const [imageUpdate, setImageUpdate] = useState("");

  const submitCreateHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      dispatch(
        updateCategory({
          idCategory: filteredCategory.idCategory,
          name: nameUpdate,
          icon: imageUpdate,
        }) as any
      );
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
    dispatch(getAllCategories() as any);
  }, [success, dispatch]);

  return (
    <Modal
      isOpen={openModal}
      setIsOpen={setOpenModal}
      title="Actualizar Categoria"
    >
      <form onSubmit={submitCreateHandler}>
        <Field label="Nombre de la categoria">
          <Input
            type="text"
            placeholder={filteredCategory?.name}
            value={nameUpdate}
            onChange={(e) => setNameUpdate(e.target.value)}
          />
        </Field>

        <button className={styles.btn_categories_form} type="submit">
          Guardar
        </button>
      </form>
    </Modal>
  );
};

export default FormCategoriesUpdate;
