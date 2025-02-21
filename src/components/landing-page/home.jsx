import React, { useState } from "react";
import { Navbar, Nav, Offcanvas } from "react-bootstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import for routing
import "bootstrap/dist/css/bootstrap.min.css";
import aboutUsImage from '../../images/about-us-image.jpg';
import logo from '../../images/logo.svg';
import { FaCode, FaDatabase, FaRobot, FaPencilAlt, FaChartLine } from "react-icons/fa";



const App = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Handle hover state
  const handleHover = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  // Placeholder function for button click

  return (
    <div>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        rel="stylesheet"
      />
{/* Animated Navbar */}
<motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <Navbar
    expand="lg"
    fixed="top"
    style={{
      backgroundColor: "white",
      opacity:'90%',
      height: "60px",
      fontFamily: "Roboto, sans-serif",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    }}
  >
    <div className="container-fluid">
      <Navbar.Brand
        id="nav-brand"
        href="/home"
        style={{
          marginLeft: "3cm",
          marginTop: window.innerWidth <= 768 ? '-12px' : '20px', // Adjust margin-top for mobile view
          color: "black",
          fontWeight: "700",
          fontSize: "1.5rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: "90px", width: "auto", marginRight: "1px" }}
          />
        </motion.div>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="offcanvasNavbar"
      style={{
          marginTop: window.innerWidth <= 768 ? '-26px' : '10px', // Adjust margin-top for hamburger menu on mobile view
        }}
 />
      
      
      <Navbar.Offcanvas id="offcanvasNavbar" placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="ms-auto gap-4">
            {[
              { name: "Home", link: "/home" },
              { name: "About Us", link: "#about-us" },
              { name: "What We Do", link: "#why-choose-us" },
              { name: "Our Plans", link: "/plans" },
              { name: "Our Services", link: "/services" },
              { name: "Contact Us", link: "#/contact" }
            ].map((item, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={handleMouseLeave}
                style={{ position: "relative" }}
              >
                <Nav.Link
                  href={item.link}
                  style={{
                    color: "black",
                    fontFamily: "Roboto, sans-serif",
                    fontSize: "1rem",
                    padding: "10px",
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  {item.name}
                </Nav.Link>
                {hoveredIndex === index && (
                  <motion.div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      width: "100%",
                      height: "4px",
                      backgroundColor: "#A0FF62",
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300,
                    }}
                  />
                )}
              </motion.div>
            ))}
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </div>
  </Navbar>
</motion.div>

<section
  id="home"
  style={{
    minHeight: "100vh",
    backgroundColor: "#000", // Changed background to black
    padding: "50px 8vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontFamily: "'Mono Sans', sans-serif",
    textAlign: "left",
    color: "#fff", // Changed text color to white
    boxSizing: "border-box",
  }}
>
  <motion.div
  style={{ maxWidth: "90%" }}
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  <motion.p
    style={{
      fontSize: "clamp(1.1rem, 3vw, 1.2rem)",
      fontWeight: "bold",
      color: "#A0FF62",
      textTransform: "uppercase",
      fontFamily: "'Roboto', sans-serif", // Changed font to Roboto
      marginBottom: "15px", // Added spacing
    }}
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    BrookBytes - Let’s build a smarter future with AI and custom web.
  </motion.p>

  <motion.h3
    style={{
      fontWeight: "bold",
      fontSize: "clamp(2rem, 4vw, 2.7rem)",
      lineHeight: "1.4",
      fontFamily: "'Roboto', sans-serif", // Applied same font for consistency
      marginBottom: "20px", // Added margin for spacing
    }}
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
  >
    Transforming Businesses with Web Solutions & AI Chatbots
  </motion.h3>

  <motion.p
    style={{
      fontSize: "clamp(1rem, 2.5vw, 1rem)",
      lineHeight: "1.5",
      opacity: 0.85,
      fontFamily: "'Roboto', sans-serif", // Consistent font family
    }}
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
  >
    We specialize in <strong>custom web solutions</strong> and <strong>AI-powered chatbots</strong> to elevate businesses. Our services also include <strong>content creation</strong> and <strong>typing services</strong>, empowering your digital presence.
  </motion.p>

    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: "easeOut", delay: 1 }}
>
  <a href="https://www.linkedin.com/company/brookbytes-in/" target="_blank" rel="noopener noreferrer">
    <button
      style={{
        padding: "12px 40px",
        fontSize: "clamp(12px, 4vw, 16px)",
        color: "#A0FF62", // Text color will be the border color
        backgroundColor: "transparent", // Transparent background
        border: "2px solid #A0FF62", // Border color will be the same as the text color
        cursor: "pointer",
        fontWeight: "bold",
        marginTop: "20px",
        transition: "all 0.3s ease-in-out",
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = "#A0FF62"; // Set background color on hover
        e.target.style.color = "#000"; // Change text color to black
        e.target.style.border = "2px solid #A0FF62"; // Keep border color intact
        e.target.style.transform = "scale(1.05)"; // Scale effect
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = "transparent"; // Reset background color
        e.target.style.color = "#A0FF62"; // Reset text color
        e.target.style.border = "2px solid #A0FF62"; // Reset border color
        e.target.style.transform = "scale(1)"; // Reset scale effect
      }}
    >
      Connect with Us!
    </button>
  </a>
</motion.div>

  </motion.div>

  {/* Services Section */}
  <motion.div
    style={{
      display: "flex",
      flexWrap: "nowrap", // Ensures icons stay in a single row
      justifyContent: "center",
      gap: "20px", // Adjusted gap for spacing between icons
      marginTop: "40px",
      textAlign: "center",
      width: "100%",
      overflowX: "auto", // Allows horizontal scrolling if needed on small screens
      paddingBottom: "10px",
    }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1.2 }}
  >
    {[
      
      
      { icon: <FaRobot />, text: "AI Chatbots" },
      { icon: <FaPencilAlt />, text: "Content" },
      { icon: <FaChartLine />, text: "SEO" },
      { icon: <FaCode />, text: "Frontend" },
      { icon: <FaDatabase />, text: "Backend" },
      
    ].map((service, index) => (
      <motion.div
        key={index}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: "120px", // Increased min-width for desktop visibility
        }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="service-icon" style={{ background: "none" }}>
          {service.icon}
        </div>
        <p style={{ marginTop: "10px", fontSize: "1rem" }}>{service.text}</p>
      </motion.div>
    ))}
  </motion.div>

  {/* Responsive Styles */}
  <style>
    {`
      body {
        margin: 0;
        padding: 0;
        width: 100%;
        overflow-x: hidden;
      }
      .service-icon {
        font-size: 2rem; /* Default size for mobile */
        color:rgb(46, 230, 0);
      }
      @media (min-width: 1024px) {
        .service-icon {
          font-size: 3rem; /* Increased icon size for desktop */
        }
        #home div[style*="flex"] {
          justify-content: center; /* Keeps icons centered on larger screens */
        }
        .service-item {
          min-width: 160px; /* Increased space for each item on desktop */
        }
      }
      @media (max-width: 768px) {
        #home {
          padding: 40px 5vw;
        }

        .service-icon {
          font-size: 1.5rem !important; /* Reduced icon size on mobile */
        }
        #home div[style*="flex"] {
          justify-content: flex-start; /* Aligns icons properly on smaller screens */
          overflow-x: auto;
          white-space: nowrap;
        }
      }
    `}
  </style>
</section>

    
      {/* About Us Section */}
      <section
        id="about-us"
        style={{
          padding: '60px 20px',
          backgroundColor: '#f9f9f9',
          textAlign: 'center',
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        <blockquote
          style={{
            fontStyle: 'italic',
            fontSize: '1.5em',
            margin: '0 auto 20px auto',
            paddingLeft: '20px',
            paddingRight: '20px',
            maxWidth: '800px',
            borderLeft: '5px solid #A0FF62',
            color: '#333',
          }}
        >
          "The best way to predict the future is to create it. Take the leap, and
          turn your ideas into action—your startup could be the next
          game-changer. Don't wait for opportunities to come to you; create
          them."
          <br />— Peter Drucker
        </blockquote>
      </section>

      

      {/* about section start here*/}
<section
  id="about-us"
  style={{
    padding: '60px 20px',
    fontFamily: 'Roboto, sans-serif',
    display: 'flex',
    alignItems: 'center', // Vertically align items
    justifyContent: 'space-between', // Space between image and text
    flexDirection: 'row', // Default layout
  }}
>
  {/* Left Image Section */}
  <div
    style={{
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-start', // Align image to the left
      paddingRight: '30px', // Add space between image and text
    }}
  >
    <img
      src={aboutUsImage}
      alt="About Us"
      className="about-image" // Add the class for applying hover effect
      style={{
        width: '80%', // Adjust the image width
        maxHeight: '500px', // Set max height if needed
        objectFit: 'cover', // Ensure the image scales properly
        borderRadius: '10px', // Optional: Rounded corners
        marginTop: '-1.4cm',
        transition: 'transform 0.3s ease-in-out', // Smooth transition for the zoom effect
      }}
    />
  </div>

  {/* Right Content Section */}
  <div
    style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column', // Stack text vertically
      justifyContent: 'center', // Align text in the center of its container
      textAlign: 'left', // Align text to the left
      paddingLeft: '30px', // Add padding between text and image
      marginLeft: '-5cm', // Move text 2cm to the left
      marginTop: '-1cm', // Move text 2cm upwards
    }}
  >
    <h3  style={{ fontWeight: '700' }}>About Us</h3>
    <p>
      We specialize in innovative web solutions, AI, and custom software
      development. Our team works closely with clients to deliver tailored
      solutions that meet your unique business needs and drive growth.
    </p>
    <h4 style={{ fontWeight: '700' }}>What Sets Us Apart</h4>
    <ul>
      <li>
        <i
          className="fas fa-fire"
          style={{ marginRight: '10px', marginTop: '10px' }}
        ></i>
        <b>Interest-Driven:</b> We are fueled by genuine curiosity and a deep
        interest in the fields we work in, always striving to stay ahead of
        trends and innovations.
      </li>
      <li>
        <i
          className="fas fa-fire"
          style={{ marginRight: '10px', marginTop: '10px' }}
        ></i>
        <b>Collaborative Spirit:</b> Our team is united by the ability to
        collaborate effectively, fostering an environment where ideas are
        shared, and learning is constant.
      </li>
      <li>
        <i
          className="fas fa-fire"
          style={{ marginRight: '10px', marginTop: '10px' }}
        ></i>
        <b>Problem Solvers:</b> Whether it's building intuitive websites,
        developing AI-based solutions, or automating tasks, we focus on
        delivering practical solutions that simplify complex challenges.
      </li>
      <li>
        <i
          className="fas fa-fire"
          style={{ marginRight: '10px', marginTop: '10px' }}
        ></i>
        <b>Commitment to Quality:</b> We aim for excellence in every project,
        ensuring that our solutions not only meet the requirements but also
        provide long-term value to clients.
      </li>
      <li>
        <i
          className="fas fa-fire"
          style={{ marginRight: '10px', marginTop: '10px' }}
        ></i>
        <b>Adaptability:</b> With diverse skills and a commitment to learning,
        we quickly adapt to new tools, frameworks, and technologies, delivering
        cutting-edge solutions.
      </li>
    </ul>
  </div>
</section>

{/* CSS for hover effect on images */}
<style>{`
  /* Apply hover effect to image */
  .about-image:hover {
    transform: scale(1.05); /* Slight zoom-in effect */
  }

  /* Make the layout responsive for smaller screens (Android) */
  @media (max-width: 768px) {
    #about {
      flex-direction: column; /* Stack the sections vertically */
      text-align: center; /* Center the text */
    }

    .about-image {
      display: none; /* Hide the image on small screens */
    }

    .about-content {
      padding-left: 0; /* Adjust the padding for text */
      margin-left: 0; /* Adjust the margin for text */
      margin-top: 0; /* Adjust the margin for text */
    }
  }
`}</style>



      {/* what we do section starts here */}

      <section
  id="what-we-do"
  style={{
    padding: "60px 20px",
    fontFamily: "Roboto, sans-serif",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  }}
>
  <div style={{ marginBottom: "40px" }}>
    <h3 style={{ fontWeight: "700", marginBottom: "20px", color: "#333" }}>
      What We Do
    </h3>
    <p style={{ fontSize: "1.2em", color: "#555", maxWidth: "700px", margin: "0 auto" }}>
      At <strong>BrookBytes</strong>, we are dedicated to transforming businesses with cutting-edge 
      technology. Our expertise spans across web development, AI-driven automation, and seamless 
      cloud solutions—helping you innovate, optimize, and scale efficiently.
    </p>
  </div>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      padding: "0 20px",
    }}
  >
    {[ 
      { icon: "fas fa-code", title: "Web Development", desc: "Crafting fast, secure, and scalable websites tailored to your brand." },
      { icon: "fas fa-robot", title: "AI Chatbots", desc: "Enhancing customer interaction with AI-powered chatbots." },
      { icon: "fas fa-mobile-alt", title: "Mobile Applications", desc: "Building intuitive mobile apps for seamless user experiences." },
      { icon: "fas fa-cloud", title: "Cloud & DevOps", desc: "Empowering businesses with robust cloud solutions and automation." }
    ].map((service, index) => (
      <div
        key={index}
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <i className={service.icon} style={{ fontSize: "40px", color: "#A0FF62", marginBottom: "15px" }}></i>
        <h4 style={{ fontWeight: "700", marginBottom: "10px", color: "#222" }}>{service.title}</h4>
        <p style={{ color: "#555" }}>{service.desc}</p>
      </div>
    ))}
  </div>
</section>



{/* why choose section starts here */}

<section
  id="why-choose-us"
  style={{
    padding: '80px 20px',
    backgroundColor: '#fff',
    fontFamily: 'Roboto, sans-serif',
  }}
>
  <div style={{ textAlign: 'center', marginBottom: '40px' }}>
    <h2 style={{ fontWeight: '700', fontSize: '2.5em' }}>Why Choose Our Solutions?</h2>
  </div>
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
      margin: '0 auto',
      maxWidth: '1200px',
    }}
  >
    {/* Provide Superior Online Experience */}
    <div
      style={{
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        transition: 'transform 0.3s ease',
      }}
      className="benefit-card"
    >
      <i className="fas fa-user-check" style={{ fontSize: '3em', color: '#A0FF62', marginBottom: '15px' }}></i>
      <h4 style={{ fontWeight: '700', fontSize: '1.5em', marginBottom: '10px' }}>
        Provide a Superior Online Experience
      </h4>
      <p style={{ fontSize: '1em', color: '#555' }}>
        Customers expect performance, convenience, and availability from our platforms, even during peak activity.
      </p>
      <a
        href="/"
        style={{
          display: 'inline-block',
          marginTop: '15px',
          textDecoration: 'none',
          color: '#007bff',
          fontWeight: '600',
        }}
      >
    
      </a>
    </div>

    {/* Strengthen the Security Posture */}
    <div
      style={{
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        transition: 'transform 0.3s ease',
      }}
      className="benefit-card"
    >
      <i
        className="fas fa-shield-alt"
        style={{ fontSize: '3em', color: '#4caf50', marginBottom: '15px' }}
      ></i>
      <h4 style={{ fontWeight: '700', fontSize: '1.5em', marginBottom: '10px' }}>
        Strengthen the Security Posture
      </h4>
      <p style={{ fontSize: '1em', color: '#555' }}>
        Manage multiple security and networking services from a single, unified solution.
      </p>
      <a
        href="/"
        style={{
          display: 'inline-block',
          marginTop: '15px',
          textDecoration: 'none',
          color: '#007bff',
          fontWeight: '600',
        }}
      >
     
      </a>
    </div>

    {/* Improve Agility and Lower Costs */}
    <div
      style={{
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        transition: 'transform 0.3s ease',
      }}
      className="benefit-card"
    >
      <i
        className="fas fa-chart-line"
        style={{ fontSize: '3em', color: '#007bff', marginBottom: '15px' }}
      ></i>
      <h4 style={{ fontWeight: '700', fontSize: '1.5em', marginBottom: '10px' }}>
        Improve Agility and Lower Operational Costs
      </h4>
      <p style={{ fontSize: '1em', color: '#555' }}>
        Replacing legacy systems with modern cloud-based solutions drives innovation and efficiency.
      </p>
      <a
        href="/"
        style={{
          display: 'inline-block',
          marginTop: '15px',
          textDecoration: 'none',
          color: '#007bff',
          fontWeight: '600',
        }}
      >
    
      </a>
    </div>
  </div>

  {/* Hover Effect */}
  <style>{`
    .benefit-card:hover {
      transform: translateY(-10px); /* Slight lift */
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Stronger shadow */
    }

    @media screen and (max-width: 768px) {
      .benefit-card {
        padding: 15px;
        font-size: 14px;
      }

      h4 {
        font-size: 1.3em;
      }

      p {
        font-size: 0.9em;
      }

      .benefit-card i {
        font-size: 2.5em;
      }

      #why-choose-us h2 {
        font-size: 2em;
      }
    }

    @media screen and (max-width: 480px) {
      .benefit-card {
        padding: 10px;
      }

      h4 {
        font-size: 1.2em;
      }

      p {
        font-size: 0.85em;
      }

      .benefit-card i {
        font-size: 2em;
      }

      #why-choose-us h2 {
        font-size: 1.8em;
      }
    }
  `}</style>
</section>



<section id="our-plans" className="pricing">
  <div className="section-header">
    <h2>Choose the Right Plan for Your Needs</h2>
    <p>Flexible solutions to fit your business requirements.</p>
  </div>

  <div className="pricing-cards">
    {/* Personalized Web Development */}
    <div className="pricing-card">
      <h3>Personalized Web Development</h3>
      <p>Custom websites tailored to your business needs, ensuring a seamless user experience and a strong online presence.</p>
      <a href="https://www.linkedin.com/company/brookbytes-in/" target="_blank" rel="noopener noreferrer">Contact Us</a>
    </div>

    {/* AI-Powered Chatbots */}
    <div className="pricing-card">
      <h3>AI-Powered Chatbots</h3>
      <p>Revolutionize customer interactions with AI-driven chatbots that provide instant support and improve user engagement.</p>
      <a href="https://www.linkedin.com/company/brookbytes-in/" target="_blank" rel="noopener noreferrer">Contact Us</a>
    </div>

    {/* Content Creation & Typing Services */}
    <div className="pricing-card">
      <h3>Content Creation & Typing Services</h3>
      <p>Professional content writing and efficient typing services to help businesses communicate effectively and streamline documentation needs.</p>
      <a href="https://www.linkedin.com/company/brookbytes-in/" target="_blank" rel="noopener noreferrer" >Contact Us</a>
    </div>
  </div>
</section>

<style>{`
  .pricing {
    padding: 80px 20px;
    background-color: #f4f7fc;
    font-family: 'Roboto', sans-serif;
  }

  .section-header {
    text-align: center;
    margin-bottom: 40px;
  }

  .section-header h2 {
    font-weight: 700;
    font-size: 2.8em;
    color: #333;
  }

  .section-header p {
    font-size: 1.2em;
    color: #555;
  }

  .pricing-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    margin: 0 auto;
    max-width: 1200px;
  }

  .pricing-card {
    background-color: #fff;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .pricing-card h3 {
    font-size: 2em;
    font-weight: 700;
    color: #333;
    margin-bottom: 20px;
  }

  .pricing-card p {
    font-size: 1.2em;
    font-weight: 400;
    margin-bottom: 20px;
    color: #555;
  }

  .pricing-card a {
    display: inline-block;
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    padding: 12px 30px;
    background-color: #A0FF62;
    border-radius: 30px;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .pricing-card a:hover {
    background-color: #8DF84D;
    transform: scale(1.05);
  }

  .pricing-card:hover {
    transform: translateY(-15px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 600px) {
    .pricing {
      padding: 40px 10px;
    }

    .section-header h2 {
      font-size: 2.2em;
    }

    .section-header p {
      font-size: 1.1em;
    }

    .pricing-card {
      padding: 20px;
      margin: 10px;
    }

    .pricing-card h3 {
      font-size: 1.8em;
    }

    .pricing-card p {
      font-size: 1.1em;
    }

    .pricing-card a {
      font-size: 0.9em;
      padding: 10px 20px;
    }
  }
`}</style>


{/* Contact Us Section */}

{/* Contact Us Section */}
<section
  id="contact-us"
  style={{
    padding: '60px 20px',
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: '#f9f9f9', // Light background for contrast
  }}
>
  <div style={{ textAlign: 'center', marginBottom: '40px' }}>
    <h3 style={{ fontWeight: '700', marginBottom: '20px' }}>Contact Us</h3>
    <p style={{ fontSize: '1.1em', color: '#555' }}>
      Feel free to reach out to us through any of the following platforms:
    </p>
  </div>

  {/* Responsive Grid for Contact Links */}
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      padding: '0 20px',
    }}
  >
    {/* Facebook Card */}
    <div
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i
          className="fab fa-facebook-f"
          style={{ fontSize: '40px', color: '#A0FF62', marginBottom: '15px' }}
        ></i>
      </a>
      <h4 style={{ fontWeight: '700', marginBottom: '10px' }}>Facebook</h4>
      <p style={{ color: '#555' }}>
        Connect with us on Facebook for updates and support.
      </p>
    </div>

    {/* Instagram Card */}
    <div
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <a href="https://www.instagram.com/brookbytes.in/" target="_blank" rel="noopener noreferrer">
        <i
          className="fab fa-instagram"
          style={{ fontSize: '40px', color: '#A0FF62', marginBottom: '15px' }}
        ></i>
      </a>
      <h4 style={{ fontWeight: '700', marginBottom: '10px' }}>Instagram</h4>
      <p style={{ color: '#555' }}>
        Stay connected with us through Instagram for visuals and updates.
      </p>
    </div>

    {/* LinkedIn Card */}
    <div
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <a href="https://www.linkedin.com/company/brookbytes-in/" target="_blank" rel="noopener noreferrer">
        <i
          className="fab fa-linkedin-in"
          style={{ fontSize: '40px', color: '#A0FF62', marginBottom: '15px' }}
        ></i>
      </a>
      <h4 style={{ fontWeight: '700', marginBottom: '10px' }}>LinkedIn</h4>
      <p style={{ color: '#555' }}>
        Connect with us professionally on LinkedIn.
      </p>
    </div>

    {/* Email Card */}
    <div
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <a href="mailto:example@example.com">
        <i
          className="fas fa-envelope"
          style={{ fontSize: '40px', color: '#A0FF62', marginBottom: '15px' }}
        ></i>
      </a>
      <h4 style={{ fontWeight: '700', marginBottom: '10px' }}>Email</h4>
      <p style={{ color: '#555' }}>
        Send us an email for any inquiries or support.
      </p>
    </div>
  </div>

  {/* Add Media Queries for Android responsiveness */}
  <style>
    {`
      @media (max-width: 768px) {
        section {
          padding: 40px 10px; /* Reduce padding for mobile */
        }
        h3 {
          font-size: 1.8em; /* Smaller title for mobile */
        }
        .contact-card {
          font-size: 0.9em; /* Reduce font size */
        }
        .fas {
          font-size: 35px; /* Reduce icon size */
        }
        .grid-container {
          padding: 0 10px; /* Add more padding for smaller screens */
        }
      }
      @media (max-width: 480px) {
        section {
          padding: 30px 5px; /* Further reduce padding for very small screens */
        }
        .grid-container {
          grid-template-columns: 1fr; /* Stack items for very small screens */
        }
        .fas {
          font-size: 30px; /* Even smaller icon for very small screens */
        }
        h3 {
          font-size: 1.5em; /* Even smaller title for very small screens */
        }
        p {
          font-size: 1em; /* Adjust paragraph font size */
        }
      }
    `}
  </style>
</section>

{/* Footer */}
<footer
id="our-services"
  style={{
    backgroundColor: "#333",
    color: "#fff",
    padding: "40px 20px",
    textAlign: "center",
    fontFamily: "Roboto, sans-serif",
  }}
>
  <div style={{ marginBottom: "20px" }}>
    <h3 style={{ fontSize: "1.8em", fontWeight: "600", marginBottom: "10px" }}>
     Brook Bytes
    </h3>
    <p style={{ fontSize: "1em", color: "#bbb" }}>
      Innovative solutions for a connected world.
    </p>
  </div>
  
  <div style={{ marginBottom: "20px" }}>
    <Link to="/policy" style={{ color: "#fff", margin: "0 10px" }}>
      Privacy Policy
    </Link>
    |
    <Link to="/terms" style={{ color: "#fff", margin: "0 10px" }}>
      Terms of Service
    </Link>
    |
    <Link to="#contact-us" style={{ color: "#fff", margin: "0 10px" }}>
      Contact Us
    </Link>
  </div>

  {/* Social Media Links */}
  <div style={{ marginBottom: "20px" }}>
    <a
      href="https://www.linkedin.com/company/brookbytes-in/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "#fff",
        margin: "0 15px",
        fontSize: "24px",
        textDecoration: "none",
      }}
    >
      <i className="fa-brands fa-linkedin"></i>
    </a>
    <a
      href="https://www.instagram.com/brookbytes.in/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "#fff",
        margin: "0 15px",
        fontSize: "24px",
        textDecoration: "none",
      }}
    >
      <i className="fa-brands fa-instagram"></i>
    </a>
    <a
      href="https://wa.me/yourphonenumber"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "#fff",
        margin: "0 15px",
        fontSize: "24px",
        textDecoration: "none",
      }}
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
    {/* X Twitter (Formerly Twitter) Icon */}
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        color: "#fff",
        margin: "0 15px",
        fontSize: "24px",
        textDecoration: "none",
      }}
    >
      <i className="fa-brands fa-x-twitter"></i>
    </a>
  </div>

  <p style={{ fontSize: "1em", color: "#bbb" }}>
    &copy; {new Date().getFullYear()} Brook Bytes. All Rights Reserved.
  </p>
</footer>


    </div>
  );
};

export default App;
