import React, { useState, useEffect } from "react";
import Popup from "./Popup";

const API = () => {
  const [data, setData] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [episodeId, setEpisodeId] = useState();
  // const [orderFirst, setOrderFirst] = useState();

  //handle value from searchbar
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //toggle for popup
  const togglePopup = (id) => {
    setShowPopup(!showPopup);
    console.log("catch id", id);
    setEpisodeId(id);
  };

  //filter the searchterm and return results
  useEffect(() => {
    const results =
      data &&
      data.filter((item) =>
        item.fields.title.toLowerCase().includes(searchTerm)
      );
    setSearchResults(results);
    console.log("results", results);
  }, [data, searchTerm]);

  //fetch API put data in  array
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://star-wars-api.herokuapp.com/films");
      const entry = await response.json();
      console.log(entry);
      setData(entry);
    }
    fetchData();
  }, []);

  if (!data) {
    return <div>no data</div>;
  } else {
    return (
      <div>
        {/* searchbar */}
        <div>
          <input
            type="text"
            placeholder="enter episode name"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>

        {/* map searchresults and show list */}

        <table>
          <thead>
            <tr>
              <th>nr</th>
              <th>title</th>
              <th>release date</th>
            </tr>
          </thead>
          {searchResults &&
            searchResults.map((item, id) => {
              console.log("map", item);

              return (
                <React.Fragment key={id}>
                  <tbody>
                    <tr>
                      <td>{item.fields.episode_id}</td>
                      {/* wrapping in arrowfunction prevents loop */}
                      <td onClick={() => togglePopup(item.fields.episode_id)}>
                        {item.fields.title}
                      </td>
                      <td>{item.fields.release_date}</td>
                    </tr>
                  </tbody>
                </React.Fragment>
              );
            })}
        </table>
        {/* click to show popup component */}
        {showPopup ? <Popup id={episodeId} /> : null}
      </div>
    );
  }
};

export default API;

// The following list is what tasks you need to complete. If there are certain ones you can’t complete, skip them and we’ll just talk about the rest.
// • Present a list containing episode number, title and release date. A user should be able to click a movie in the list and see more information about that movie, so its director and opening crawl.
// • You should be able to search the list of movies by title.
// • A user should be able to change the sorting of movies, in 3 different ways
// • Alphabetical based on the title
// • Release date
// • Episode number
// It’s your choice on how you’d like to set up the project. Just think about the portability of it, so a full list of dependencies in package.json and stuff like that so it can be tested on a different computer than yours.
// There is no time limit. Spend the amount of time you feel is appropriate on it and when you’re done email it to denis.dervisevic@abicart.se.
