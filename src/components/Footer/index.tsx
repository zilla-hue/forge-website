import React from 'react';
import FooterInfo from './FooterInfo';
import FooterLinks from './FooterLinks';
import FooterSocial from './FooterSocial';
import FooterCopyright from './FooterCopyright';

const Footer = () => {
  return (
    <footer className="bg-secondary py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <FooterInfo />
          <FooterLinks />
          <FooterSocial />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
