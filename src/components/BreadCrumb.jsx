import React from 'react';
import { Building2, ArrowLeft } from 'lucide-react';

export default function BreadCrumb({
  selectedTower, selectedFloor, selectedUnit,
  resetToTowers, resetToFloors, resetToUnits
}) {
  return (
    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
    <button
      onClick={resetToTowers}
      className={`flex items-center space-x-1 hover:text-blue-600 transition-colors ${
        !selectedTower ? 'text-blue-600 font-medium' : ''
      }`}
    >
      <Building2 size={16} />
      <span>Towers</span>
    </button>
    
    {selectedTower && (
      <>
        <span>/</span>
        <button
          onClick={resetToFloors}
          className={`hover:text-blue-600 transition-colors ${
            selectedTower && !selectedFloor ? 'text-blue-600 font-medium' : ''
          }`}
        >
          {selectedTower.name}
        </button>
      </>
    )}
    
    {selectedFloor !== null && (
      <>
        <span>/</span>
        <button
          onClick={resetToUnits}
          className={`hover:text-blue-600 transition-colors ${
            selectedFloor !== null && !selectedUnit ? 'text-blue-600 font-medium' : ''
          }`}
        >
          Floor {selectedFloor}
        </button>
      </>
    )}
    
    {selectedUnit && (
      <>
        <span>/</span>
        <span className="text-blue-600 font-medium">{selectedUnit.name}</span>
      </>
    )}
  </div>
  );
}
