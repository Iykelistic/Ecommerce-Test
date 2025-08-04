import React, { useState } from 'react';
import { ProductGrid } from './components/ProductGrid';
import { mockProducts } from './data/mockProducts';
import { ShoppingCart, CheckCircle } from 'lucide-react';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [notification, setNotification] = useState(null);

  const handleAddToCart = (product, variant) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => 
        item.product.id === product.id && item.variant.id === variant.id
      );

      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id && item.variant.id === variant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { product, variant, quantity: 1 }];
      }
    });

    // Show notification
    setNotification(`Added ${product.name} (${variant.name}) to cart!`);
    setTimeout(() => setNotification(null), 3000);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Product Showcase</h1>
              <p className="text-gray-600 text-sm">Discover our latest collection</p>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-lg">
              <ShoppingCart className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-blue-900">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProductGrid products={mockProducts} onAddToCart={handleAddToCart} />
      </main>

      {/* Notification */}
      {notification && (
        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-slide-up">
          <CheckCircle className="w-5 h-5" />
          <span className="font-medium">{notification}</span>
        </div>
      )}

      {/* Footer Note */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-600 text-sm">
            <p className="mb-2 font-medium">Layout Approach & Responsiveness:</p>
            <p>
              Used a card-based design with mobile-first responsive grid that adapts from single column on mobile to 4 columns on desktop. 
              Each card maintains consistent proportions while allowing content to flow naturally. 
              Interactive elements like hover states and micro-animations enhance the user experience across all device sizes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
