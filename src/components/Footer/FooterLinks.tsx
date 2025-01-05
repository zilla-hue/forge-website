import React from 'react';

const FooterLinks = () => {
  return (
    <div className="mb-4 w-full md:w-1/3">
      <h3 className="mb-2 text-lg font-semibold">Quick Links</h3>
      <ul className="space-y-2">
        <li>
          <a href="#about" className="hover:text-[#FF0006] transition-colors">
            About Us
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-[#FF0006] transition-colors">
            Our Services
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#FF0006] transition-colors">
            Contact Us
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;