import { sisventasApi } from "../../../api";
import { CreateSaleDto, PartialSale } from "../../../types/sales";
import { getConfig } from "../../../utilities/getConfig";
import { loadingSaleById, setSaleById } from "./slice";

export const getAllSales = () => async (dispatch: any) => {
  const config = getConfig();
  dispatch(loadingSaleById());
  const { data } = await sisventasApi.get(`/api/v1/sales/getAll`, config);
  dispatch(setSaleById({ sales: data }));
  return data;
};

export const createSaleThunk = async (info: CreateSaleDto) => {
  const config = getConfig();
  const { data } = await sisventasApi.post(
    "/api/v1/sales/create",
    info,
    config
  );
  return data;
};

export const updateSalesThunk = async (info: PartialSale) => {
  const config = getConfig();
  const { data } = await sisventasApi.put(
    `/api/v1/sales/update/${info.idSale}`,
    info,
    config
  );
  return data;
};

export const deleteSaleThunk = async (idSale: string) => {
  const config = getConfig();
  const { data } = await sisventasApi.delete(
    `/api/v1/products/delete/${idSale}`,
    config
  );
  return data;
};
