import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import loading from "../assets/image/arc_reactor.gif";

const CharacterId = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://backendmrvlmd.herokuapp.com/${id}`);
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div className="loading">
      <img src={loading} alt="" />
    </div>
  ) : (
    <div className="contain">
      {data.comics.map((elem, index) => {
        return (
          <div className="card">
            <div key={elem._id}>
          <p>{elem.title}</p>
          <p> {elem.description} </p>
          <img
            src={elem.thumbnail.path + "." + elem.thumbnail.extension}
            alt={data.title}
          />
        </div>
        </div>
          
        );
      })}
    </div>
  );
};

export default CharacterId;
