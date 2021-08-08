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
  const nullPath= "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://backendmrvlmd.herokuapp.com/characters");
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
      <div className="contain">
      {data.results.map((character, index) => {
        return (
          <div className="card"
            key={character._id}   >
            <p> {character.name} </p>
            <p> {character.title} </p>
            <img
            
              src= {character.thumbnail.path + "." + character.thumbnail.extension}
              alt="" onClick={ ()=>history.push(`/comics/${character._id}`) }
            />
          </div>
          
        );
      })}
      </div>
    </div>
  );
};

export default Home;
