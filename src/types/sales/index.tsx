export interface Sale {
  idSale: string;
  fechaVenta: Date;
  totalVenta: number;
  productIds: number[];
  userId: number;
}

export interface CreateSaleDto extends Omit<Sale, "idSale"> {}
export type PartialSale = Partial<Sale>;

export const EmptySalesState: PartialSale[] = [
  {
    idSale: "",
    fechaVenta: new Date(),
    totalVenta: 0,
    productIds: [],
    userId: 0,
  },
];

export const EmptySaleState: PartialSale = {
  idSale: "",
  fechaVenta: new Date(),
  totalVenta: 0,
  productIds: [],
  userId: 0,
};