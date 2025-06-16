import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function TowerSelection({ towers, onSelect }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Select Your Tower</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Choose from our premium residential towers, each offering unique features and stunning views
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {towers.map((tower) => (
          <div
            key={tower.id}
            onClick={ () => onSelect(tower)}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden group"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={tower.image}
                alt={tower.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold mb-1">{tower.name}</h3>
                <p className="text-sm opacity-90">{tower.floors} Floors Available</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 leading-relaxed">{tower.description}</p>
              <div className="mt-4 flex items-center text-blue-600 font-medium">
                <span>Explore Floors</span>
                <ArrowLeft className="ml-2 rotate-180" size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}
