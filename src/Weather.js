import React from "react"
import "./Weather.css"
import axios from 'axios';

export default function Weather(){
return(

<div className="Weather"> 
<h1> Lisbon </h1> 
<ul> 
<li> Wednesday 07:00
</li>

<li> mostly cloudy
</li>

</ul>

<div className="row">
<div className=" col-6">

<img src="https://www.gstatic.com/weather/conditions/v1/svg/partly_cloudy_light.svg" alt="icon cloudy" />

6°C°F

</div>
<div className=" col-6">

<ul> 
<li> precipitation
</li>

<li> 
humidity
</li>

<li> 
wind
</li>

</ul>
</div>
</div>
</div> );


}

