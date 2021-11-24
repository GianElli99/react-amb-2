import {
  ELIMINAR_PRODUCTO,
  AGREGAR_PRODUCTO,
  EDITAR_PRODUCTO,
  SELECCIONAR_PRODUCTO,
  SET_LOADING_FALSE,
  SET_LOADING_TRUE,
} from "../../constants/prodcutsTypes";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

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
export const setLoadingTrueCreator = () => {
  return {
    type: SET_LOADING_TRUE,
  };
};
export const setLoadingFalseCreator = () => {
  return {
    type: SET_LOADING_FALSE,
  };
};

export const eliminarAsyncCreator = (productId) => {
  return async (dispatch) => {
    try {
      const respuesta = await axios.delete(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      if (respuesta.status === 200) {
        const action = eliminarProductoCreador(productId);
        dispatch(action);
      }
    } catch (error) {}
  };
};
export const crearAsyncCreator = (product) => {
  return async (dispatch) => {
    try {
      const respuesta = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        product
      );
      if (respuesta.status === 201) {
        const action = agregarProductoCreador(respuesta.data);
        dispatch(action);
      }
    } catch (error) {}
  };
};
export const obtenerProductosAsyncCreator = () => {
  return async (dispatch) => {
    try {
      const respuesta = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (respuesta.status === 200) {
        const action = cargarProductos(respuesta.data);
        dispatch(action);
      }
    } catch (error) {}
  };
};
