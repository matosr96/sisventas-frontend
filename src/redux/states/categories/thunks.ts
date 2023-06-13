import { sisventasApi } from "../../../api";
import { CreateCategoryDto, PartialCategory } from "../../../types/categories";
import { loadingCategoryById, setCategoryById } from "./slice";

export const getAllCategories = () => async (dispatch: any) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token not found in local storage");
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  dispatch(loadingCategoryById());
  const { data } = await sisventasApi.get(`/api/v1/categories/listar`, config);
  dispatch(setCategoryById({ categories: data }));
  return data;
};

export const createCategoryThunk = async (info: CreateCategoryDto) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token not found in local storage");
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await sisventasApi.post(
    "/api/v1/categories/crear",
    info,
    config
  );
  return data;
};

export const updateCategoryThunks = async (info: PartialCategory) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token not found in local storage");
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await sisventasApi.put(
    `/api/v1/categories/actualizar/${info.idCategory}`,
    info,
    config
  );
  return data;
};

export const deleteCategoriaThunk = async (idCategoria: string) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token not found in local storage");
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await sisventasApi.delete(
    `/api/v1/categories/eliminar/${idCategoria}`,
    config
  );
  return data;
};
