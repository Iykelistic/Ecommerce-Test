import React, { useState } from 'react';
import { towers } from './data/towers';
import generateUnitsForFloor from './data/generateUnits';
import BreadCrumb from './components/BreadCrumb';
import TowerSelection from './components/TowerSelection';
import FloorSelection from './components/FloorSelection';
import UnitSelection from './components/UnitSelection';
import UnitDetails from './components/UnitDetails';

function App() {
  const [selectedTower, setSelectedTower] = useState(null);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [hoveredUnit, setHoveredUnit] = useState(null);

  const resetToTowers = () => {
    setSelectedTower(null);
    setSelectedFloor(null);
    setSelectedUnit(null);
  };
  const resetToFloors = () => {
    setSelectedFloor(null);
    setSelectedUnit(null);
  };
  const resetToUnits = () => setSelectedUnit(null);

  if (!selectedTower) {
    return <TowerSelection towers={towers} onSelect={setSelectedTower} />;
  }

  if (selectedTower && selectedFloor == null) {
    return (
      <>
        <BreadCrumb
          selectedTower={selectedTower}
          resetToTowers={resetToTowers}
        />
        <FloorSelection
          tower={selectedTower}
          onSelectFloor={f => setSelectedFloor(f)}
        />
      </>
    );
  }

  if (selectedUnit) {
    return (
      <>
        <BreadCrumb
          selectedTower={selectedTower}
          selectedFloor={selectedFloor}
          selectedUnit={selectedUnit}
          resetToTowers={resetToTowers}
          resetToFloors={resetToFloors}
          resetToUnits={resetToUnits}
        />
        <UnitDetails unit={selectedUnit} />
      </>
    );
  }

  const units = generateUnitsForFloor(selectedTower.name, selectedFloor);
  return (
    <>
      <BreadCrumb
        selectedTower={selectedTower}
        selectedFloor={selectedFloor}
        resetToTowers={resetToTowers}
        resetToFloors={resetToFloors}
      />
      <UnitSelection
        tower={selectedTower}
        floor={selectedFloor}
        units={units}
        selectedUnit={selectedUnit}
        onSelectUnit={setSelectedUnit}
        hoveredUnit={hoveredUnit}
        onHoverUnit={setHoveredUnit}
      />
    </>
  );
}

export default App;
