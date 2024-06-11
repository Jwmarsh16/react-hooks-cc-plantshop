import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";


function PlantList() {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
    const response = await fetch("http://localhost:6001/plants");
    const result = await response.json();
    setData(result)
    }

  fetchData();
}, []);

  return (
    <ul className="cards">{data.map(plant => (<PlantCard key={plant.id} plant={plant}/> ))} </ul>
  );
}

export default PlantList;
