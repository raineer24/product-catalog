import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ProductDetail from "../components/ProductDetail";
import LoadingSpinner from "../components/LoadingSpinner";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // In your ProductPage.jsx or API service file
console.log(`Fetching product with ID: ${id}`); // Verify ID is correct
console.log(`API URL: https://fakestoreapi.com/products/${id}`);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="product-page">
      <Link to="/" className="back-button">
        ← Back to Products
      </Link>
      {product && <ProductDetail product={product} />}
    </div>
  );
};

export default ProductPage;
