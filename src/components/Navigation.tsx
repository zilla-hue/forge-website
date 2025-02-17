import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import forgeLogo from "/assets/forge-logo.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Services", path: "/services/:serviceId" },
    { label: "About", path: "/about" },
    { label: "Work", path: "/work" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-black/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="h-16 transform hover:scale-105 transition-transform duration-300">
            <img src={forgeLogo} alt="Forge" className="h-full" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="text-lg text-white hover:text-[#FF0006] transition-colors duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-[#FF0006] transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden transition-all duration-500 overflow-hidden",
            isMenuOpen ? "max-h-screen opacity-100 mt-6" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-6 space-y-6 border-t border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="block text-lg text-white hover:text-[#FF0006] transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
