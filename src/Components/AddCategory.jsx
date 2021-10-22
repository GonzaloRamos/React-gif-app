import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategory((prev) => [inputValue, ...prev]);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default AddCategory;
