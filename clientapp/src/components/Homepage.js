import React, { useEffect, useState } from "react";

const Homepage = () => {
  const [message, setMessage] = useState(""); // State to hold the message

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch("http://localhost:5000/homepage"); // Adjust the URL as needed
        const data = await response.json();
        setMessage(data.message); // Set the fetched message in state
      } catch (error) {
        console.error("Error fetching message:", error);
      }
    };

    fetchMessage();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div>
      <h1>{message}</h1> {/* Display the fetched message */}
    </div>
  );
};

export default Homepage;
