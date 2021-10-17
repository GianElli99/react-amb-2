import React from "react";
import { ProductItem } from "./ProductItem";

export const ProductsList = (props) => {
  const { productList, onDelete, onEdit } = props;
  return (
    <div>
      {productList.map((product) => (
        <ProductItem
          key={product.id}
          productToShow={product}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};
