import React, { useState } from 'react';
import { Form, Button, Alert, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    proposalPurpose: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setResponseMessage('');
    setError('');

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMessage('✅ Your message has been sent successfully!');
        setFormData({ name: '', email: '', phone: '', proposalPurpose: '', message: '' }); // Reset form
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      setError('❌ Error sending message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: 'Roboto, sans-serif', padding: '60px 20px' }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Contact Us</h2>
        <p className="text-center text-muted mb-5">
          Have a question or need assistance? Feel free to reach out to us.
        </p>

        <div className="row">
          {/* Left Side - Contact Details */}
          <div className="col-md-5">
            <h4 className="mb-3">Get in Touch</h4>
            <p><FaMapMarkerAlt className="me-2 text-primary" /> 123 Business Street, Chennai, India</p>
            <p><FaPhone className="me-2 text-success" /> +91 98765 43210</p>
            <p><FaEnvelope className="me-2 text-danger" /> support@brookbytes.com</p>

            {/* Social Media Links */}
            <div className="d-flex gap-3 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary fs-4">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-info fs-4">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary fs-4">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="col-md-7">
            <h4 className="mb-3">Send a Message</h4>

            {/* Success and Error Messages */}
            {responseMessage && <Alert variant="success">{responseMessage}</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} placeholder="Enter your name" onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} placeholder="Enter your email" onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" name="phone" value={formData.phone} placeholder="Enter your phone number" onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="proposalPurpose">
                <Form.Label>Proposal Purpose</Form.Label>
                <Form.Control type="text" name="proposalPurpose" value={formData.proposalPurpose} placeholder="Enter proposal purpose" onChange={handleChange} required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} name="message" value={formData.message} placeholder="Type your message..." onChange={handleChange} required />
              </Form.Group>

              <Button variant="primary" type="submit" disabled={loading}>
                {loading ? <Spinner as="span" animation="border" size="sm" /> : 'Send Message'}
              </Button>
            </Form>
          </div>
        </div>
      </div>

      {/* Responsive Styling */}
      <style>{`
        @media (max-width: 768px) {
          .container { text-align: center; }
          .d-flex { justify-content: center; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
