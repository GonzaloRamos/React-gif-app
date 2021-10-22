import React from "react";
import useFetchGif from "./hooks/useFetchGif";
import GridGifItem from "./GridGifItem";

const GridGif = ({ category }) => {
  const { data: images, loading } = useFetchGif(category);

  return (
    <>
      <h1>{category}</h1>
      <div className="grid-container">
        {loading && "Cargando..."}
        {images.map((img) => (
          <GridGifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GridGif;
