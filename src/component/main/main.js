import React, { useEffect, useState } from "react";
import "./main.css";
import Navsearch from "../navsearch/navsearch";
import Spinner from "react-bootstrap/Spinner";
import Degree from "../degree/degree";
import Winds from "../winds/winds";
import axios from "axios";
const Main = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState("");
  const [Lat, setLat] = useState();
  const [Lon, setLon] = useState();

  //   const temp=localStorage.getItem("data")
  //   const locuser=JSON.parse(temp);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Lon}&q=${location}&units=metric&appid=5109ea576bbbe7e9a59cdb7f3d460179`;
  const getWeather = (e) => {
    if (e.key === "Enter") {
      setLoading(true);
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
          //   localStorage.setItem("data", JSON.stringify(data))
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  useEffect(() => {
    if(navigator.geolocation.getCurrentPosition.length>0){
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLon(position.coords.longitude);
    });
  }
    else{
      alert("Please Access Location")
    }
  },[]);
  useEffect(()=>{
    setLoading(true);
    axios
    .get(url)
    .then((response) => {
      setData(response.data);
      console.log(response.data);
    })
    .finally(() => {
      setLoading(false);
    });
  },[Lat,Lat])
  return (
    <>
      <div className="main">
        {loading ? (
          <div className="load">
            <Spinner animation="grow" />
          </div>
        ) : null}
        <div className="overlay"></div>
        <Navsearch
          getWeatherr={getWeather}
          locationInput={location}
          setlocationInput={setLocation}
        />
        {data ? (
          <>
            <Degree dataW={data} />
            <Winds dataW={data} />
          </>
        ) : (
          <h1>Pleas Try Again</h1>
        )}
      </div>
    </>
  );
};

export default Main;
