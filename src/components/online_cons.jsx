import React, { useState } from "react";
import doc_cons from "../doc_cons.png";
import { useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Icon,
  LinearProgress,
  Typography,
} from "@mui/material";
const Online_cons = ({ selectedOptions, updateSelectedOptions }) => {
  console.log(selectedOptions);
  useEffect(() => {
    const asyncFn = async () => {
      const response = await fetch("/api/onlinePatient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ selectedOptions }),
      });
    };
    asyncFn();
  }, []);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:1337/google", {
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      // if (isLoggedIn === false) {
      window.location.href = data.url;
      // }
      console.log(data.url);

      setIsLoggedIn(true);
    } catch (error) {
      console.error("Error initiating OAuth2 flow:", error);
    }
  };

  // Step 3: Create a meeting

  return (
    <div style={styles.cardContainer}>
      <div style={styles.cardContent}>
        <div>
          <img src={doc_cons} alt="Doctor Consultation" style={styles.image} />
        </div>
        <div style={styles.textContainer}>
          <h2>
            Get personalized medical advice from the comfort of your home.
          </h2>
          <p>
            Skip the wait times and consult with Dr. [Doctor's name], a
            [specialty] specialist, through secure online video calls. Choose a
            convenient time slot and get expert medical advice from anywhere.
          </p>
          <button
            onClick={handleLogin}
            disabled={isLoggedIn}
            style={styles.loginButton}
          >
            {isLoggedIn ? (
              <>
                Logged In <i className="fa-check-circle fa-sm green"></i>
              </>
            ) : (
              <>
                <i className="fa-brands fa-google"></i> Login with Google to
                Book Now
              </>
            )}
          </button>
          <p style={styles.smallText}>
            Secure & confidential. No insurance required.
          </p>
        </div>
      </div>
      <div style={styles.progressContainer} className="mt-4 text-center">
        <span>Limited slots available!</span>
        <progress value="70" max="100" style={styles.progressBar} />
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    backgroundColor: "#F5F5F5",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  cardContent: {
    display: "flex",
    flexDirection: "row",
  },
  image: {
    marginTop: "30px",
    width: "450px",
    height: "300px",
    borderRadius: "10px",
    overflow: "hidden",
  },
  textContainer: {
    marginLeft: "20px",
    textAlign: "left",
  },
  loginButton: {
    backgroundColor: "#00df9a",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
  smallText: {
    fontSize: "14px",
    marginTop: "10px",
  },
  progressContainer: {
    marginTop: "20px",
  },
  progressBar: {
    width: "100%",
    height: "20px",
  },
};

export default Online_cons;
