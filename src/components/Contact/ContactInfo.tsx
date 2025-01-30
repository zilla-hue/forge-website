import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  const contactItems = [
    {
      icon: <MapPin className="text-[#FF0006] w-5 h-5" />,
      text: "No. 1 Moundou Crescent, Wuse 2, Abuja"
    },
    {
      icon: <Phone className="text-[#FF0006] w-5 h-5" />,
      text: "+234 909 429 4614"
    },
    {
      icon: <Mail className="text-[#FF0006] w-5 h-5" />,
      text: "info@forgeng.com"
    },
  ];

  return (
    <div>
      <h3 className="mb-4 text-2xl font-semibold">Get in Touch</h3>
      <p className="mb-6 text-gray-300">
        Ready to forge ahead? Contact us to discuss how we can help your brand stand out in today's competitive market.
      </p>
      <ul className="space-y-4">
        {contactItems.map((item, index) => (
          <li key={index} className="flex items-center space-x-3">
            {item.icon}
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactInfo;
