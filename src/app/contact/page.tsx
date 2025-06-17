import React from 'react';
import Navbar from '@/app/components/Navbar/Navbar'; // Adjust based on your project structure
import Footer from '@/app/components/Footer/Footer'; // Add your Footer component if you have one
import ContactForm from '@/app/components/ContactForm/ContactForm';


const ContactPage = () => {
  return (
    <>
      <Navbar />
      <ContactForm />
      <Footer />
    </>
  );
};

export default ContactPage;