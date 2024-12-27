import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";
import "./HomePage.css"; // Import for custom CSS styling

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    // fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="container">
      <div className="heading">
        <h1>Current Products 🚀</h1>
      </div>

      <div className="grid">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <div className="no-products">
            <p>No products found 😢</p>
            <Link to="/create" className="create-link">
              Create a product
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
