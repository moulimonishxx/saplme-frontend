import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { FaArrowLeft } from "react-icons/fa"; // For the back arrow icon

const TermsPage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "'Mona Sans', sans-serif", // Updated font
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
          border: "2px solid #000", // Outlined border
          backgroundColor: "transparent", // Transparent fill
          color: "#000", // Icon color
          fontSize: "20px",
          cursor: "pointer",
          marginBottom: "20px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        <FaArrowLeft />
      </button>

      <h1 style={{ textAlign: "center" }}>Terms and Conditions</h1>
      <br />

      <p>
        Please read these terms and conditions carefully before using our
        website.
      </p>

      <h3>1. Acceptance of Terms</h3>
      <p>
        Your access to and use of this website, as well as any services provided
        by our company, are conditioned upon your acceptance and compliance with
        these terms and conditions. By accessing this website and using our
        services, you acknowledge that you have read, understood, and agree to be
        bound by these terms.
      </p>

      <h3>2. User Responsibilities</h3>
      <p>
        You agree to use our website and services for lawful purposes only and to
        comply with all applicable laws, regulations, and guidelines. You further
        agree not to engage in any conduct that may disrupt or interfere with the
        operation of our website or services.
      </p>

      <h3>3. Intellectual Property</h3>
      <p>
        All content and materials provided on this website, including but not
        limited to text, graphics, logos, images, and software, are the property
        of our company or its licensors and are protected by copyright and other
        intellectual property laws. You are granted a limited, non-exclusive,
        and non-transferable license to access and use the content and materials
        for personal and non-commercial purposes only.
      </p>

      <h3>4. Limitation of Liability</h3>
      <p>
        Our company shall not be liable for any direct, indirect, incidental,
        special, or consequential damages arising out of or in any way connected
        with your use of our website or services. This includes, but is not
        limited to, any errors or omissions in any content, unauthorized access to
        or use of our servers, and any interruption or cessation of our services.
      </p>

      <p
        style={{
          fontStyle: "italic",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        These Terms and Conditions were last updated on June 8, 2024.
      </p>
    </div>
  );
};

export default TermsPage;
