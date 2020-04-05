import React, { useState, useEffect } from "react";

const Popup = ({id}) => {
    const [data, setData] = useState();
    console.log(id)

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
{/* filter data for episode_id in props then returning it */}
            {data &&
            data.filter(item => item.fields.episode_id ===id).map((item, id) => {
                
                return (
                    <div key={id}>
                        <label style={{fontWeight:'bold'}}>Director</label>
                        <p>{item.fields.director}</p>
                        <label style={{fontWeight:'bold'}}>Opening crawl</label>
                        <p>{item.fields.opening_crawl}</p>
                    </div>
                   
                )
            })}
            
        </div>
    )
        }
}


export default Popup