import React from 'react';
import BreadCrumb from './BreadCrumb';

export default function FloorSelection({ tower, onSelectFloor }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="container mx-auto px-4 py-12">
      <BreadCrumb />
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{tower.name}</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Select a floor to view available apartments
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {Array.from({ length: tower.floors }, (_, i) => {
          const floor = tower.floors - i;
          return (
            <div
              key={floor}
              onClick={ () => onSelectFloor(floor) }
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer p-6 text-center group"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">
                {floor}
              </div>
              <div className="text-sm text-gray-600 mb-2">Floor</div>
              <div className="text-xs text-gray-500">4 Units Available</div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
  );
}
