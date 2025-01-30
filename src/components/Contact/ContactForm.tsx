import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-white">Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Your Name"
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Your Email"
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-white">Phone</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="Your Phone"
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message" className="text-white">Message</Label>
        <Textarea
          id="message"
          placeholder="Your Message"
          rows={4}
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 resize-none"
        />
      </div>
      
      <Button
        type="submit"
        className="w-full bg-[#FF0006] hover:bg-[#FF0006]/80"
      >
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
