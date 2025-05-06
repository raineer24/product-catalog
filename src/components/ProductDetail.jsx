const ProductDetail = ({ product}) => {
    return (
        <div className="product-detail">
            <div className="detail-image-container">
                <img 
                    src={product.image}
                    alt={product.title}
                    className="detail-image"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/500/500?text=No+Image';
                    }}
                />
            </div>
            <div className="detail-info">
                <h2>{product.title}</h2>
                <p className="detail-price">${product.price}</p>
                <p className="detail-category">${product.price}</p>
                <p className="detail-description">${product.price}</p>
                <div className="detail-rating">
                    <span>Rating: {product.rating.rate} ({product.rating.count} reviews)</span>
                </div>
            </div>
        </div>
    )
};

export default ProductDetail;