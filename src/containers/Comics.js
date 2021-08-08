import { useState, useEffect } from "react";
import axios from "axios";
import loading from "../assets/image/arc_reactor2.gif";

const Comics = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://backendmrvlmd.herokuapp.com/comics");
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div className="loading">
      <img src={loading} alt="" />
    </div>
  ) : (
    <div className="contain">
      {data.results.map((comic, index) => {
        return (
          <div key={comic._id} className="card">
           <div>
           <p>{comic.title}</p>
            <img
              src={comic.thumbnail.path + "." + comic.thumbnail.extension}
              alt=""
            />
           </div>
            
          </div>
        );
      })}
    </div>
  );
};

export default Comics;
