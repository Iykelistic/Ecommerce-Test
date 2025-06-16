import React from 'react';
import { Square, BedDouble, Bath } from 'lucide-react';
import BreadCrumb from './BreadCrumb';

export default function UnitDetails({ unit }) {
  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 py-12">
          <BreadCrumb />
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-96 lg:h-auto">
                  <img
                    src={unit.image}
                    alt={unit.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {unit.name} - {unit.type}
                    </h1>
                    <p className="text-2xl font-bold text-blue-600">
                      ${unit.price.toLocaleString()}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Square className="text-blue-600" size={24} />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{unit.area}</div>
                      <div className="text-sm text-gray-600">sq ft</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                        <BedDouble className="text-blue-600" size={24} />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        {unit.bedrooms || 'Studio'}
                      </div>
                      <div className="text-sm text-gray-600">
                        {unit.bedrooms ? 'Bedrooms' : ''}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Bath className="text-blue-600" size={24} />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{unit.bathrooms}</div>
                      <div className="text-sm text-gray-600">Bathrooms</div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Description</h3>
                    <p className="text-gray-600 leading-relaxed">{unit.description}</p>
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                      Schedule Viewing
                    </button>
                    <button className="flex-1 border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-xl font-semibold hover:bg-blue-50 transition-colors">
                      Save to Favorites
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
