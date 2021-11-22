import {
  ELIMINAR_PRODUCTO,
  AGREGAR_PRODUCTO,
  EDITAR_PRODUCTO,
  SELECCIONAR_PRODUCTO,
} from "../../constants/prodcutsTypes";

const initialState = {
  list: [
    {
      id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
      name: "Notebook ASUS",
      description: "a eliminar",
      price: "78950",
    },
    {
      id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
      name: "Notebook ASUS",
      description: "blablabla",
      price: "78950",
    },
  ],
  isLoading: false,
  productoSeleccionado: null,
  error: "",
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        list: state.list.filter((prod) => prod.id !== action.payload),
      };
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        list: [action.payload, ...state.list],
      };
    case EDITAR_PRODUCTO:
      return {
        ...state,
        list: state.list.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case SELECCIONAR_PRODUCTO:
      return {
        ...state,
        productoSeleccionado: action.payload,
      };
    default:
      return state;
  }
};
