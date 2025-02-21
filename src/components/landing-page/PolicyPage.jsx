import React from "react";
import { useNavigate } from "react-router-dom"; // Assuming you're using React Router
import { FaArrowLeft } from "react-icons/fa"; // For the back arrow icon

const PolicyPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "'Mona Sans', sans-serif",
        maxWidth: "800px",
        margin: "auto",
      }}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate("/home")} // Navigate to home page
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          border: "2px solid #000", // Outline for the circle
          backgroundColor: "transparent", // Transparent background (no color inside)
          color: "#000", // Icon color
          fontSize: "20px",
          cursor: "pointer",
          marginBottom: "20px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        <FaArrowLeft />
      </button>

      <h1 style={{ textAlign: "center" }}>Privacy Policy</h1>
      <br />

      <p>Please read this Privacy Policy carefully before using our website.</p>

      <h3>1. Information Collection</h3>
      <p>
        We may collect personal information from you when you use our website
        or services, such as your name, email address, and payment details. This
        information is used to provide our services and improve your experience.
        We are committed to protecting your privacy and will not sell,
        distribute, or lease your personal information to third parties unless
        required by law.
      </p>

      <h3>2. Data Security</h3>
      <p>
        We implement reasonable security measures to protect your personal
        information from unauthorized access, disclosure, alteration, or
        destruction. However, no method of transmission over the internet or
        electronic storage is 100% secure, and we cannot guarantee absolute
        security.
      </p>

      <h3>3. Cookies</h3>
      <p>
        We may use cookies and similar technologies to collect information about
        your usage of our website and to improve the quality of our services.
        You can choose to accept or decline cookies through your browser
        settings. Disabling cookies may affect your ability to access certain
        features.
      </p>

      <h3>4. Third-Party Links</h3>
      <p>
        Our website may contain links to third-party websites or services that
        are not owned or controlled by our company. We are not responsible for
        the privacy practices or content of these third-party websites. We
        encourage you to review their privacy policies before sharing personal
        information.
      </p>

      <p
        style={{
          fontStyle: "italic",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        This Privacy Policy was last updated on June 8, 2024.
      </p>
    </div>
  );
};

export default PolicyPage;
