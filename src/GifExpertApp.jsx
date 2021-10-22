import React, { useState } from "react";
import AddCategory from "./Components/AddCategory";
import GridGif from "./Components/GridGif";

const GifExpertApp = () => {
  const [category, setCategory] = useState(["Scooby Doo"]);

  const handleAdd = () => {
    // setCategory((prev) => [...prev, "Street Fighter"]);
  };
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategory={setCategory} />
      <hr />
      <button onClick={handleAdd}>Add</button>
      <ol>
        {category.map((category) => (
          <GridGif category={category} key={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
