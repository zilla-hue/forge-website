import { ParallaxCard } from "@/components/ParallaxCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl text-secondary-light/80 mb-8 animate-fade-in delay-200">
              Let's discuss how we can help transform your digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-[#171717]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ParallaxCard className="p-8 bg-white/5 backdrop-blur-sm border border-[#FF0006]/20 hover:border-[#FF0006]/40 transition-all duration-500">
              <form className="space-y-6">
                <div className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="bg-white/5 border-[#FF0006]/20 text-white placeholder:text-white/50"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-white/5 border-[#FF0006]/20 text-white placeholder:text-white/50"
                  />
                  <Textarea
                    placeholder="Your Message"
                    className="bg-white/5 border-[#FF0006]/20 text-white placeholder:text-white/50 min-h-[150px]"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full group bg-[#FF0006] hover:bg-[#FF0006]/90 text-white"
                >
                  <span>Send Message</span>
                  <Send className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </ParallaxCard>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-white mb-8">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-[#FF0006]/10">
                      <Mail className="h-6 w-6 text-[#FF0006]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Email Us
                      </h4>
                      <p className="text-secondary-light/80">
                        info@forgeng.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-[#FF0006]/10">
                      <Phone className="h-6 w-6 text-[#FF0006]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Call Us
                      </h4>
                      <p className="text-secondary-light/80">
                        +234 909 429 4614
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-[#FF0006]/10">
                      <MapPin className="h-6 w-6 text-[#FF0006]" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        Visit Us
                      </h4>
                      <p className="text-secondary-light/80">
                        No. 1 Moundou Crescent,
                        <br />
                        Wuse 2, Abuja
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="w-full h-[300px] rounded-lg overflow-hidden animate-fade-in delay-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8197075542084!2d7.4655900000000015!3d9.0801835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ae5f8ebb613%3A0xdbfb2175967d0f34!2s1%20Moundou%20St%2C%20Wuse%2C%20Abuja%20900281%2C%20Federal%20Capital%20Territory%2C%20Nigeria!5e0!3m2!1sen!2sru!4v1738225897282!5m2!1sen!2sru"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
