import { Link } from "react-router";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <>
      {products.map(product => (
          <div className="col-sm-12 col-md-4 col-lg-3 list-unstyled">
            <li key={product.id}>
                <Link to={`/prodotti/${product.id}`} className="text-decoration-none text-dark">
                    <ProductCard key={product.id} product={product} />
                </Link>
            </li>
        </div>
      ))}
    </>
  )
}