import "./App.css";
import profilePic from "./assets/ken.jpg";
import introPic from "./assets/first.jpg";
import introPic2 from "./assets/second.jpg";
import introPic3 from "./assets/third.jpg";
import introPic4 from "./assets/fourth.jpg";
import introPic5 from "./assets/fitth.jpg";
import introPic6 from "./assets/sixth.jpg";
import Tour1 from "./assets/Tour1.jpg";
import orgPic from "./assets/uic ccs.jpg";
import speakerIan from "./assets/Ian.jpg";
import speakerHizon from "./assets/Hizon.jpg";
import speakerNed from "./assets/Ned.jpg";
import speakerCris from "./assets/Cris.jpg";
import  { useState } from "react";

const navLinks = [
  { href: "#about", label: "About Me" },
  { href: "#ppt", label: "Seminar PPTs" },
  { href: "#seminars", label: "Speakers" },
  { href: "#tours", label: "Tours" },
  { href: "#organization", label: "Organization" },
  { href: "#reflection", label: "Reflections" },
  { href: "#conclusion", label: "Conclusion" },
];

const pptImages = [
  { src: introPic, caption: "" },
  { src: introPic2, caption: "" },
  { src: introPic3, caption: "" },
  { src: introPic4, caption: "" },
  { src: introPic5, caption: "" },
  { src: introPic6, caption: "" },
];

const speakers = [
  { name: "Ian Binablo", img: speakerIan },
  { name: "Hizon Caja", img: speakerHizon },
  { name: "Ned Palacios", img: speakerNed },
  { name: "Cris John Manero", img: speakerCris },
];

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const handleDarkMode = () => {
    setDark((d) => !d);
    document.body.classList.toggle("dark");
  };

  const handleNavClick = () => {
    setSidebarOpen(false);
  };

  return (
    <div className={`app${sidebarOpen ? " sidebar-open" : ""}${dark ? " dark" : ""}`}>
      {/* Hamburger */}
      <button
        className={`hamburger${sidebarOpen ? " open" : ""}`}
        onClick={() => setSidebarOpen((open) => !open)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Dark mode toggle */}
      <button
        className="add-btn"
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          zIndex: 1200,
          background: dark ? "#23272f" : "#4285F4",
          color: "#fff",
        }}
        onClick={handleDarkMode}
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Sidebar */}
      <aside className="sidebar" aria-label="Sidebar Navigation">
        <div className="profile">
          <img src={profilePic} alt="Ken" className="profile-pic" />
          <h2>Ken's Journal</h2>
          <div style={{ fontSize: 15, opacity: 0.8, marginBottom: 10 }}>
            Bachelor of Science in IT<br/>
            UIC, Davao City
          </div>
        </div>
        <nav>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleNavClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="content">
        {/* About Me */}
        <section id="about">
          <h1>About Me</h1>
          <p>
            Welcome to my E-Journal! I'm Ken, a passionate IT student at UIC, Davao City. Here, I document my learnings, experiences, and reflections from our course Seminars, Workshop and Tours (ELEC014.23).
          </p>
        </section>

        {/* PPT Images Section */}
        <section id="ppt">
          <h2>Seminar</h2>
          <div className="ppt-grid">
            {pptImages.map((img, idx) => (
              <div className="ppt-card" key={idx}>
                <img src={img.src} alt={img.caption} className="ppt-photo" />
                <div className="ppt-caption">{img.caption}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Seminars (Speakers) */}
        <section id="seminars">
          <h2>Seminar Speakers</h2>
          <div className="seminar-grid">
            {speakers.map((speaker) => (
              <div className="seminar-card" key={speaker.name}>
                <img src={speaker.img} alt={speaker.name} className="section-photo speaker-photo" />
                <div className="seminar-name">{speaker.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Tours */}
        <section id="tours">
          <h2>Tours</h2>
          <div className="tour-flex">
            <img src={Tour1} alt="PTV DAVAO" className="section-photo" style={{ maxWidth: 180 }} />
            <div>
              <div style={{ fontWeight: 500 }}>First Tour: PTV MediaHub Davao</div>
              <div style={{ color: "#5f6368", fontSize: 15 }}>A glimpse into the world of media and broadcasting.</div>
            </div>
          </div>
        </section>

        {/* Organization Section */}
        <section id="organization">
          <h2>Organization</h2>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <img
              src={orgPic}
              alt="UIC CCS"
              style={{
                width: 140,
                height: 140,
                objectFit: "cover",
                borderRadius: 12,
                boxShadow: "0 2px 8px rgba(60,64,67,0.10)",
              }}
            />
            <p style={{ flex: 1 }}>
              UIC CCS
            </p>
          </div>
        </section>

        {/* Reflections */}
        <section id="reflection">
          <h2>Reflections</h2>
          <div className="reflection-flex">
            <div className="reflection-block">
              <h3 className="reflection-title seminar">Seminar Reflection</h3>
              <div className="reflection-box">
                <p>
                  The seminars provided invaluable insights into the IT industry, highlighting the importance of adaptability, continuous learning, and collaboration. Each speaker shared unique experiences that inspired me to pursue excellence in my field.
                </p>
              </div>
            </div>
            <div className="reflection-block">
              <h3 className="reflection-title tour">Tour Reflection</h3>
              <div className="reflection-box">
                <p>
                  Visiting PTV MediaHub Davao was eye-opening. It showcased the integration of technology in media and the teamwork required to deliver quality content. The experience broadened my perspective on career opportunities in IT and media.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section id="conclusion">
          <h2>Conclusion</h2>
          <p>
            This journal has helped me reflect on my learnings and experiences. I am grateful for the opportunities to grow and look forward to applying these lessons in my future endeavors.
          </p>
        </section>

        {/* Footer */}
        <footer style={{ textAlign: "center", color: "#888", fontSize: 14, marginTop: 40 }}>
          &copy; {new Date().getFullYear()} Ken's Journal &middot; Powered by React
        </footer>
      </main>
    </div>
  );
}

export default App;