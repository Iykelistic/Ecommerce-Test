import React, { useState } from 'react';
import { ShoppingCart, Package } from 'lucide-react';

export const ProductCard = ({ product, onAddToCart }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);


  const isOutOfStock = !product.inStock || selectedVariant.stock === 0;
  const hasVariants = product.variants.length > 1;

  const handleAddToCart = () => {
    if (!isOutOfStock && onAddToCart) {
      onAddToCart(product, selectedVariant);
    }
  };

  const handleVariantChange = (e) => {
    const variantId = e.target.value;
    const variant = product.variants.find(v => v.id === variantId);
    if (variant) {
      setSelectedVariant(variant);
    }
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group"
  
    >
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 sm:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isOutOfStock && (
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="bg-white px-4 py-2 rounded-lg flex items-center gap-2">
              <Package className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-800">Out of Stock</span>
            </div>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
          {product.name}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {hasVariants && (
          <div className="mb-4">
            <label htmlFor={`variant-${product.id}`} className="block text-sm font-medium text-gray-700 mb-2">
              Options
            </label>
            <select
              id={`variant-${product.id}`}
              value={selectedVariant.id}
              onChange={handleVariantChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm"
              disabled={isOutOfStock}
            >
              {product.variants.map((variant) => (
                <option key={variant.id} value={variant.id}>
                  {variant.name} - ${variant.price.toFixed(2)}
                  {variant.stock === 0 ? ' (Out of Stock)' : ''}
                </option>
              ))}
            </select>
          </div>
        )}

        {!isOutOfStock && selectedVariant.stock <= 5 && (
          <div className="mb-4">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
              Only {selectedVariant.stock} left in stock
            </span>
          </div>
        )}

        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gray-900">
              ${selectedVariant.price.toFixed(2)}
            </span>
            {selectedVariant.price !== product.basePrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.basePrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 min-w-fit
              ${isOutOfStock
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
              }`}
          >
            {isOutOfStock ? (
              <>
                <Package className="w-4 h-4" />
                Out of Stock
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
