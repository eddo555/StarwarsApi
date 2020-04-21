import React from 'react';

const List = ({ list, pop, sort }) => {
    return (
        <div className='cell'
        style={{gridRow:'2/4', gridColumn:'1/11'}}
        >
        <table>
          <thead>
            <tr>
              <th onClick={() => sort("nr")}>nr</th>
              <th onClick={() => sort("title")}>title</th>
              <th onClick={() => sort("date")}>release date</th>
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