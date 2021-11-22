import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer } from "./reducers/productsReducer";

export const store = createStore(
  productsReducer,
  composeWithDevTools(
    applyMiddleware()
    // other store enhancers if any
  )
);
