import { ParallaxCard } from "@/components/ParallaxCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, CheckCircle } from "lucide-react";
import { serviceCategories } from "../components/Services/serviceData";
import React from "react";

const ServicesPage = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle hash changes
  React.useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      scrollToSection(hash);
    }
  }, []);

  return (
    <main className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
              Transform Your Brand
            </h2>
            <p className="text-xl text-secondary-light/80 mb-8 animate-fade-in delay-200">
              Comprehensive digital solutions tailored to your unique business
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Service Categories */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-6">
          {serviceCategories.map(
            (
              category: {
                title: string;
                description: string;
                services: string[];
              },
              index: number
            ) => (
              <div
                key={index}
                id={category.title.toLowerCase().replace(/ /g, "-")}
                className="mb-16 last:mb-0"
              >
                <div className="flex flex-col md:flex-row items-center mb-8">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {category.title}
                    </h3>
                    <p className="text-secondary-light/80 mb-6">
                      {category.description}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {category.services.map((service, idx) => (
                        <li key={idx} className="flex items-center text-white">
                          <CheckCircle
                            className="text-[#FF0006] mr-2"
                            size={16}
                          />
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <img
                      src={`/images/${category.title
                        .toLowerCase()
                        .replace(/ /g, "-")}.png`}
                      alt={category.title}
                      className="rounded-lg shadow-lg w-full h-auto"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/Forge-media.png";
                      }}
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* Additional Services Info */}
      <section className="py-20 bg-[#171717]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <ParallaxCard className="p-8 bg-white/5 backdrop-blur-sm border border-[#FF0006]/20 hover:border-[#FF0006]/40 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-4">
                Custom Solutions
              </h3>
              <p className="text-secondary-light/80 mb-6">
                Need something specific? We create tailored solutions that
                perfectly align with your business objectives and market
                requirements.
              </p>
              <Button
                className="group bg-[#FF0006] hover:bg-[#FF0006]/90 text-white"
                size="lg"
              >
                <span>Get Custom Quote</span>
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            </ParallaxCard>

            <ParallaxCard className="p-8 bg-white/5 backdrop-blur-sm border border-[#FF0006]/20 hover:border-[#FF0006]/40 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Talk</h3>
              <p className="text-secondary-light/80 mb-6">
                Have questions about our services? Our team is here to help you
                find the perfect solution for your business needs.
              </p>
              <Button
                className="group bg-transparent border border-[#FF0006] text-white hover:bg-[#FF0006]/10"
                size="lg"
              >
                <Mail className="mr-2 h-5 w-5" />
                <span>Contact Us</span>
              </Button>
            </ParallaxCard>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-lg">
                <p className="text-secondary-light/80 mb-4">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean euismod bibendum laoreet."
                </p>
                <div className="flex items-center">
                  <img
                    src={`/placeholder.svg?height=50&width=50`}
                    alt="Client"
                    className="rounded-full mr-4 w-[50px] h-[50px]"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-bold text-white">John Doe</p>
                    <p className="text-secondary-light/60">CEO, Company Inc.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
