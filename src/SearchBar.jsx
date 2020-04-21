import React from "react";

const Searchbar = ({ searchTerm, handleChange }) => {
  
// callback value and onchange
  return (
      <div>
      <input
        type="text"
        placeholder="enter episode name"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default Searchbar;
