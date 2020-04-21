import React, { useState } from "react";

const List = ({ list, pop }) => {
  const [isOldestFirst, setIsOldestFirst] = useState(true);

   //sort
   function sortByTitle() {
    if (isOldestFirst) {
      list.sort(function (a, b) {
        var nameA = a.fields.title;
        var nameB = b.fields.title;
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
    } else {
      list.sort(function (a, b) {
        var nameA = a.fields.title;
        var nameB = b.fields.title;
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }

        return 0;
      });
    }
  }

  function sortByDate() {
    if (isOldestFirst) {
      list.sort(function (a, b) {
        var nameA = a.fields.release_date;
        var nameB = b.fields.release_date;
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
    } else {
      list.sort(function (a, b) {
        var nameA = a.fields.release_date;
        var nameB = b.fields.release_date;
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }

        return 0;
      });
    }
  }
  function sortByNr() {
    if (isOldestFirst) {
      list.sort(function (a, b) {
        var nameA = a.fields.episode_id;
        var nameB = b.fields.episode_id;
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
    } else {
      list.sort(function (a, b) {
        var nameA = a.fields.episode_id;
        var nameB = b.fields.episode_id;
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }

        return 0;
      });
    }
  }
  const toggleSort = (str) => {
    setIsOldestFirst(!isOldestFirst);
    //receive str argument to enter corresponding function
    if (str === "title") {
      sortByTitle();
      // console.log("entered title");
    } else if (str === "date") {
      sortByDate();
      // console.log("entered date");
    } else if (str === "nr") {
      sortByNr();
      // console.log("entered nr");
    }
  };
    return (
        <div className='cell'
        style={{gridRow:'2/4', gridColumn:'1/11'}}
        >
        <table>
          <thead>
            <tr>
              <th onClick={() => toggleSort("nr")}>nr</th>
              <th onClick={() => toggleSort("title")}>title</th>
              <th onClick={() => toggleSort("date")}>release date</th>
            </tr>
          </thead>
          {list &&
            list.map((item, id) => {
              // console.log("map", item);

              return (
                <React.Fragment key={`${id}`}>
                  <tbody>
                    <tr>
                      <td>{item.fields.episode_id}</td>
                      {/* wrapping in arrowfunction prevents loop */}
                      <td onClick={() => pop(item.fields.episode_id)}>
                        {item.fields.title}
                      </td>
                      <td>{item.fields.release_date}</td>
                    </tr>
                  </tbody>
                </React.Fragment>
              );
            })}
        </table>
        </div>
    )
}

export default List;