import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const getData = async () => {
    const result = await fetch(
      "https://zoo-animal-api.herokuapp.com/animals/rand"
    );
    const jsonResult = await result.json();
    setData(jsonResult);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <img className="wrapper" src={data.image_link} alt="img" />
      <button
        className="button"
        onClick={() => {
          getData();
        }}
      >
        New animal
      </button>
      <h1>{data.name}</h1>
      <p>
        <b>Latin name: </b>
        {data.latin_name}
      </p>
      <p>
        <b>Animal type: </b>
        {data.animal_type}
      </p>
      <p>
        <b>Active time: </b>
        {data.active_time}
      </p>
      <p>
        <b>Min length: </b>
        {data.length_min}
      </p>
      <p>
        <b>Max length: </b>
        {data.length_max}
      </p>
      <p>
        <b>Min weight: </b>
        {data.weight_min}
      </p>
      <p>
        <b>Max weight: </b>
        {data.weight_max}
      </p>
      <p>
        <b>Lifespan: </b>
        {data.lifespan}
      </p>
      <p>
        <b>Habitat: </b>
        {data.habitat}
      </p>
      <p>
        <b>Diet: </b>
        {data.diet}
      </p>
      <p>
        <b>Geographic range: </b>
        {data.geo_range}
      </p>
    </div>
  );
}

export default App;
