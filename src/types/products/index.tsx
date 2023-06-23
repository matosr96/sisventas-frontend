interface Category {
  idCategory: number;
}

export interface Product {
  idProduct: number;
  name: string;
  purchasePrice: number;
  salePrice: number;
  currentStock: number;
  initialStock: number;
  statusProduct: string;
  category: number;
  image: string;
  low: number;
  sales: number;
  user: any;
}

export interface CreateProductDto extends Omit<Product, "idProduct"> {}
export type PartialProduct = Partial<Product>;

export const EmptyProductsState: PartialProduct[] = [
  {
    idProduct: 0,
    name: "",
    purchasePrice: 0,
    salePrice: 0,
    currentStock: 0,
    initialStock: 0,
    statusProduct: "",
    category: 0,
    image: "",
    low: 0,
    sales: 0,
    user: 0
  },
];

export const EmptyProductState: PartialProduct = {
  idProduct: 0,
  name: "",
  purchasePrice: 0,
  salePrice: 0,
  currentStock: 0,
  initialStock: 0,
  statusProduct: "",
  category: 0,
  image: "",
  low: 0,
  sales: 0,
  user: 0
};
