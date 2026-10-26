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
wind = 12,
city = 


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

  <h1> {weatherData.city} </h1> 
  <ul> 
  <li> Wednesday 07:00
  </li>

  <li> {weatherData.description}
  </li>

  </ul>

<div className="clearfix">

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
  <div className=" col-6">

  <ul> 
  <li> precipitation
  </li>

  <li> 
  humidity
  </li>

  <li> 
  wind {wind}
  </li>

  </ul>
  </div>
</div>
 );
}

else {


const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let city = " Lisbon "
let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

return "Loading...";

}


}