import React, { useState, useEffect } from "react";
import "./App.css";

function ComingSoonPage() {
  const fullText =
    "Wagevo makes your earnings available immediately after your shift. Coming soon...";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 1;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Adjust typing speed as needed

    return () => clearInterval(typingInterval);
  }, [fullText]);

  const containerStyle = {
    backgroundColor: "#000",
    color: "#fff",
    width: "100vw",
    height: "100vh",
    padding: "2rem",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  };

  const textStyle = {
    fontSize: "clamp(1rem, 2vw, 2rem)",
    whiteSpace: "pre-wrap",
  };

  return (
    <div className="coming-soon" style={containerStyle}>
      <p style={textStyle}>
        {displayedText}
        <span className="cursor"></span>
      </p>
    </div>
  );
}

function App() {
  return <ComingSoonPage />;
}

export default App;