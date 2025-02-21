import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing-page/home"; // Ensure this file exports LandingPage correctly
import TermsPage from "./components/landing-page/TermsPage"; // Ensure this file exports TermsPage correctly
import PolicyPage from "./components/landing-page/PolicyPage"; // Ensure this file exports PolicyPage correctly
import Contact from "./components/landing-page/Contact";

function App() {
  return (
    <Router> {/* Wrap everything inside Router for routing */}
     <Routes>
  <Route path="/" element={<LandingPage />} /> {/* Default route for "/" */}
  <Route path="/home" element={<LandingPage />} />
  <Route path="/terms" element={<TermsPage />} />
  <Route path="/policy" element={<PolicyPage />} />
  <Route path="/contact" element={<Contact />} />
</Routes>

    </Router>
  );
}

export default App; // Default export for the App component
