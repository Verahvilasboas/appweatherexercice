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
console.log(response.data.list);
      let list = response.data.list;
    let middays = list.filter((item) => item.dt_txt.includes("12:00:00"));

    let days = middays.map(function (midday) {
      let date = midday.dt_txt.split(" ")[0];
      let sameDay = list.filter((item) => item.dt_txt.startsWith(date));

      return {
        ...midday,
        main: {
          ...midday.main,
          temp_max: Math.max(...sameDay.map((item) => item.main.temp_max)),
          temp_min: Math.min(...sameDay.map((item) => item.main.temp_min)),
        },
      };
    });

    setForecast(days);
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
</div>
<div className="col">  
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