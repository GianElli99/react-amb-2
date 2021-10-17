import React, { useState } from "react";
import { products as initalProducts } from "../mocks/products.json";
import { Header } from "./Header";
import { ProductsList } from "./ProductsList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [showForm, setShowForm] = useState({ show: false, mode: "Add" });
  const [products, setproducts] = useState(initalProducts);
  const [productToEdit, setProductToEdit] = useState(undefined);

  const handleEditClick = (product) => {
    setProductToEdit(product);
    setShowForm({ show: true, mode: "Edit" });
  };

  const handleAddProduct = (product) => {
    product.id = uuidv4();
    setproducts([...products, product]);
  };

  const handleDeleteProduct = (id) => {
    const newProducts = products.filter((product) => product.id !== id);
    setproducts(newProducts);
  };

  const handleEditProduct = (product) => {
    const newProducts = products.map((x) =>
      x.id === product.id ? product : x
    );
    setproducts(newProducts);
  };

  return (
    <div className="m-3">
      <Header
        showProductForm={showForm}
        setShowProductForm={setShowForm}
        onAddProduct={handleAddProduct}
        onEditProduct={handleEditProduct}
        productToEdit={productToEdit}
      />
      <ProductsList
        productList={products}
        onDelete={handleDeleteProduct}
        onEdit={handleEditClick}
      />
    </div>
  );
}

export default App;
