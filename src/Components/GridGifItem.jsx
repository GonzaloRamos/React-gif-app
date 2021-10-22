import React from "react";

const GridGifItem = ({ url, title }) => {
  return (
    <div className="grid-item animate__animated animate__fadeIn">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GridGifItem;
