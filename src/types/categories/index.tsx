export interface Category {
  idCategory: any;
  name: string;
  icon: string;
}

export interface CreateCategoryDto extends Omit<Category, "idCategory"> {}
export type PartialCategory = Partial<Category>;

export const EmptyCategoriesState: PartialCategory[] = [
  {
    idCategory: "",
    name: "",
    icon: "",
  },
];

export const EmptyCategoryState: PartialCategory = {
  idCategory: "",
  name: "",
  icon: "",
};
