import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
 
  useEffect(() => {
    const fetchPlants = async () => {
    const response = await fetch("http://localhost:6001/plants");
    const result = await response.json();
    setPlants(result);
    };

  fetchPlants();
}, []);

const addPlant = async (newPlant) => {
  const response = await fetch("http://localhost:6001/plants", {
    method: 'POST',
    headers: {
      'Content-Type': "application/json",
    },
    body: JSON.stringify(newPlant),
  });
    const addedPlant = await response.json();
    setPlants([...plants, addedPlant]);
};

  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search />
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
