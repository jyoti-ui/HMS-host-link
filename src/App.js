import "./App.css";
import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";

// const useStyles = makeStyles((theme) => {});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const App = () => {
  const title = "The robot is on the way to pickup your order";
  const [titleText, setTitleText] = useState(title);
  const [time, setTime] = useState(20);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const classes = useStyles();

  const onButtonClick = () => {
    setTime(0);
    if (time === 0) {
      setTitleText("The robot is reached to the delivery location.");
    }
  };

  return (
    <Box className="container">
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
          <img
            alt="title-text-img"
            src="./assets/title-logo.png"
            className="title-text-img"
          />
          <Typography variant="p" className="title-text">
            {titleText}
          </Typography>
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
            <button
              className={time === 0 ? "delivery-btn" : "scan-btn"}
              style={{
                color: "white",
                "font-weight": "900",
                "border-radius": "30px",
                fontSize: "1.1rem",
              }}
              variant="contained"
              disabled
            >
              Scan QR Code
            </button>
            <h2>OR</h2>
            <button
              style={{
                color: "white",
                "font-weight": "900",
                "border-radius": "30px",
                fontSize: "1.1rem",
              }}
              className={time === 0 ? "delivery-btn" : "scan-btn"}
              variant="contained"
              onClick={handleOpen}
            >
              Enter PIN
            </button>
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
          <button className="delivery-button" onClick={onButtonClick}>
            {time} mins
          </button>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h4"
              component="h2"
              style={{ color: "#005C7C", fontWeight: 600 }}
            >
              Your PIN
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              style={{
                color: "#000000",
                fontWeight: 900,
                fontSize: "1.5rem",
              }}
            >
              Enter the PIN on the Top Screen of the robot
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "4% 2%",
              }}
            >
              <button
                style={{
                  padding: "8%",
                  border: "1px solid #000000",
                  borderRadius: "6px",
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: 900,
                  fontSize: "2rem",
                }}
              >
                1
              </button>
              <button
                style={{
                  padding: "8%",
                  border: "1px solid #000000",
                  borderRadius: "6px",
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: 900,
                  fontSize: "2rem",
                }}
              >
                2
              </button>
              <button
                style={{
                  padding: "8%",
                  border: "1px solid #000000",
                  borderRadius: "6px",
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: 900,
                  fontSize: "2rem",
                }}
              >
                3
              </button>
              <button
                style={{
                  padding: "8%",
                  border: "1px solid #000000",
                  borderRadius: "6px",
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: 900,
                  fontSize: "2rem",
                }}
              >
                4
              </button>
            </div>
          </Box>
        </Modal>

        {/* dynamic text div*/}
        {/* order */}
        {/* scan QR */}
        {/* map */}
        {/* title */}
        {/* dynamic div for delivery time*/}
      </div>
    </Box>
  );
};

export default App;
