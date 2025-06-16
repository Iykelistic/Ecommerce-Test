import React from 'react';
import { Maximize } from 'lucide-react';
import BreadCrumb from './BreadCrumb';

export default function UnitSelection({
  tower, floor, units,
  hoveredUnit, onHoverUnit, onSelectUnit
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <BreadCrumb />
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {tower.name} - Floor {floor}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from {units.length} available units on this floor
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-300 ${
              hoveredUnit ? 'bg-black/10 rounded-2xl p-4' : ''
            }`}
          >
            {units.map((unit) => (
              <div
                key={unit.id}
                onClick={() => onSelectUnit(unit)}
                onMouseEnter={() => onHoverUnit(unit.id)}
                onMouseLeave={() => onHoverUnit(null)}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group ${
                  onHoverUnit === unit.id ? 'transform scale-105 z-10' : ''
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={unit.thumbnail}
                    alt={unit.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-900">{unit.type}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{unit.name}</h3>
                    <p className="text-lg font-bold text-blue-600">
                      ${unit.price.toLocaleString()}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-center mb-4">
                    <div>
                      <div className="text-lg font-bold text-gray-900">{unit.area}</div>
                      <div className="text-xs text-gray-600">sq ft</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">
                        {unit.bedrooms || 'Studio'}
                      </div>
                      <div className="text-xs text-gray-600">
                        {unit.bedrooms ? 'BR' : ''}
                      </div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-gray-900">{unit.bathrooms}</div>
                      <div className="text-xs text-gray-600">Bath</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-medium">View Details</span>
                    <Maximize className="text-blue-600" size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
