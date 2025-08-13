import React, { useState } from 'react';
import './productList.css';
import ProductCard from '../ProductCard/productCard';
import type { Product }  from '../productType';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const handleDelete = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    const formData = new FormData(e.currentTarget);
    const newProduct: Product = {
      id: newId,
      title: formData.get('title') as string,
      price: parseInt(formData.get('price') as string) || 0,
      category: formData.get('category') as Product['category']
    };
    setProducts([...products, newProduct]);
    e.currentTarget.reset();
  };

  return (
  <div className="product-list-container">
      <h1>List of Products</h1>
      <div className="product-list-products">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onDelete={handleDelete} />
        ))}
      </div>

      <h2>Add new product</h2>
      <form onSubmit={handleSubmit} className="product-list-form">
        <input
          type="text"
          name="title"
          placeholder="Product Name"
          required
          className="product-list-input"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          min={0}
          required
          className="product-list-input"
        />
        <select
          name="category"
          required
          className="product-list-select"
        >
          <option value="electronics">Electronics</option>
          <option value="clothes">Clothes</option>
          <option value="books">Books</option>
        </select>
        <button
          type="submit"
          className="product-list-button"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductList;