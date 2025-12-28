import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ContactForm from "./components/ContactForm";
import "./styles/styles.css";



export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="homepage" id="home">
      {/* ✅ Navbar */}
      <motion.nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">ZoraFox Technology</h1>

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
 {isOpen && <div className="menu-overlay" onClick={() => setIsOpen(false)} />}

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
<motion.header className="hero-section">
  <motion.div
    className="hero-container"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    <motion.div
      className="hero-content center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
   <motion.h2
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    Welcome to ZoraFox_Technology
  </motion.h2>
  
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.6 }}
  >
    Innovative Technology for a Smarter Tomorrow.
  </motion.p>
      <p>
        Welcome to ZoraFox_Technology - Empowering Digital Innovation.
        We turn ideas into exceptional digital solutions.
      </p>

      <p>Our goal is simple — Innovation that empowers success.</p>
    </motion.div>
   <motion.div
  className="hero-btns"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 120 }}
>
  <a href="#services" className="btn primary-btn">Get Started</a>
  <a href="#contact" className="btn outline-btn">Contact Us</a>
</motion.div>

  </motion.div>
  
   <div className="scroll-down">
      <span></span>
    </div>
</motion.header>

      {/* ✅ About Us */}
      <motion.section className="vision" id="about">
        <h1>About Us</h1>

        <div className="about-boxes">
          <div className="about-card">
            <div className="emoji">👥</div>
            <h3>Who We Are</h3>
            <p>
             zoraFox_Technology is a creative and technology-based company founded by
              passionate innovators.
            </p>
          </div>

          <div className="about-card">
            <div className="emoji">👁️</div>
            <h3>Our Vision</h3>
            <p>To be a professional and reliable digital partner.</p>
          </div>

          <div className="about-card">
            <div className="emoji">💡</div>
            <h3>Our Mission</h3>
            <p>
              To deliver modern, scalable, and user-friendly digital solutions.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ✅ Services */}
      <motion.section className="services" id="services">
        <h2>Our Services</h2>

        <div className="service-grid">
          {[
            {
              img: "/assets/webdevelopment.jpg",
              title: "Web Development",
              desc: "Responsive, fast websites.",
            },
            {
              img: "/assets/appdevelopment.jpg",
              title: "App Development",
              desc: "Android/iOS app development.",
            },
            {
              img: "/assets/digitalmarkerting.jpg",
              title: "Digital Marketing",
              desc: "SEO & online ads.",
            },
            {
              img: "/assets/documentation.jpg",
              title: "Documentation",
              desc: "Business documentation services.",
            },
            {
              img: "/assets/seo.jpg",
              title: "SEO",
              desc: "Improve Google ranking.",
            },
            {
              img: "/assets/businesspromotion.jpg",
              title: "Business Promotion",
              desc: "Brand marketing.",
            },
            {
              img: "/assets/tradermentership.jpg",
              title: "Trading Mentorship",
              desc: "Learn trading effectively.",
            },
            {
              img: "/assets/logomarker.jpg",
              title: "Logo Design",
              desc: "Modern logos.",
            },
            {
              img: "/assets/posterdesign.jpg",
              title: "Poster Design",
              desc: "Marketing posters.",
            },
            {
              img: "/assets/videoediting.jpg",
              title: "Video Editing",
              desc: "Professional video editing.",
            },
            {
              img: "/assets/graphicdesign.jpg",
              title: "Graphic Design",
              desc: "Creative designs.",
            },
             {
              img: "/assets/tshirtprinting.jpeg",
              title: "Customized T-Shirt",
              desc: "Create your own vibe.",
            },
          ].map((service) => (
            <div className="service-card" key={service.title}>
              <img src={service.img} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ✅ Contact Section */}
      <motion.footer className="contact" id="contact">
        <h2 className="contact-title">Contact</h2>

        <div className="contact-grid">
          {/* Left – Form */}
          <div className="contact-left">
            <ContactForm />
          </div>

          {/* Right – Details */}
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
              >
                Visit LinkedIn
              </a>
            </p>

            <p>
              <strong>Instagram:</strong>{" "}
              <a
                href="https://www.instagram.com/nuvoteh_official"
                target="_blank"
              >
                @zoraFox_Technology_official
              </a>
            </p>

            <p>
              <strong>Contacts:</strong>
              <br />📱 99762 57449  
              <br />📱 91508 56346 
              <br />📱 86104 33937 
              <br />📱 83442 29777
            </p>
          </div>
        </div>

    </motion.footer>
    </div>
  );
}
