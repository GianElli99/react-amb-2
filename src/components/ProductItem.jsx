import React from "react";
import { FaTrash as DeleteIcon, FaPen as EditIcon } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  eliminarProductoCreador,
  seleccionarProductoCreador,
} from "../redux/actions/productsActions";

export const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { productToShow, onEdit } = props;

  const handleDelete = (id) => {
    const action = eliminarProductoCreador(productToShow.id);
    dispatch(action);
  };

  const handleEdit = (product) => {
    const action = seleccionarProductoCreador(productToShow);
    dispatch(action);
  };

  return (
    <div className="border border-secondary my-2">
      <p>Name: {productToShow.name}</p>
      <p>Description: {productToShow.description}</p>
      <p>Price: {productToShow.price}</p>
      <EditIcon
        onClick={handleEdit}
        style={{ cursor: "pointer", color: "red" }}
      />
      <DeleteIcon onClick={handleDelete} style={{ cursor: "pointer" }} />
    </div>
  );
};
