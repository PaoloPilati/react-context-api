import { useState, useEffect } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";

export default function Prodotti() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
        <div className="container mt-4">
            <h1 className="mb-4">Prodotti</h1>
            <div className="row g-3">
                <ProductList products={products} />
            </div>
        </div>
  )
}