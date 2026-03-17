export default function ProductCard ({product}) {
    return(
            <div className="card h-100">
                <img 
                    src={product.image} 
                    className="card-img-top p-3 img-fluid" 
                    alt={product.title} 
                    />
                <div className="card-body">
                    <h6 className="card-title">{product.title}</h6>
                    <p className="fw-bold">${product.price}</p>
                </div>
            </div>
    )
}