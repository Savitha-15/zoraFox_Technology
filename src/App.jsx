import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ContactForm from "./components/ContactForm";
import "./styles/styles.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div id="home">

      {/* ================= NAVBAR ================= */}
      <motion.nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">Nuvoteh</h1>

          {/* Desktop Menu */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>

          {/* Hamburger Button */}
          <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <ul className={`mobile-menu ${isOpen ? "show" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* ================= HERO ================= */}
      <motion.header
        className="hero-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="highlight">Welcome to Nuvoteh</h2>
        <p className="subtitle">Innovative Technology for a Smarter Tomorrow.</p>
        <p>
          Welcome to NUVOTEH - Empowering Digital Innovation. At NUVOTEH, we turn
          ideas into exceptional digital solutions.
        </p>
      </motion.header>

      {/* ================= ABOUT US ================= */}
      <motion.section
        className="vision"
        id="about"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>About Us</h1>

        <div className="about-boxes">
          <div className="about-card">
            <div className="emoji">👥</div>
            <h3>Who We Are</h3>
            <p>
              NUVOTEH is a creative technology-based company with passionate
              innovators.
            </p>
          </div>

          <div className="about-card">
            <div className="emoji">👁️</div>
            <h3>Our Vision</h3>
            <p>
              To be a reliable digital partner built on creativity and quality.
            </p>
          </div>

          <div className="about-card">
            <div className="emoji">💡</div>
            <h3>Our Mission</h3>
            <p>
              To deliver scalable and user-friendly digital solutions.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ================= SERVICES ================= */}
      <motion.section
        className="services"
        id="services"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Our Services</h2>

        <div className="service-grid">
          {[
            { img: "/assets/webdevelopment.jpg", title: "Web Development", desc: "Responsive websites for your business." },
            { img: "/assets/appdevelopment.jpg", title: "App Development", desc: "Android/iOS apps with smooth UI/UX." },
            { img: "/assets/digitalmarkerting.jpg", title: "Digital Marketing", desc: "SEO & Social media campaigns." },
            { img: "/assets/documentation.jpg", title: "Documentation", desc: "Professional business documents." },
            { img: "/assets/seo.jpg", title: "SEO", desc: "Boost your website visibility." },
            { img: "/assets/businesspromotion.jpg", title: "Business Promotion", desc: "Grow your brand creatively." },
            { img: "/assets/tradermentership.jpg", title: "Trading Mentorship", desc: "Learn trading from experts." },
            { img: "/assets/logomarker.jpg", title: "Logo Design", desc: "Modern and unique logo designs." },
            { img: "/assets/posterdesign.jpg", title: "Poster Design", desc: "Creative poster designs." },
            { img: "/assets/videoediting.jpg", title: "Video Editing", desc: "Professional video editing." },
            { img: "/assets/graphicdesign.jpg", title: "Graphic Design", desc: "Make your brand stand out." },
          ].map((service) => (
            <div className="service-card" key={service.title}>
              <img src={service.img} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ================= CONTACT FOOTER ================= */}
      <motion.footer
        className="contact"
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="contact-title">Contact</h2>

        <div className="contact-grid">
          <div className="contact-left">
            <ContactForm />
          </div>

          <div className="contact-right">
            <h3>Contact Details</h3>

            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:nuvoteh2023@gmail.com">nuvoteh2023@gmail.com</a>
            </p>

            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/nuvoteh-creators-510304329"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit LinkedIn
              </a>
            </p>

            <p>
              <strong>Instagram:</strong>{" "}
              <a
                href="https://www.instagram.com/nuvoteh_official"
                target="_blank"
                rel="noopener noreferrer"
              >
                @nuvoteh_official
              </a>
            </p>

            <p>
              <strong>Contacts:</strong>
              <br />📱 99762 57449 (Prakash)
              <br />📱 91508 56346 (Gokul Nath)
              <br />📱 83442 29777 (Savitha Lakshmi)
            </p>
          </div>
        </div>

        <p className="footer-end">© 2025 Nuvoteh. All Rights Reserved.</p>
      </motion.footer>

    </div>
  );
}
