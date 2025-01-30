import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#171717] py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-5xl font-bold bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
          Contact Us
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
