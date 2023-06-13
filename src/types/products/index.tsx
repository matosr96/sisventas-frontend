export interface Category {
  idCategory: number;
}

export interface Product {
  idProduct: string;
  name: string;
  purchasePrice: number;
  salePrice: number;
  currentStock: number;
  initialStock: number;
  statusProduct: string;
  category: Category;
  image: string;
  low: number;
  sales: number;
}

export interface CreateProductDto extends Omit<Product, "idProduct"> {}
export type PartialProduct = Partial<Product>;

export const EmptyProductsState: PartialProduct[] = [
  {
    idProduct: "",
    name: "",
    purchasePrice: 0,
    salePrice: 0,
    currentStock: 0,
    initialStock: 0,
    statusProduct: "",
    category: { idCategory: 0 },
    image: "",
    low: 0,
    sales: 0,
  },
];

export const EmptyProductState: PartialProduct = {
  idProduct: "",
  name: "",
  purchasePrice: 0,
  salePrice: 0,
  currentStock: 0,
  initialStock: 0,
  statusProduct: "",
  category: { idCategory: 0 },
  image: "",
  low: 0,
  sales: 0,
};
