import React, { useState } from "react";
import "./Search.css";
import Data from "./Data";

const Search = () => {
  const [filterItems, setFilterItems] = useState("");
  const [searchItem] = useState(["title"]);

  const searchHandle = (e) => {
    setFilterItems(e.target.value);
    // console.log(e.target.value);
    // console.log(filterItems);
  };

  let dataSearch = Data.filter((item) => {
    return searchItem.some((newItem) => {
      return (
        item[newItem]
          .toString()
          .toLowerCase()
          // .indexOf(filterItems.toLowerCase()) > -1
          .includes(filterItems.toString().toLowerCase())
      );
    });
  });
  // console.log(dataSearch);

  return (
    <div>
      <div className="search">
        <label>Search Images: </label>
        <input onChange={searchHandle} value={filterItems} type="text" />
      </div>
      <div className="display_images">
        {dataSearch.map((data, i) => {
          return (
            <>
              <div key={i} className="img_container">
                <img src={data.img} alt="image" />
                <div>{data.title}</div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
