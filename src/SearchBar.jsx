import React from "react";

const Searchbar = ({ term, change }) => {
  
// callback value and onchange
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
