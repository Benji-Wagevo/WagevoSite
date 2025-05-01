import React, { useState, useEffect } from "react";
import "./App.css";

function IndexPage() {
  const fullText =
    "Wagevo makes your earnings available immediately after your shift. Coming soon! We appreciate your patience.";
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
    }, 50);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  const containerStyle = {
    backgroundColor: "#fff",
    color: "#000",
    width: "100vw",
    height: "100vh",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  };

  const headerStyle = {
    width: "100%",
    backgroundColor: "#ccc",
    color: "#000",
    fontSize: "2rem",
    fontWeight: "bold",
    padding: "1rem",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const textStyle = {
    fontSize: "clamp(1rem, 2vw, 2rem)",
    whiteSpace: "pre-wrap",
    padding: "2rem",
  };

  return (
    <div className="index-page" style={containerStyle}>
      <header style={headerStyle}>Wagevo</header>
      <p style={textStyle}>
        {displayedText}
        <span className="cursor"></span>
      </p>
    </div>
  );
}

function App() {
  return <IndexPage />;
}

export default App;