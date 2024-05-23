export type ProductType = {
  name: string;
  price: string;
};

export type TokeyType = {
  token: string;
  product: ProductType[];
};
