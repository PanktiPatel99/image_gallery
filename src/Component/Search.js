import "./Search.css";
import Data from "./Data";

const Search = (props) => {
  return (
    <div>
      <div className="search">Search Image </div>
      <div className="display_images">
        {Data.map((data, i) => {
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
