import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { serviceCategories } from "./serviceData";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="mb-4 text-center text-5xl font-bold bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
            Full-Scale Advertising Solutions
          </h2>
          <p className="text-lg text-secondary-light/80">
            Comprehensive media and marketing solutions to help your brand stand
            out in today's competitive landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300
                       transform hover:-translate-y-1 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {category.icon && (
                <div className="text-[#FF0006] mb-4 transition-all">
                  <category.icon
                    size={40}
                    className="group-hover:[transform:rotateY(360deg)] transition-transform duration-500"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                {category.title}
              </h3>
              <p className="text-secondary-light/80 text-sm leading-relaxed mb-4">
                {category.description}
              </p>
              <Button
                variant="link"
                className="text-[#FF0006] hover:text-[#FF0006]/80 p-0 h-auto font-semibold"
                onClick={() =>
                  (window.location.href = `/services/:serviceId#${category.title
                    .toLowerCase()
                    .replace(/ /g, "-")}`)
                }
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
