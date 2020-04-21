import React from "react";

const Popup = ({ list, id }) => {
  // console.log("popup", list, id);
  return (
    <div>
      {/* filter data for episode_id in props then returning it */}
      {list &&
        list
          .filter((item) => item.fields.episode_id === id)
          .map((item, id) => {
            return (
              <div key={id}>
                <label style={{ fontWeight: "bold" }}>Director</label>
                <p>{item.fields.director}</p>
                <label style={{ fontWeight: "bold" }}>Opening crawl</label>
                <p>{item.fields.opening_crawl}</p>
              </div>
            );
          })}
    </div>
  );
};

export default Popup;
