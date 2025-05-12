import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import logo from "./Assets/images/logo512.png";
import moneyIcon from "./Assets/images/money.png";
import gearIcon from "./Assets/images/gear.png";
import businessIcon from "./Assets/images/business.png";
import cardIcon from "./Assets/images/card.png";
import phoneIcon from "./Assets/images/phone.png";
import clockIcon from "./Assets/images/clock.png";

function IndexPage() {
  // State for the typing effect
  const fullText =
    "Wagevo makes your earnings available immediately after your shift. Coming soon! We appreciate your patience.";
  const [displayedText, setDisplayedText] = useState("");
  
  // State for contact form
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  
  // State for active section
  const [activeSection, setActiveSection] = useState(0);
  
  // Define sections
  const sections = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "features", title: "Features" },
    { id: "contact", title: "Contact" }
  ];
  
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is Wagevo?",
      answer:
        "Wagevo is an early wage access tool that allows employees to access their earned wages immediately after their shift. No more waiting for payday!",
    },
    {
      question: "How does it work?",
      answer:
        "Wagevo integrates directly with your employer's payroll and time-tracking systems to calculate your earned wages in real time. You can then withdraw those earnings to your bank account or debit card.",
    },
    {
      question: "Is there a cost to use Wagevo?",
      answer:
        "For employees, there is a small fee per early withdrawal. For employers, Wagevo is completely free—there are no setup or subscription costs.",
    },
    {
      question: "How much of my pay can I access early?",
      answer:
        "You can typically access up to 100% of your earned wages before your scheduled payday. The exact percentage may vary based on your employer's policy.",
    },
    {
      question: "Will this affect my paycheck?",
      answer:
        "Yes, any wages you access early will be deducted from your regular paycheck to ensure everything balances properly.",
    },
  ];


  // References to section elements
  const sectionRefs = useRef(sections.map(() => React.createRef()));
  
  // Typing effect
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
  
  // Intersection observer to detect current section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // When 60% of the section is visible
    };
    
    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          setActiveSection(index);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Add all section elements to the observer
    sectionRefs.current.forEach((ref, index) => {
      if (ref.current) {
        ref.current.dataset.index = index;
        observer.observe(ref.current);
      }
    });
    
    return () => {
      sectionRefs.current.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);
  
  // Scroll to section function
  const scrollToSection = (index) => {
    sectionRefs.current[index].current?.scrollIntoView({
      behavior: "smooth"
    });
  };
  
  // Styles
  const containerStyle = {
    backgroundColor: "#fff",
    color: "#000",
    width: "100%",
    height: "100vh",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    overflowY: "auto",
    scrollBehavior: "smooth",
    scrollSnapType: "y mandatory",
    position: "relative",
    boxSizing: "border-box"
  };
  
  const headerStyle = {
    width: "100%",
    backgroundColor: "#f0f0f0",
    color: "#000",
    fontSize: "2.5rem",
    fontWeight: "bold",
    padding: "0.75rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    flexWrap: "wrap",
    boxSizing: "border-box",
    "@media (max-width: 768px)": {
      padding: "0.5rem",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      height: "auto",
      flex: "none",
      fontSize: "2rem"
    }
  };
  
  const logoStyle = {
    height: "2.5rem",
    width: "auto",
    "@media (max-width: 768px)": {
      height: "2rem"
    }
  };
  
  const buttonStyle = {
    backgroundColor: "#7300a6",
    color: "#fff",
    border: "none",
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "0.5rem",
    "@media (max-width: 768px)": {
      fontSize: "0.9rem",
      padding: "0.4rem 0.8rem"
    }
  };
  
  const sectionStyle = {
    minHeight: "100vh",
    width: "100%",
    padding: "2rem 1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    scrollSnapAlign: "start",
    position: "relative",
    boxSizing: "border-box",
    "@media (max-width: 768px)": {
      paddingTop: "9rem"
    }
  };
  
  const formStyle = {
    display: showForm ? "block" : "none",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    padding: "2rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: 1000,
    width: "90%", // Use a percentage width for smaller screens
    maxWidth: "400px",
  };
  
  const formHeaderStyle = {
    textAlign: "center",
    marginBottom: "1.5rem",
    fontSize: "1.5rem", // Adjust font size for smaller screens
  };
  
  const formButtonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
  };
  
  const dotNavigationStyle = {
    position: "fixed",
    right: "1rem", // Adjust position for smaller screens
    top: "50%",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem", // Reduce gap for smaller screens
    zIndex: 100,
  };
  
  const dotStyle = (isActive) => ({
    width: isActive ? "12px" : "8px",
    height: isActive ? "12px" : "8px",
    borderRadius: "50%",
    backgroundColor: isActive ? "#7300a6" : "#ccc",
    transition: "all 0.3s ease",
    cursor: "pointer",
  });
  
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

  // Form event handlers
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
        setShowForm(false);
      } else {
        setShowForm(false);
      }
    } catch (err) {
      setShowForm(false);
    }
  };

  // Navigation arrow styles
  const navArrowStyle = {
    position: "fixed",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
    border: "none",
    zIndex: 900
  };
  
  const downArrowStyle = {
    ...navArrowStyle,
    bottom: "20px",
    "@media (max-width: 768px)": {
      bottom: "30px"
    }
  };
  
  const upArrowStyle = {
    ...navArrowStyle,
    top: "100px",
    "@media (max-width: 768px)": {
      top: "45px"
    }
  };
  
  // Function to navigate to next or previous section
  const navigateSection = (direction) => {
    let nextIndex;
    if (direction === 'next') {
      nextIndex = Math.min(activeSection + 1, sections.length - 1);
    } else {
      nextIndex = Math.max(activeSection - 1, 0);
    }
    
    scrollToSection(nextIndex);
  };

  // Add new style for mobile navigation
  const mobileNavStyle = {
    display: "flex",
    gap: "2rem",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    "@media (max-width: 768px)": {
      display: "none !important"
    }
  };

  // Add new style for mobile header content
  const headerContentStyle = {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    cursor: "pointer",
    "@media (max-width: 768px)": {
      order: 1
    }
  };

  // Add new style for mobile contact button
  const contactButtonStyle = {
    ...buttonStyle,
    "@media (max-width: 768px)": {
      order: 3
    }
  };

  // Update the home section divider style
  const dividerStyle = {
    width: "2px",
    alignSelf: "stretch",
    backgroundColor: "#e0e0e0",
    margin: "0 1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "@media (max-width: 768px)": {
      width: "80%",
      height: "2px",
      margin: "0 auto"
    }
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="index-page" style={containerStyle}>
      <header style={headerStyle}>
        <div style={headerContentStyle} onClick={() => scrollToSection(0)}>
          <img src={logo} alt="Wagevo Logo" style={logoStyle} />
          <span>Wagevo</span>
        </div>
        {!isMobile && (
          <div style={mobileNavStyle}>
            <button 
              style={{ 
                ...buttonStyle, 
                backgroundColor: "transparent", 
                color: "#000",
                padding: "0.5rem 1rem",
                fontSize: "1.2rem",
                fontWeight: "500",
                borderBottom: activeSection === 1 ? "2px solid #7300a6" : "none",
                transition: "border-bottom 0.3s ease"
              }}
              onClick={() => scrollToSection(1)}
            >
              Features
            </button>
            <button 
              style={{ 
                ...buttonStyle, 
                backgroundColor: "transparent", 
                color: "#000",
                padding: "0.5rem 1rem",
                fontSize: "1.2rem",
                fontWeight: "500",
                borderBottom: activeSection === 2 ? "2px solid #7300a6" : "none",
                transition: "border-bottom 0.3s ease"
              }}
              onClick={() => scrollToSection(2)}
            >
              How It Works
            </button>
            <button 
              style={{ 
                ...buttonStyle, 
                backgroundColor: "transparent", 
                color: "#000",
                padding: "0.5rem 1rem",
                fontSize: "1.2rem",
                fontWeight: "500",
                borderBottom: activeSection === 3 ? "2px solid #7300a6" : "none",
                transition: "border-bottom 0.3s ease"
              }}
              onClick={() => scrollToSection(3)}
            >
              FAQ
            </button>
          </div>
        )}
        <button style={contactButtonStyle} onClick={() => setShowForm(true)}>
          Contact Us
        </button>
      </header>

      {/* Dot Navigation */}
      <div style={dotNavigationStyle}>
        {sections.map((section, index) => (
          <div
            key={section.id}
            style={dotStyle(activeSection === index)}
            onClick={() => scrollToSection(index)}
            title={section.title}
          />
        ))}
      </div>
      
      {/* Home Section */}
      <section 
        ref={sectionRefs.current[0]} 
        id="home" 
        style={{...sectionStyle, backgroundColor: "#ffffff"}}
      >
        <div style={{ 
          display: "flex", 
          flexDirection: "row", 
          width: "100%", 
          maxWidth: "1200px",
          minHeight: "300px",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap"
        }}>
          {/* Left Column */}
          <div style={{ 
            flex: "1 1 45%", 
            padding: "2rem", 
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "300px"
          }}>
            <h2 style={{ 
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)", 
              fontWeight: "bold",
              lineHeight: "1.2"
            }}>
              Life doesn't happen biweekly
            </h2>
          </div>
          
          {/* Divider */}
          <div style={{
            width: "2px",
            alignSelf: "stretch",
            backgroundColor: "#e0e0e0",
            margin: "0 1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}></div>
          
          {/* Right Column */}
          <div style={{ 
            flex: "1 1 45%", 
            padding: "2rem", 
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "300px"
          }}>
            <h2 style={{ 
              fontSize: "clamp(2rem, 3.5vw, 3.5rem)", 
              fontWeight: "bold",
              lineHeight: "1.2"
            }}>
              Every day should be payday
            </h2>
          </div>
        </div>
        
        {/* Down arrow - only show if not on the last section */}
        {activeSection < sections.length - 1 && (
          <button 
            style={downArrowStyle}
            onClick={() => navigateSection('next')}
            aria-label="Go to next section"
          >
            ↓
          </button>
        )}
      </section>
      
      {/* About Section */}
      <section 
        ref={sectionRefs.current[1]} 
        id="about" 
        style={{
          ...sectionStyle, 
          backgroundColor: "#f8f8f8",
          "@media (max-width: 768px)": {
            paddingTop: "8rem",
            minHeight: "auto",
            paddingBottom: "2rem",
            scrollSnapAlign: "none",
            position: "relative",
            marginTop: "2rem"
          }
        }}
      >
        <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "flex-start",
              flexWrap: "wrap",
              width: "100%",
              maxWidth: "1200px",
              padding: "2rem",
              gap: "2rem",
              "@media (max-width: 768px)": {
                paddingTop: "3rem",
                gap: "2.5rem"
              }
            }}>
          {/* Column 1 */}
          <div style={{ 
            flex: "1 1 300px", 
            textAlign: "center",
            "@media (max-width: 768px)": {
              flex: "1 1 100%",
              marginTop: "1rem"
            }
          }}>
            <img src={moneyIcon} alt="On-Demand Pay" style={{ 
              height: "80px", 
              marginBottom: "1rem",
              "@media (max-width: 768px)": {
                height: "60px",
                marginBottom: "1rem"
              }
            }} />
            <h3 style={{ 
              fontSize: "1.75rem", 
              fontWeight: "bold", 
              marginBottom: "1rem",
              "@media (max-width: 768px)": {
                fontSize: "1.5rem",
                marginBottom: "0.75rem"
              }
            }}>On-Demand Pay</h3>
            <p style={{
              "@media (max-width: 768px)": {
                fontSize: "0.9rem",
                margin: "0"
              }
            }}>Access your earnings immediately after your shift. No waiting, no stress.</p>
          </div>

          {/* Column 2 */}
          <div style={{ flex: "1 1 300px", textAlign: "center" }}>
            <img src={gearIcon} alt="Seamless Integration" style={{ height: "80px", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "1rem" }}>Seamless Integration</h3>
            <p>Effortlessly connects with your existing payroll and timeclock systems.</p>
          </div>

          {/* Column 3 */}
          <div style={{ flex: "1 1 300px", textAlign: "center" }}>
            <img src={businessIcon} alt="Zero Cost for Employers" style={{ height: "80px", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "1rem" }}>Zero Cost for Employers</h3>
            <p>Offer this benefit with no financial burden to your business.</p>
          </div>
        </div>

        
        {/* Up arrow - only show if not on the first section */}
        {activeSection > 0 && (
          <button 
            style={upArrowStyle}
            onClick={() => navigateSection('prev')}
            aria-label="Go to previous section"
          >
            ↑
          </button>
        )}
        
        {/* Down arrow - only show if not on the last section */}
        {activeSection < sections.length - 1 && (
          <button 
            style={downArrowStyle}
            onClick={() => navigateSection('next')}
            aria-label="Go to next section"
          >
            ↓
          </button>
        )}
      </section>
      
      {/* Features Section */}
      <section 
        ref={sectionRefs.current[2]} 
        id="features" 
        style={{
          ...sectionStyle, 
          backgroundColor: "#ffffff",
          "@media (max-width: 768px)": {
            paddingTop: "0",
            minHeight: "auto",
            paddingBottom: "2rem",
            scrollSnapAlign: "none",
            position: "relative",
            marginTop: "8rem",
            transform: "translateY(2rem)"
          }
        }}
      >
        <div style={{
          "@media (max-width: 768px)": {
            paddingTop: "4rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            top: "2rem"
          }
        }}>
          <h2 style={{ 
            fontSize: "2.5rem", 
            textAlign: "center", 
            marginBottom: "2rem",
            "@media (max-width: 768px)": {
              fontSize: "1.8rem",
              marginBottom: "1rem",
              position: "relative",
              zIndex: 1,
              marginTop: "2rem",
              paddingTop: "2rem"
            }
          }}>How It Works</h2>
          <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "flex-start",
                flexWrap: "wrap",
                width: "100%",
                maxWidth: "1200px",
                padding: "2rem",
                gap: "2rem",
                "@media (max-width: 768px)": {
                  padding: "0.5rem",
                  gap: "1rem"
                }
              }}>
            {/* Column 1 */}
            <div style={{ 
              flex: "1 1 300px", 
              textAlign: "center",
              "@media (max-width: 768px)": {
                flex: "1 1 100%"
              }
            }}>
              <img src={clockIcon} alt="On-Demand Pay" style={{ 
                height: "80px", 
                marginBottom: "1rem",
                "@media (max-width: 768px)": {
                  height: "60px",
                  marginBottom: "0.5rem"
                }
              }} />
              <h3 style={{ 
                fontSize: "1.75rem", 
                fontWeight: "bold", 
                marginBottom: "1rem",
                "@media (max-width: 768px)": {
                  fontSize: "1.5rem",
                  marginBottom: "0.5rem"
                }
              }}>1. Clock Out</h3>
              <p style={{
                "@media (max-width: 768px)": {
                  fontSize: "0.9rem",
                  margin: "0"
                }
              }}>Employees clock out and instantly see their earned balance.</p>
            </div>

            {/* Column 2 */}
            <div style={{ 
              flex: "1 1 300px", 
              textAlign: "center",
              "@media (max-width: 768px)": {
                flex: "1 1 100%"
              }
            }}>
              <img src={phoneIcon} alt="Seamless Integration" style={{ 
                height: "80px", 
                marginBottom: "1rem",
                "@media (max-width: 768px)": {
                  height: "60px",
                  marginBottom: "0.5rem"
                }
              }} />
              <h3 style={{ 
                fontSize: "1.75rem", 
                fontWeight: "bold", 
                marginBottom: "1rem",
                "@media (max-width: 768px)": {
                  fontSize: "1.5rem",
                  marginBottom: "0.5rem"
                }
              }}>2. Request Pay</h3>
              <p style={{
                "@media (max-width: 768px)": {
                  fontSize: "0.9rem",
                  margin: "0"
                }
              }}>They request their earned wages with one click in the app.</p>
            </div>

            {/* Column 3 */}
            <div style={{ 
              flex: "1 1 300px", 
              textAlign: "center",
              "@media (max-width: 768px)": {
                flex: "1 1 100%"
              }
            }}>
              <img src={cardIcon} alt="Zero Cost for Employers" style={{ 
                height: "80px", 
                marginBottom: "1rem",
                "@media (max-width: 768px)": {
                  height: "60px",
                  marginBottom: "0.5rem"
                }
              }} />
              <h3 style={{ 
                fontSize: "1.75rem", 
                fontWeight: "bold", 
                marginBottom: "1rem",
                "@media (max-width: 768px)": {
                  fontSize: "1.5rem",
                  marginBottom: "0.5rem"
                }
              }}>3. Use Funds</h3>
              <p style={{
                "@media (max-width: 768px)": {
                  fontSize: "0.9rem",
                  margin: "0"
                }
              }}>Funds are available immediately in their connected account.</p>
            </div>
          </div>
          
          {/* Up arrow - only show if not on the first section */}
          {activeSection > 0 && (
            <button 
              style={upArrowStyle}
              onClick={() => navigateSection('prev')}
              aria-label="Go to previous section"
            >
              ↑
            </button>
          )}
        </div>
      </section>
      
      {/* FAQ Section */}
      <section 
        ref={sectionRefs.current[3]} 
        id="contact" 
        style={{...sectionStyle, backgroundColor: "#f8f8f8"}}
      >
        <h2 style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "2rem" }}>Frequently Asked Questions</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {faqData.map((item, index) => {
  const isActive = activeIndex === index;

  return (
    <div
      key={index}
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        cursor: "pointer",
        width: "100%", // ✅ Prevent width change
        boxSizing: "border-box", // ✅ Include padding in width
        transition: "all 0.3s ease",
      }}
      onClick={() => setActiveIndex(isActive ? null : index)}
    >
      {/* Question */}
      <div
        style={{
          padding: "1rem",
          backgroundColor: "#f7f7f7",
          fontWeight: "bold",
          wordWrap: "break-word",
        }}
      >
        {item.question}
      </div>

      {/* Answer */}
      <div
        style={{
          padding: isActive ? "1rem" : "0",
          backgroundColor: "#fff",
          maxHeight: isActive ? "1000px" : "0px",
          overflow: "hidden",
          transition: "all 0.3s ease",
          opacity: isActive ? 1 : 0,
          wordWrap: "break-word", // ✅ Ensure long text wraps
        }}
      >
        {item.answer}
      </div>
    </div>
  );
})}

        </div>
        
        {/* Up arrow - only show if not on the first section */}
        {activeSection > 0 && (
          <button 
            style={upArrowStyle}
            onClick={() => navigateSection('prev')}
            aria-label="Go to previous section"
          >
            ↑
          </button>
        )}
      </section>

      {/* Overlay */}
      <div style={overlayStyle} onClick={() => setShowForm(false)}></div>

      {/* Contact Form */}
      <div style={formStyle}>
        <h2 style={formHeaderStyle}>Contact Us</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              style={{ width: "100%", margin: "0.5rem 0", padding: "0.5rem" }}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{ width: "100%", margin: "0.5rem 0", padding: "0.5rem" }}
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              style={{ width: "100%", margin: "0.5rem 0", padding: "0.5rem", minHeight: "100px" }}
            ></textarea>
          </div>
          <div style={formButtonContainerStyle}>
            <button type="submit" style={buttonStyle}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function App() {
  return <IndexPage />;
}

export default App;