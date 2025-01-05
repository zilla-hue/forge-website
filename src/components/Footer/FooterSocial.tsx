import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const socialLinks = [
  { name: 'Facebook', url: '#', icon: FaFacebookF },
  { name: 'Twitter', url: '#', icon: FaTwitter },
  { name: 'LinkedIn', url: '#', icon: FaLinkedin },
  { name: 'Instagram', url: '#', icon: FaInstagram }
];

const FooterSocial = () => {
  return (
    <div className="mb-4 w-full md:w-1/3">
      <h3 className="mb-2 text-lg font-semibold">Connect With Us</h3>
      <div className="flex space-x-4">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            className="hover:text-[#FF0006] transition-colors"
          >
            <social.icon />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterSocial;