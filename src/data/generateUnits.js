export default function generateUnitsForFloor(towerName, floor) {
  const unitTypes = ['Studio', '1BR', '2BR', '3BR'];
  const baseAreas = [450, 650, 950, 1200];
  const basePrices = [850000, 1200000, 1800000, 2500000];

  const unsplashImages = [
    'https://images.unsplash.com/photo-1736386347833-e720f2b8508c',
    'https://images.unsplash.com/photo-1736386348014-bdecfc20129d',
    'https://images.unsplash.com/photo-1572120360610-d971b9d7767c', 
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', 
  ];

  return Array.from({ length: 4 }, (_, i) => {
    const idNumber = 2030000 + i * 100 + floor;

    return {
      id: `${towerName.toLowerCase().replace(' ', '-')}-floor-${floor}-unit-${i + 1}`,
      name: `Unit ${String.fromCharCode(65 + i)}`,
      type: unitTypes[i],
      area: baseAreas[i] + Math.floor(Math.random() * 100),
      bedrooms: i === 0 ? 0 : i,
      bathrooms: i === 0 ? 1 : Math.min(i, 3),
      price: basePrices[i] + Math.floor(Math.random() * 200000),
      thumbnail: `${unsplashImages[i]}?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&id=${idNumber}`,
      image: `${unsplashImages[i]}?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&id=${idNumber}`,
      description: `Beautiful ${unitTypes[i]} apartment with modern finishes and premium amenities. Features include hardwood floors, granite countertops, and floor-to-ceiling windows.`
    };
  });
}
