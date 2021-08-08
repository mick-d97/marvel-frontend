import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import gif from "../assets/image/marvel.gif";
import video1 from "../assets/video/Marvel Studios What If  Official Trailer  Disney.mp4";
//import video2 from "../assets/video/ShangChi.mp4";
import loading from "../assets/image/loading.gif";
import Nav from "../containers/Nav";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const video = [video1];
  const history = useHistory()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/characters");
        //console.log(response.data);
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
      <div className="gif">
        <img src={gif} alt="" />
      </div>
      <div className="video">
        <video src={video} autoPlay={true} muted={true} loop={true}></video>
      </div>
      <Nav />
      {data.results.map((character, index) => {
        return (
         
          <div
            key={character._id}   >
            
            <img
              src={character.thumbnail.path + "." + character.thumbnail.extension}
              alt="" onClick={ ()=>history.push(`/comics/${character._id}`) }
            />
          </div>
         
        );
      })}
    </div>
  );
};

export default Home;
