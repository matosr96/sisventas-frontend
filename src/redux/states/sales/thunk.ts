import { sisventasApi } from "../../../api";
import { CreateSaleDto, PartialSale } from "../../../types/sales";
import { loadingSaleById, setSaleById } from "./slice";

export const getAllSales = () => async (dispatch: any) => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token not found in local storage");
  }

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  dispatch(loadingSaleById());
  const { data } = await sisventasApi.get(`/api/v1/sales/getAll`, config);
  dispatch(setSaleById({ sales: data }));
  return data;
};

export const createSaleThunk = async (info: CreateSaleDto) => {
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
    "/api/v1/sales/create",
    info,
    config
  );
  return data;
};

export const updateSalesThunk = async (info: PartialSale) => {
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
    `/api/v1/sales/update/${info.idSale}`,
    info,
    config
  );
  return data;
};

export const deleteSaleThunk = async (idSale: string) => {
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
    `/api/v1/products/delete/${idSale}`,
    config
  );
  return data;
};
