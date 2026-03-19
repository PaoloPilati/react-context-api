import { useState, useEffect } from "react";
import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import axios from "axios";
import ProductList from "../components/ProductList";

export default function Prodotti() {
  const [products, setProducts] = useState([]);
  const { maxPrice } = useContext(BudgetContext);
  const filteredProducts = maxPrice
  ? products.filter(product => product.price <= maxPrice)
  : products;

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
        <div className="container mt-4">
            <h1 className="mb-4">Prodotti</h1>
            <div className="row g-3">
                <ProductList products={filteredProducts} />
            </div>
        </div>
  )
}