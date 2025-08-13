import type { Product } from '../productType';
import './productCard.css';

type ProductCardProps = {
  product: Product;
  onDelete: (id: number) => void;
};


const ProductCard: React.FC<ProductCardProps> = ({ product, onDelete }) => {
  return (
    <div className="product-card">
      <div>
        <h3>{product.title}</h3>
        <p>Price: {product.price}$</p>
        <p>Category: {product.category}</p>
      </div>
      <button
        onClick={() => onDelete(product.id)}
        className="delete-btn"
      >
        Delete
      </button>
    </div>
  );
};

export default ProductCard;