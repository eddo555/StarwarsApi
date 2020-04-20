import React, { useState, useEffect } from "react";

const Searchbar = ({ list }) => {
  //handle value from searchbar
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  //filter the searchterm and return results
  useEffect(() => {
    const results =
      list &&
      list.filter((item) =>
        item.fields.title.toLowerCase().includes(searchTerm)
      );

    setSearchResults(results);
    console.log("results", results);
  }, [list, searchTerm]);

  return (
      <div>
    
      this is the searchbar component
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
