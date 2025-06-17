'use client';

import React, { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="bonkersMegaContainer">
      <div className="supremeFloatingBlob supremeFloatingBlob1"></div>
      <div className="supremeFloatingBlob supremeFloatingBlob2"></div>
      <div className="supremeFloatingBlob supremeFloatingBlob3"></div>
      
      <div className="wickedFormWrapper">
        <div className="crazyContentSection">
          <div className="mentalHeaderZone">
            <h1 className="beastlyTitle">Contact Us</h1>
            <p className="smoothSubtitle">
              The online store of equipment and electronics is one of the leading online stores.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="insaneFormContainer">
            <div className="bizarreInputRow">
              <div className="radicalInputGroup">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First name"
                  className="epicInputField"
                  required
                />
              </div>
              <div className="radicalInputGroup">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last name"
                  className="epicInputField"
                  required
                />
              </div>
            </div>

            <div className="radicalInputGroup">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="epicInputField"
                required
              />
            </div>

            <div className="radicalInputGroup">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                className="epicTextareaField"
                rows={6}
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="psychedelicSubmitButton"
            >
              <span className="buttonTextMadness">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </span>
              <Send className="buttonIconCrazy" size={20} />
            </button>
          </form>
        </div>

        <div className="surealIllustrationSection">
          <div className="floatingRobotContainer">
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=500&fit=crop&auto=format" 
              alt="3D Robot Illustration" 
              className="robotImageWild"
            />
            <div className="speechBubbleInsane">
              <MessageCircle className="bubbleIconNuts" size={24} />
              <div className="bubbleDotsMental">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          
          <div className="decorativeElementsZone">
            <div className="floatingShape floatingShape1"></div>
            <div className="floatingShape floatingShape2"></div>
            <div className="floatingShape floatingShape3"></div>
            <div className="floatingShape floatingShape4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
