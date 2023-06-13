import { sisventasApi } from "../../../api";
import { CreateCategoryDto, PartialCategory } from "../../../types/categories";
import { getConfig } from "../../../utilities/getConfig";
import { loadingCategoryById, setCategoryById } from "./slice";

export const getAllCategories = () => async (dispatch: any) => {
  const config = getConfig();
  dispatch(loadingCategoryById());
  const { data } = await sisventasApi.get(`/api/v1/categories/listar`, config);
  dispatch(setCategoryById({ categories: data }));
  return data;
};

export const createCategoryThunk = async (info: CreateCategoryDto) => {
  const config = getConfig();
  const { data } = await sisventasApi.post(
    "/api/v1/categories/crear",
    info,
    config
  );
  return data;
};

export const updateCategoryThunks = async (info: PartialCategory) => {
  const config = getConfig();
  const { data } = await sisventasApi.put(
    `/api/v1/categories/actualizar/${info.idCategory}`,
    info,
    config
  );
  return data;
};

export const deleteCategoriaThunk = async (idCategoria: string) => {
  const config = getConfig();
  const { data } = await sisventasApi.delete(
    `/api/v1/categories/eliminar/${idCategoria}`,
    config
  );
  return data;
};
