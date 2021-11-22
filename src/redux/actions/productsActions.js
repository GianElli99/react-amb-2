import {
  ELIMINAR_PRODUCTO,
  AGREGAR_PRODUCTO,
  EDITAR_PRODUCTO,
  SELECCIONAR_PRODUCTO,
} from "../../constants/prodcutsTypes";
import { v4 as uuidv4 } from "uuid";

export const eliminarProductoCreador = (productoId) => {
  return {
    type: ELIMINAR_PRODUCTO,
    payload: productoId,
  };
};

export const agregarProductoCreador = (producto) => {
  producto.id = uuidv4();

  return {
    type: AGREGAR_PRODUCTO,
    payload: producto,
  };
};

export const editarProductoCreador = (producto) => {
  return {
    type: EDITAR_PRODUCTO,
    payload: producto,
  };
};

export const seleccionarProductoCreador = (producto) => {
  return {
    type: SELECCIONAR_PRODUCTO,
    payload: producto,
  };
};
