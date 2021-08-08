import { useState, useEffect } from "react";
import axios from "axios";
import loading from "../assets/image/arc_reactor.gif"

const Comics = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/comics"
        );
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
      
      <div>
         
{data.results.map((comic, index)=>{
    return(
        <div key={comic._id}>
            <p>{comic.title}</p>
            <p> {comic.description} </p>
            <img src={comic.thumbnail.path+"."+comic.thumbnail.extension} alt="" />
        </div>
    )
})}
      </div>
    
  );
};

export default Comics;