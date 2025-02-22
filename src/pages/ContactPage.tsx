import { ParallaxCard } from "@/components/ParallaxCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-secondary">
      {/* Enhanced Hero Section */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 animate-fade-in bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-secondary-light/90 mb-8 animate-fade-in delay-200 leading-relaxed">
              Let's discuss how we can help transform your digital presence.
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF0006] via-transparent to-transparent" />
      </section>

      {/* Enhanced Contact Form & Info Section */}
      <section className="py-24 bg-[#171717]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Enhanced Contact Form */}
            <ParallaxCard className="p-10 bg-black/20 backdrop-blur-sm border border-[#FF0006]/20 hover:border-[#FF0006]/40 transition-all duration-500 rounded-2xl">
              <form className="space-y-8">
                <div className="space-y-6">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    className="bg-black/30 border-[#FF0006]/20 text-white placeholder:text-white/50 h-12 text-lg rounded-xl"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="bg-black/30 border-[#FF0006]/20 text-white placeholder:text-white/50 h-12 text-lg rounded-xl"
                  />
                  <Textarea
                    placeholder="Your Message"
                    className="bg-black/30 border-[#FF0006]/20 text-white placeholder:text-white/50 min-h-[200px] text-lg rounded-xl"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full group bg-[#FF0006] hover:bg-[#FF0006]/90 text-white text-lg h-14 rounded-xl"
                >
                  <span>Send Message</span>
                  <Send className="ml-3 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </ParallaxCard>

            {/* Enhanced Contact Information */}
            <div className="space-y-10">
              <div className="animate-fade-in">
                <h2 className="text-4xl font-bold text-white mb-10">
                  Contact Information
                </h2>
                <div className="space-y-8">
                  <div className="flex items-center gap-6 p-6 rounded-xl bg-black/20 backdrop-blur-sm border border-white/5 hover:border-[#FF0006]/20 transition-all duration-500">
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

                  <div className="flex items-center gap-6 p-6 rounded-xl bg-black/20 backdrop-blur-sm border border-white/5 hover:border-[#FF0006]/20 transition-all duration-500">
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

                  <div className="flex items-center gap-6 p-6 rounded-xl bg-black/20 backdrop-blur-sm border border-white/5 hover:border-[#FF0006]/20 transition-all duration-500">
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

              {/* Enhanced Map Container */}
              <div className="w-full h-[400px] rounded-2xl overflow-hidden animate-fade-in delay-200 border border-[#FF0006]/20">
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
