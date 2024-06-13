import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPlants = async () => {
      const response = await fetch("http://localhost:6001/plants");
      const result = await response.json();
      setPlants(result); // Set plants to the full list initially
    };

    fetchPlants();
  }, []);

  async function addPlant(newPlant) {
    const response = await fetch("http://localhost:6001/plants", {
      method: 'POST',
      headers: {
        'Content-Type': "Application/JSON",
      },
      body: JSON.stringify(newPlant),
    });
    const addedPlant = await response.json();
    const updatedPlants = [...plants, addedPlant];
    setPlants(updatedPlants);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    console.log("Search Term:", searchTerm);
  };

  // Filter plants based on the search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search onSearch={handleSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
