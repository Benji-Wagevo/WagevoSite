import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "./Assets/images/logo512.png";

function IndexPage() {
  const fullText =
    "Wagevo makes your earnings available immediately after your shift. Coming soon! We appreciate your patience.";
  const [displayedText, setDisplayedText] = useState("");
  const [showForm, setShowForm] = useState(false); // State to toggle the form
  const [formData, setFormData] = useState({ name: "", email: "", message: "" }); // State for form data

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
    backgroundColor: "#f0f0f0",
    color: "#000",
    fontSize: "3rem",
    fontWeight: "bold",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", // Space between logo and button
  };

  const logoStyle = {
    height: "4rem",
    width: "auto",
  };

  const buttonStyle = {
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    fontSize: "1.5rem",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const formStyle = {
    display: showForm ? "block" : "none", // Show or hide the form
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "2rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: 1000,
  };

  const overlayStyle = {
    display: showForm ? "block" : "none",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 999,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
  
      if (res.ok) {
        alert('Message sent!');
        setShowForm(false);
      } else {
        const data = await res.json();
        alert(`Error: ${data.error || 'Failed to send message'}`);
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred while sending the message.');
    }
  };  

  return (
    <div className="index-page" style={containerStyle}>
      <header style={headerStyle}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img src={logo} alt="Wagevo Logo" style={logoStyle} />
          Wagevo
        </div>
        <button style={buttonStyle} onClick={() => setShowForm(true)}>
          Contact Us
        </button>
      </header>

      <p style={{ padding: "2rem", fontSize: "clamp(1rem, 2vw, 2rem)" }}>
        {displayedText}
        <span className="cursor"></span>
      </p>

      {/* Overlay */}
      <div style={overlayStyle} onClick={() => setShowForm(false)}></div>

      {/* Contact Form */}
      <div style={formStyle}>
        <h2>Contact Us</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name" // Add name attribute
              value={formData.name}
              onChange={handleInputChange}
              required
              style={{ width: "100%", margin: "0.5rem 0" }}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email" // Add name attribute
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{ width: "100%", margin: "0.5rem 0" }}
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="message" // Add name attribute
              value={formData.message}
              onChange={handleInputChange}
              required
              style={{ width: "100%", margin: "0.5rem 0" }}
            ></textarea>
          </div>
          <button type="submit" style={buttonStyle}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

function App() {
  return <IndexPage />;
}

export default App;