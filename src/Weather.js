import React, {useState} from "react"
import "./Weather.css"
import axios from 'axios';

export default function Weather(){

const [ready, setReady]= useState(false);


const [weatherData, setWeatherData]= useState ({});

function handleResponse(response)
{

console.log(response.data);


setWeatherData ({
 temperature: response.data.main.temp,
humidity: response.data.main.humidity,
description: response.data.weather [0]. description,
wind: response.data.main.speed,


city : response.data.name,


});

setReady(true);

}



if (ready) {



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
<div className="row">
<div className="col-6"> 
<div className="clearfix">

  <h1> {weatherData.city} </h1> 
  
<div className="col-6"> 
<ul> 
  <li> Wednesday 07:00
  </li>

  <li> {weatherData.description} 
  </li>

</ul>


  <img src="https://www.gstatic.com/weather/conditions/v1/svg/partly_cloudy_light.svg" alt="icon cloudy" className="float-left" />

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