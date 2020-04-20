import React from "react";

const Searchbar = ({ term, change }) => {

  return (
      <div>
    
      <input
        type="text"
        placeholder="enter episode name"
        value={term}
        onChange={change}
      />
    
    </div>
  );
};

export default Searchbar;
