import React from "react";
import { useSelector } from "react-redux";
import { ProductForm } from "./ProductForm";

export const EditProduct = (prop) => {
  const { onEditProduct, productToEdit } = prop;
  const productoSeleccionado = useSelector(
    (state) => state.productoSeleccionado
  );

  return <ProductForm tipo="editar" product={productoSeleccionado} />;
};
