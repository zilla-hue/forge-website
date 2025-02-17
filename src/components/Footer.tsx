import React from 'react';
import FooterInfo from './Footer/FooterInfo';
import FooterLinks from './Footer/FooterLinks';
import FooterSocial from './Footer/FooterSocial';
import FooterCopyright from './Footer/FooterCopyright';

const Footer = () => {
  return (
    <footer className="bg-[#171717] py-20 text-white border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <FooterInfo />
          <FooterLinks />
          <FooterSocial />
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p className="text-secondary-light/80">
              Stay updated with our latest news and updates.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-[#FF0006]/40"
              />
              <button className="bg-[#FF0006] hover:bg-[#FF0006]/90 text-white px-6 rounded-xl transition-colors duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
