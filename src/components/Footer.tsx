import React from 'react';
import FooterInfo from './Footer/FooterInfo';
import FooterLinks from './Footer/FooterLinks';
import FooterSocial from './Footer/FooterSocial';
import FooterCopyright from './Footer/FooterCopyright';

const Footer = () => {
  return (
    <footer className="bg-[#171717] py-8 text-white">
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
