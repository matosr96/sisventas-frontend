import { sisventasApi } from "../../../api";
import { CreateProductDto, PartialProduct } from "../../../types/products";
import { loadingProductById, setProductById } from "./slice";

export const getAllProducts = () => async (dispatch: any) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token not found in local storage");
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  dispatch(loadingProductById());
  const { data } = await sisventasApi.get(`/api/v1/products/getAll`, config);
  dispatch(setProductById({ products: data }));
  return data;
};

export const createProductThunk = async (info: CreateProductDto) => {
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
    "/api/v1/products/create",
    info,
    config
  );
  return data;
};

export const updateProductThunk = async (info: PartialProduct) => {
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
    `/api/v1/products/update/${info.idProduct}`,
    info,
    config
  );
  return data;
};

export const deleteProductThunk = async (idProduct: string) => {
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
    `/api/v1/products/delete/${idProduct}`,
    config
  );
  return data;
};
