import React from "react";
import { FaTrash as DeleteIcon, FaPen as EditIcon } from "react-icons/fa";

export const ProductItem = (props) => {
  const { productToShow, onDelete, onEdit } = props;
  return (
    <div className="border border-secondary my-2">
      <p>Name: {productToShow.name}</p>
      <p>Description: {productToShow.description}</p>
      <p>Price: {productToShow.price}</p>
      <EditIcon
        onClick={() => onEdit(productToShow)}
        style={{ cursor: "pointer", color: "red" }}
      />
      <DeleteIcon
        onClick={() => onDelete(productToShow.id)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};
