export const mockProducts = [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      description: 'High-quality wireless headphones with noise cancellation',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
      basePrice: 299.99,
      inStock: true,
      variants: [
        { id: '1-1', name: 'Black', price: 299.99, stock: 15, sku: 'WH-001-BLK' },
        { id: '1-2', name: 'White', price: 299.99, stock: 8, sku: 'WH-001-WHT' },
        { id: '1-3', name: 'Silver', price: 319.99, stock: 12, sku: 'WH-001-SLV' },
      ]
    },
    {
      id: '2',
      name: 'Smart Fitness Watch',
      description: 'Advanced fitness tracking with heart rate monitoring',
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
      basePrice: 199.99,
      inStock: true,
      variants: [
        { id: '2-1', name: '42mm Black', price: 199.99, stock: 0, sku: 'SW-001-42-BLK' },
        { id: '2-2', name: '42mm Rose Gold', price: 219.99, stock: 5, sku: 'SW-001-42-RG' },
        { id: '2-3', name: '46mm Black', price: 229.99, stock: 10, sku: 'SW-001-46-BLK' },
      ]
    },
    {
      id: '3',
      name: 'Wireless Charging Pad',
      description: 'Fast wireless charging for all compatible devices',
      image: 'https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=500',
      basePrice: 49.99,
      inStock: false,
      variants: [
        { id: '3-1', name: 'Standard', price: 49.99, stock: 0, sku: 'WC-001-STD' },
        { id: '3-2', name: 'Fast Charge', price: 79.99, stock: 0, sku: 'WC-001-FAST' },
      ]
    },
    {
      id: '4',
      name: 'Bluetooth Speaker',
      description: 'Portable speaker with premium sound quality',
      image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500',
      basePrice: 129.99,
      inStock: true,
      variants: [
        { id: '4-1', name: 'Midnight Blue', price: 129.99, stock: 20, sku: 'BS-001-MB' },
        { id: '4-2', name: 'Forest Green', price: 129.99, stock: 15, sku: 'BS-001-FG' },
        { id: '4-3', name: 'Coral Red', price: 139.99, stock: 8, sku: 'BS-001-CR' },
      ]
    }
  ];
  