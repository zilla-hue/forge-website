import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const HeroContent = () => {
  return (
    <div className="relative container mx-auto px-6 h-full flex items-center">
      <div className="max-w-3xl">
        <div className="overflow-hidden">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            <span className="block mb-2">Forge your</span>
            <span className="gradient-animate bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
              Brand&apos;s Future
            </span>
          </h1>
        </div>

        <p className="text-xl text-white mb-8 animate-fade-in delay-300">
          Crafting bold, innovative advertising solutions that drive results
        </p>

        <div className="flex gap-4 animate-fade-in delay-500">
          <Link to="/contact">
            <Button
              size="lg"
              className={cn(
                "group bg-primary text-white px-8 py-6 rounded-full",
                "hover:bg-primary/90 transition-all duration-300",
                "flex items-center gap-2"
              )}
            >
              <span>Start Your Journey</span>
              <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/work">
            <Button
              variant="outline"
              size="lg"
              className={cn(
                "px-8 py-6 rounded-full",
                "border-[#FF0006]/50 text-white",
                "hover:bg-[#FF0006]/10",
                "transition-all duration-300"
              )}
            >
              Our Work
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
