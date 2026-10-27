import React from "react";
import Weather from "./Weather";


import "./App.css";


export default function App() {
  return (

    <div className="App">
      <div className="container">
<header>

        <Weather defaultCity="New York" />
 </header>   

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.behance.net/veravilasboas2/"
            target="_blank"
            rel="noopener noreferrer"
          >
          Vera Vilas Boas
          </a>{" "}
          and is{" "}
    
 
  <a
  href="https://github.com/Verahvilasboas/appweatherexercice"
  target="_blank"
>open source github </a>


{" "}

          and{" "}
          <a
            href="https://github.com/Verahvilasboas/appweatherexercice/tree/main/src"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </footer>

      </div>
    </div>
  );
}