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
          This project was coded by vera


        </footer>

      </div>
    </div>
  );
}