import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (

    <div className="App">
      <div className="container">
<header>
<h1>Weather App</h1>
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
            href="https://github.com/Verahvilasboas/weatherapp-oct26"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://suspicious-beaver-111c4d.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>

      </div>
    </div>
  );
}