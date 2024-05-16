export const STORAGE_KEY = "MY-KEY";

export type ProductType = {
  id: string;
  name: string;
  price: string;
};

export type TokenProductType = {
  token: string;
  product: ProductType[];
};
