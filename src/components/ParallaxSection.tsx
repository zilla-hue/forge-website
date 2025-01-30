import { useEffect, useRef } from "react";
import { useMouseParallax } from "../hooks/useMouseParallax";
import { ParallaxCard } from "./ParallaxCard";
import { Link } from "react-router-dom";

const ParallaxSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMouseParallax(0.03);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrolled = window.scrollY;
      const rate = scrolled * 0.5;
      sectionRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-[#171717] text-white">
      <div
        ref={sectionRef}
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: "url('/images/forge-brand.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
        }}
      />

      <div className="relative container mx-auto px-6 h-full flex items-center justify-center">
        <ParallaxCard className="bg-[#171717]/80 backdrop-blur-sm border border-[#FF0006]/20 p-12 rounded-2xl max-w-3xl w-full transform-gpu hover:border-[#FF0006]/40 transition-all duration-500">
          <div className="text-center">
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#FF0006] to-white bg-clip-text text-transparent">
              Transform Your Vision Into Reality
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Ready to elevate your brand? Join industry leaders who trust Forge
              to deliver exceptional creative solutions that drive real business
              growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <button className="px-8 py-4 bg-[#FF0006] text-white rounded-lg font-medium hover:bg-[#FF0006]/90 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  Start Your Project
                </button>
              </Link>
              <Link to="/work">
                <button className="px-8 py-4 border border-[#FF0006]/50 text-white rounded-lg font-medium hover:bg-[#FF0006]/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  View Our Work
                </button>
              </Link>
            </div>
          </div>
        </ParallaxCard>
      </div>
    </section>
  );
};

export default ParallaxSection;
