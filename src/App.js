import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";
import "./App.css";
import WagevoLogo from "./Assets/images/wagevo-logo.png"; // Placeholder logo path

// Dynamic Icon Imports
import ClockIconSvg from "/Users/mr.stark/Downloads/wagevo-site/src/Assets/icons/SVG/Bold/Time/Clock Circle.svg";
import DollarIconSvg from "/Users/mr.stark/Downloads/wagevo-site/src/Assets/icons/SVG/Bold/Money/Dollar.svg";
import CreditCardIconSvg from "/Users/mr.stark/Downloads/wagevo-site/src/Assets/icons/SVG/Bold/Money/Card 2.svg";
import PlugIconSvg from "/Users/mr.stark/Downloads/wagevo-site/src/Assets/icons/SVG/Bold/Electronic, Devices/Plug Circle.svg";
import SettingsIconSvg from "/Users/mr.stark/Downloads/wagevo-site/src/Assets/icons/SVG/Bold/Settings, Fine Tuning/Settings.svg";
import BoltIconSvg from "/Users/mr.stark/Downloads/wagevo-site/src/Assets/icons/SVG/Bold/Essentional, UI/Bolt Circle.svg";
import CheckIconSvg from "/Users/mr.stark/Downloads/wagevo-site/src/Assets/icons/SVG/Bold/Essentional, UI/Check Circle.svg";
import MagnifierIconSvg from "/Users/mr.stark/Downloads/wagevo-site/src/Assets/icons/SVG/Bold/Search/Magnifer.svg";

// Custom Icon Components
const ClockIcon = () => <img src={ClockIconSvg} alt="Clock" className="icon" />;
const DollarIcon = () => <img src={DollarIconSvg} alt="Dollar" className="icon" />;
const CardIcon = () => <img src={CreditCardIconSvg} alt="Card" className="icon" />;
const PlugIcon = () => <img src={PlugIconSvg} alt="Plug" className="icon" />;
const GearIcon = () => <img src={SettingsIconSvg} alt="Gear" className="icon" />;
const LightningIcon = () => <img src={BoltIconSvg} alt="Lightning" className="icon" />;
const CheckIcon = () => <img src={CheckIconSvg} alt="Check" className="icon" />;
const SearchIcon = () => <img src={MagnifierIconSvg} alt="Search" className="icon" />;

function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    document.body.classList.toggle("light-mode", !isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="page home slide-in">
      <header className="hero-section">
        <h1>Welcome to Wagevo</h1>
        <p>Because life doesn’t happen biweekly.</p>
        <div className="hero-buttons">
          <button className="btn primary">Learn More</button>
          <button className="btn secondary">Enter the Portal</button>
        </div>
      </header>

      <section className="about-section slide-in">
        <h2>About Us</h2>
        <p>
          Wagevo was founded by my brother and I in January 2025 and aims to make pay easier. Building on our shared vision, we created a platform that delivers instant earnings to hourly workers, eliminating the wait for biweekly paychecks.
        </p>
        <div className="about-buttons">
          <button className="btn primary">Contact Us</button>
          <button className="btn secondary">Join Wagevo</button>
        </div>
      </section>

      <section className="how-it-works-preview slide-in">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <ClockIcon />
            <p>Shift Tracking</p>
          </div>
          <div className="step">
            <DollarIcon />
            <p>Instant Funds</p>
          </div>
          <div className="step">
            <CardIcon />
            <p>Spend Ready</p>
          </div>
        </div>
      </section>

      <section className="benefits-section slide-in">
        <h2>Benefits</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <LightningIcon />
            <h3>Instant Access</h3>
            <p>Get your money your way—spend it the second you earn it.</p>
          </div>
          <div className="benefit">
            <CheckIcon />
            <h3>No Waiting</h3>
            <p>Cash flow that keeps up with your life.</p>
          </div>
          <div className="benefit">
            <PlugIcon />
            <h3>Easy Integration</h3>
            <p>Works with your existing time clock system.</p>
          </div>
          <div className="benefit">
            <GearIcon />
            <h3>Stress-Free Payroll</h3>
            <p>Automated solutions for businesses and employees.</p>
          </div>
        </div>
      </section>

      <footer className="footer slide-in">
        <img src={WagevoLogo} alt="Wagevo Logo" className="logo-image" />
        <span className="footer-text">Wagevo</span>
        <p>support@wagevo.com | (123) 456-7890</p>
        <div className="footer-links">
          <NavLink to="/how-it-works">How It Works</NavLink>
          <NavLink to="/employers">Wagevo for Employers</NavLink>
          <NavLink to="/employees">Wagevo for Employees</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
      </footer>

      <div className="mode-toggle" onClick={toggleMode}>
        <span>{isDarkMode ? "🌙" : "☀️"}</span>
      </div>
    </div>
  );
}

function HowItWorks() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    document.body.classList.toggle("light-mode", !isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="page how-it-works slide-in">
      <header className="sub-hero">
        <h1>How Wagevo Works</h1>
        <p>See how we turn your shifts into instant cash.</p>
      </header>
      <section className="info-section slide-in">
        <ClockIcon />
        <h2>Shift Tracking</h2>
        <p>When you clock out, we log your hours instantly. Your earnings are ready the moment your shift ends.</p>
      </section>
      <section className="info-section slide-in">
        <DollarIcon />
        <h2>Instant Funds</h2>
        <p>We float your money to your virtual ledger right away. No waiting for payday—access it now.</p>
      </section>
      <section className="info-section slide-in">
        <CardIcon />
        <h2>Spend Ready</h2>
        <p>Load your earnings onto a debit card instantly. Spend or save however you choose, hassle-free.</p>
      </section>
      <section className="info-section slide-in">
        <h2>Logistics</h2>
        <ul>
          <li>Integrates with QuickBooks and other payroll systems.</li>
          <li>Real-time shift tracking for accuracy.</li>
          <li>Direct deposit or Wagevo card options.</li>
          <li>24/7 support for any issues.</li>
        </ul>
      </section>
      <footer className="footer slide-in">
        <img src={WagevoLogo} alt="Wagevo Logo" className="logo-image" />
        <span className="footer-text">Wagevo</span>
        <p>support@wagevo.com | (123) 456-7890</p>
        <div className="footer-links">
          <NavLink to="/how-it-works">How It Works</NavLink>
          <NavLink to="/employers">Wagevo for Employers</NavLink>
          <NavLink to="/employees">Wagevo for Employees</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
      </footer>

      <div className="mode-toggle" onClick={toggleMode}>
        <span>{isDarkMode ? "🌙" : "☀️"}</span>
      </div>
    </div>
  );
}

function Employers() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    document.body.classList.toggle("light-mode", !isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="page employers slide-in">
      <header className="sub-hero">
        <h1>Wagevo for Employers</h1>
        <p>Simplify payroll and boost employee satisfaction.</p>
      </header>

      <section className="why-love-us slide-in">
        <h2>Why Employers Love Us</h2>
        <div className="benefit-grid">
          <div className="benefit-block">
            <PlugIcon />
            <h3>Seamless Integration</h3>
            <p>Connects with Intuit QuickBooks within minutes.</p>
          </div>
          <div className="benefit-block">
            <DollarIcon />
            <h3>Cost Efficiency</h3>
            <p>Reduce turnover with instant pay, saving recruitment costs.</p>
          </div>
          <div className="benefit-block">
            <GearIcon />
            <h3>Automated Payroll</h3>
            <p>We handle funding; you pay biweekly—no hassle.</p>
          </div>
        </div>
      </section>

      <section className="how-we-work slide-in">
        <h2>How We Work with You</h2>
        <div className="steps-grid">
          <div className="step">
            <PlugIcon />
            <h3>Connect</h3>
            <ul>
              <li>Link your time clock in a quick setup.</li>
              <li>Link clocks in under 10 minutes.</li>
              <li>No extra hardware or software needed.</li>
            </ul>
          </div>
          <div className="step">
            <ClockIcon />
            <h3>Enroll</h3>
            <ul>
              <li>Invite team via secure app link.</li>
              <li>Quick employee profile verification.</li>
              <li>Track enrollment on your dashboard.</li>
            </ul>
          </div>
          <div className="step">
            <DollarIcon />
            <h3>We Float Funds</h3>
            <ul>
              <li>We advance pay after each shift.</li>
              <li>You reimburse biweekly via transfer.</li>
              <li>View reports on funds and payments.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="call-to-action slide-in">
        <h2>Ready to simplify your payroll?</h2>
        <div>
          <button className="btn secondary">Learn More</button>
          <button className="btn primary">Request a Demo</button>
        </div>
      </section>
      <footer className="footer slide-in">
        <img src={WagevoLogo} alt="Wagevo Logo" className="logo-image" />
        <span className="footer-text">Wagevo</span>
        <p>support@wagevo.com | (123) 456-7890</p>
        <div className="footer-links">
          <NavLink to="/how-it-works">How It Works</NavLink>
          <NavLink to="/employers">Wagevo for Employers</NavLink>
          <NavLink to="/employees">Wagevo for Employees</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
      </footer>

      <div className="mode-toggle" onClick={toggleMode}>
        <span>{isDarkMode ? "🌙" : "☀️"}</span>
      </div>
    </div>
  );
}

function Employees() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    document.body.classList.toggle("light-mode", !isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="page employees slide-in">
      <header className="sub-hero">
        <h1>Wagevo for Employees</h1>
        <p>Get paid the moment you clock out.</p>
      </header>

      <section className="why-love-us slide-in">
        <h2>Why Employees Love Us</h2>
        <div className="benefit-grid">
          <div className="benefit-block">
            <LightningIcon />
            <h3>Instant Access</h3>
            <p>Cash available right after your shift.</p>
          </div>
          <div className="benefit-block">
            <CheckIcon />
            <h3>No Fees</h3>
            <p>Free to use with your debit card.</p>
          </div>
          <div className="benefit-block">
            <CardIcon />
            <h3>Financial Freedom</h3>
            <p>Spend or save on your terms.</p>
          </div>
        </div>
      </section>

      <section className="how-paid slide-in">
        <h2>How You Get Paid</h2>
        <div className="steps-grid">
          <div className="step">
            <ClockIcon />
            <h3>Clock Out</h3>
            <ul>
              <li>End your shift with a tap.</li>
              <li>See earnings update instantly.</li>
              <li>Track hours in the app.</li>
            </ul>
          </div>
          <div className="step">
            <DollarIcon />
            <h3>Funds Floated</h3>
            <ul>
              <li>Money added to your ledger.</li>
              <li>Available within seconds.</li>
              <li>No waiting for payday.</li>
            </ul>
          </div>
          <div className="step">
            <CardIcon />
            <h3>Spend Instantly</h3>
            <ul>
              <li>Load funds to your debit card.</li>
              <li>Use anywhere, anytime.</li>
              <li>Save for later if you choose.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="call-to-action slide-in">
        <h2>Ready to access your earnings?</h2>
        <div>
          <button className="btn secondary">Learn More</button>
          <button className="btn primary">Download the App</button>
        </div>
      </section>
      <footer className="footer slide-in">
        <img src={WagevoLogo} alt="Wagevo Logo" className="logo-image" />
        <span className="footer-text">Wagevo</span>
        <p>support@wagevo.com | (123) 456-7890</p>
        <div className="footer-links">
          <NavLink to="/how-it-works">How It Works</NavLink>
          <NavLink to="/employers">Wagevo for Employers</NavLink>
          <NavLink to="/employees">Wagevo for Employees</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
      </footer>

      <div className="mode-toggle" onClick={toggleMode}>
        <span>{isDarkMode ? "🌙" : "☀️"}</span>
      </div>
    </div>
  );
}

function Contact() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    document.body.classList.toggle("light-mode", !isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="page contact slide-in">
      <header className="sub-hero">
        <h1>Contact Us</h1>
        <p>The Wagevo Team</p>
      </header>
      <div className="contact-options slide-in">
        <button className="btn primary">
          <span className="icon">📩</span> Send Us A Message
        </button>
        <span>OR</span>
        <button className="btn secondary">
          <span className="icon">📞</span> Call Us
        </button>
      </div>
      <footer className="footer slide-in">
        <img src={WagevoLogo} alt="Wagevo Logo" className="logo-image" />
        <span className="footer-text">Wagevo</span>
        <p>support@wagevo.com | (123) 456-7890</p>
        <div className="footer-links">
          <NavLink to="/how-it-works">How It Works</NavLink>
          <NavLink to="/employers">Wagevo for Employers</NavLink>
          <NavLink to="/employees">Wagevo for Employees</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
        </div>
      </footer>

      <div className="mode-toggle" onClick={toggleMode}>
        <span>{isDarkMode ? "🌙" : "☀️"}</span>
      </div>
    </div>
  );
}

// Modified Coming Soon Page with typewriter effect and macOS terminal styling
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
    }, 50); // adjust typing speed as needed

    return () => {
      clearInterval(typingInterval);
    };
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

function NavBar({ onSearchActive }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchClick = () => {
    setIsSearchOpen(true);
    onSearchActive(true);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchBlur = () => {
    setIsSearchOpen(false);
    setSearchQuery("");
    onSearchActive(false);
  };

  return (
    <nav className={`navbar ${isSearchOpen ? "hidden" : ""}`}>
      <div className="nav-logo">
        <Link to="/">
          <img src={WagevoLogo} alt="Wagevo Logo" className="logo-image" />
        </Link>
      </div>
      <div className="nav-links-wrapper">
        <ul className="nav-links">
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/how-it-works" activeClassName="active">
              How It Works
            </NavLink>
          </li>
          <li>
            <NavLink to="/employers" activeClassName="active">
              Employers
            </NavLink>
          </li>
          <li>
            <NavLink to="/employees" activeClassName="active">
              Employees
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={`nav-search ${isSearchOpen ? "active" : ""}`} onClick={handleSearchClick}>
        <SearchIcon />
        {isSearchOpen && (
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            onBlur={handleSearchBlur}
            className="search-input"
            placeholder="Search..."
            autoFocus
          />
        )}
      </div>
    </nav>
  );
}

function App() {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const WebsiteIsReady = false;

  return (
    !WebsiteIsReady ? (
      <ComingSoonPage />
    ) : (
      <Router>
        <div className="App">
          <NavBar onSearchActive={setIsNavbarHidden} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/employers" element={<Employers />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    )
  );
}

export default App;