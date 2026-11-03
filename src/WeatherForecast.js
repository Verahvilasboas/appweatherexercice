import React, { useState, useEffect } from "react";
import "./WeatherForecast.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.list);
    setLoaded(true);
  }

  function load() {
    let apiKey ="3a6dd00c3d638a73ad7a18d35074fbe8";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">

<div className="col"> 
 <WeatherForecastDay data={forecast[1]} /> 
</div>
<div className="col">  
<WeatherForecastDay data={forecast[2]} />     
</div>
<div className="col">  
<WeatherForecastDay data={forecast[3]} />     
</div><div className="col">  
<WeatherForecastDay data={forecast[4]} />     
</div>
   </div> 
</div> 
      
  
  );
} else {
    load();

    return null;
  }
}