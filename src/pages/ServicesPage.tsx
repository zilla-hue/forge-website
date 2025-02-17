import { ParallaxCard } from "@/components/ParallaxCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, CheckCircle } from "lucide-react";
import { serviceCategories } from "../components/Services/serviceData";
import React from "react";
import { Link } from "react-router-dom";

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
      {/* Enhanced Hero Section */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 animate-fade-in bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
              Transform Your Brand
            </h2>
            <p className="text-xl md:text-2xl text-secondary-light/90 mb-8 animate-fade-in delay-200 leading-relaxed">
              Comprehensive digital solutions tailored to your unique business
              needs.
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF0006] via-transparent to-transparent" />
      </section>

      {/* Enhanced Service Categories */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="container mx-auto px-6">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              id={category.title.toLowerCase().replace(/ /g, "-")}
              className="mb-24 last:mb-0 scroll-mt-24"
            >
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <h3 className="text-4xl font-bold text-white mb-6">
                    {category.title}
                  </h3>
                  <p className="text-lg text-secondary-light/90 mb-8 leading-relaxed">
                    {category.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {category.services.map((service, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-white text-lg"
                      >
                        <CheckCircle className="text-[#FF0006] mr-3 h-5 w-5" />
                        <span className="leading-relaxed">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-1/2">
                  <div className="rounded-2xl overflow-hidden border border-[#FF0006]/20 shadow-lg shadow-[#FF0006]/5">
                    <img
                      src={`/images/${category.title
                        .toLowerCase()
                        .replace(/ /g, "-")}.png`}
                      alt={category.title}
                      className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/images/Forge-media.png";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
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
              <Link to="/contact">
                <Button
                  className="group bg-[#FF0006] hover:bg-[#FF0006]/90 text-white"
                  size="lg"
                >
                  <span>Get Custom Quote</span>
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </ParallaxCard>

            <ParallaxCard className="p-8 bg-white/5 backdrop-blur-sm border border-[#FF0006]/20 hover:border-[#FF0006]/40 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Talk</h3>
              <p className="text-secondary-light/80 mb-6">
                Have questions about our services? Our team is here to help you
                find the perfect solution for your business needs.
              </p>
              <Link to="/contact">
                <Button
                  className="group bg-transparent border border-[#FF0006] text-white hover:bg-[#FF0006]/10"
                  size="lg"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  <span>Contact Us</span>
                </Button>
              </Link>
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
