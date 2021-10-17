import React from "react";
import { ProductForm } from "./ProductForm";

export const AddProduct = (props) => {
  const { onAddProduct } = props;
  return <ProductForm onSubmitForm={onAddProduct} />;
};
