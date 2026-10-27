import React, {useState} from "react"
import "./Weather.css"
import axios from 'axios';
import FormattedDate from "./FormattedDate"
export default function Weather(){




const [weatherData, setWeatherData]= useState ({ready: false });

function handleResponse(response)
{

console.log(response.data);


setWeatherData ({
ready: true,
 temperature: response.data.main.temp,
humidity: response.data.main.humidity,
wind: response.data.wind.speed,
date: new Date(response.data.dt * 1000),
description: response.data.weather[0].description,
iconUrl: "https://www.gstatic.com/weather/conditions/v1/svg/sunny_light.svg"



});


}



if (weatherData.ready) {



return(
<div>
  <div className="Weather"> 
  <form> 
  <div className="row"> 
  <div className=" col-9">
  <input 
  type="search"
  placeholder="Enter a city..."
  className="form-control"
  autoFocus= "on" 
  />
  </div>
  </div>
  </form>

<br></br>
  <h1> {weatherData.city} </h1> 

<ul> 
 <li> <FormattedDate date={weatherData.date}/> 
</li>

  <li className="text-capitalize"> {weatherData.description} </li>
</ul>
<div className="row mt-3">
<div className="col-6"> 
<div className="clearfix">

  <img className="text-capitalize" src={weatherData.icon} alt={weatherData.description} />

<div className="float-left">
<span className="temperature"> 
{Math.round(weatherData.temperature)}
</span>

<span className="unit">  c 
</span>

</div>


</div>

 </div>
  </div>
  <div className="col-6">
  <ul> 
  <li> precipitation: 15%
  </li>

  <li> 
  humidity {weatherData.humidity} %
  </li>

  <li> 
  wind  {weatherData.wind} km/h
  </li>

  </ul>
  </div> </div>
</div>
 );
}

else {

let city = "Braga";

    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

return "Loading...";

}


}