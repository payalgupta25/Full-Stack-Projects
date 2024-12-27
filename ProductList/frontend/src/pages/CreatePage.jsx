import React, { useState } from "react";
import "./CreatePage.css";
// import { createProduct } from "../../../backend/controllers/product.controller";

const CreatePage = ({ createProduct }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    alert(success ? `Success: ${message}` : `Error: ${message}`);
    if (success) {
      setNewProduct({ name: "", price: "", image: "" });
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Create New Product</h1>

      <div className="form-container">
        <input
          className="input"
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />

        <input
          className="input"
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />

        <input
          className="input"
          type="text"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
        />

        <button className="button" onClick={handleAddProduct}>
          Add Product
        </button>
      </div>
    </div>
  );
};

export default CreatePage;


