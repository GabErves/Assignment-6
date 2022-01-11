//I struggled a lot, 
//some code was adapted from here:
//https://dev.to/vetswhocode/react-tutorial-city-state-lookup-using-the-us-postal-service-api-202p


import React, { useState } from "react";
import "./App.css";

function App() {
  const initialCityState = { city: "", state: "" };
  const [cityState, setCityState] = useState(initialCityState);
  const [zipcode, setZipcode] = useState("");
  return (
    <div className="App">
      <h1>Zip Code Lookup Tool</h1>
      <h3>This program will find a specific location depending on the zip code you type in</h3>
      <form action="" className="form-data">
        <label htmlFor="zip">Type a Zip Code Here</label>
        <input
          className="zip"
          value={zipcode}
          placeholder="XXXXX"
          type="text"
          name="zip"
          id="zip"
        />
        <label htmlFor="city">City</label>
        <input
          className={`city`}
          value={cityState.city}
          type="text"
          name="city"
          disabled
          id="city"
        />
        <label htmlFor="state">State</label>
        <input
          className={`state`}
          value={cityState.state}
          type="text"
          name="state"
          disabled
          id="state"
        />
      </form>
      <pre>
        <code>
          {JSON.stringify({
            zipcode: zipcode,
            city: cityState.city,
            state: cityState.state,
          })}
        </code>
      </pre>
    </div>
  );
}

export default App;
