import React, { useEffect, useState } from "react";

export const ProductForm = (props) => {
  const { onSubmitForm, product } = props;
  const [name, setName] = useState(product ? product.name : "");
  const [description, setDescription] = useState(
    product ? product.description : ""
  );
  const [price, setPrice] = useState(product ? product.price : "");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitForm({
      id: product ? product.id : undefined,
      name,
      description,
      price,
    });
    setName("");
    setDescription("");
    setPrice("");
  };

  useEffect(() => {
    setName(product ? product.name : "");
    setDescription(product ? product.description : "");
    setPrice(product ? product.price : "");
  }, [product]);

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="form-control mb-3"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        className="form-control mb-3"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        className="form-control mb-3"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <button type="submit">Confirm</button>
    </form>
  );
};
