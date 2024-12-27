import React, { useState } from "react";
import "./ProductCard.css";

const ProductCard = ({ product, deleteProduct, updateProduct }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    alert(success ? `Success: ${message}` : `Error: ${message}`);
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    setIsModalOpen(false);
    alert(success ? "Product updated successfully" : `Error: ${message}`);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />

      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">${product.price}</p>

        <div className="product-actions">
          <button className="edit-button" onClick={() => setIsModalOpen(true)}>
            Edit
          </button>
          <button
            className="delete-button"
            onClick={() => handleDeleteProduct(product._id)}
          >
            Delete
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Update Product</h2>

            <input
              type="text"
              placeholder="Product Name"
              value={updatedProduct.name}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, name: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Price"
              value={updatedProduct.price}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, price: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Image URL"
              value={updatedProduct.image}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, image: e.target.value })
              }
            />

            <div className="modal-actions">
              <button
                className="update-button"
                onClick={() => handleUpdateProduct(product._id, updatedProduct)}
              >
                Update
              </button>
              <button
                className="cancel-button"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
