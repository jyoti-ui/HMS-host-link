import "./App.css";
import React, { useState } from "react";
import {Button} from "@mui/material"

const App = () => {
  const title = "The robot is on the way to pickup your order";
  const [titleText, setTitleText] = useState(title);
  const [ time, setTime ] = useState(20);

  const onButtonClick = () => {
    setTime(0);
    if(time === 0) {
      setTitleText("The robot is reached to the delivery location.")
    }
  }

  return (
    <div className="container">
      <div className="hms-link-container">
        <div className="title">
          <img
            className="title-image"
            src="./assets/company-logo.png"
            alt="hms-logo-1"
          />
          <img
            className="title-image"
            src="./assets/company-logo-2.png"
            alt="hms-log-2"
          />
        </div>
        <div className="title-text-container">
          <img alt="title-text" src="./assets/title-logo.png" />
          <p className="title-text">{titleText}</p>
        </div>
        <div className="order-container">
          <div className="order-1">
            <h3 className="order-text">Order ID</h3>
            <p className="order-text">7PREDGT98</p>
          </div>
          <div className="order-2">
            <h3 className="order-text">Date</h3>
            <p className="order-text">2022-09-21, 01:58 PM</p>
          </div>
        </div>
        <hr />
        <div className="scan-qr-container">
          <h2 className="scan-text">Get your item with the below options</h2>
          <div className="scan-buttons">
            <Button className={`scan-btn ${time === 0} ? delivered-btn : ""`} style={{
              color: "white",
              "font-weight": "900",
              "border-radius": "30px",
              "backgroundColor":"#BFBFBF",
              "fontSize": "1.1rem"
            }} variant="contained" disabled>Scan QR Code</Button>
            <h2>OR</h2>
            <Button style={{
              color: "white",
              "font-weight": "900",
              "border-radius": "30px",
              "backgroundColor":"#BFBFBF",
              "fontSize": "1.1rem"
            }} className="scan-btn" variant="contained" disabled>Enter PIN</Button>
          </div>
        </div>
        <div className="map-container">
          <h1 className="map-text">Map will be come here</h1>
        </div>
        <div className="delivery-time-container">
          <input
            className="delivery-input"
            value="Your Estimated Time of Delivery"
          />
          <button className="delivery-button" onClick={onButtonClick}>{time} mins</button>
        </div>

        {/* dynamic text div*/}
        {/* order */}
        {/* scan QR */}
        {/* map */}
        {/* title */}
        {/* dynamic div for delivery time*/}
      </div>
    </div>
  );
}

export default App;
