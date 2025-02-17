import React from "react";
import { ParallaxCard } from "./ParallaxCard";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useSmoothTransition } from "../hooks/useSmoothTransition";
import { BarChart2, Globe2, Rocket, Target } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <ParallaxCard className="group bg-black/20 backdrop-blur-sm border border-[#FF0006]/20 hover:border-[#FF0006]/40 transition-all duration-500 rounded-2xl">
      <CardHeader className="flex flex-row items-center gap-6 p-8">
        <div className="p-4 rounded-xl bg-[#FF0006]/10 text-[#FF0006] group-hover:bg-[#FF0006]/20 transition-all duration-300">
          {icon}
        </div>
        <CardTitle className="text-2xl font-bold text-white group-hover:text-[#FF0006] transition-colors duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="px-8 pb-8">
        <p className="text-lg text-secondary-light/90 group-hover:text-white transition-colors duration-300 leading-relaxed">
          {description}
        </p>
      </CardContent>
    </ParallaxCard>
  );
};

const features = [
  {
    title: "Data-Driven Creativity",
    description:
      "Where analytics meet artistry. We combine data insights with creative excellence to deliver campaigns that resonate and perform.",
    icon: <BarChart2 className="w-6 h-6" />,
  },
  {
    title: "End-to-End Solutions",
    description:
      "From concept to campaign, we handle it all. Our comprehensive approach ensures seamless execution and consistent quality.",
    icon: <Rocket className="w-6 h-6" />,
  },
  {
    title: "Global Vision, Local Precision",
    description:
      "Resonate with audiences everywhere. We craft messages that transcend borders while maintaining local relevance and impact.",
    icon: <Globe2 className="w-6 h-6" />,
  },
  {
    title: "Results That Matter",
    description:
      "We measure success by your growth. Our strategies are designed to deliver tangible outcomes and sustainable business impact.",
    icon: <Target className="w-6 h-6" />,
  },
];

export default function WhyForge() {
  const sectionRef = useSmoothTransition();

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#171717] py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF0006]/10 via-transparent to-transparent opacity-50" />
      <div className="container relative mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
            The Forge Difference
          </h2>
          <p className="text-xl text-secondary-light/90 max-w-3xl mx-auto leading-relaxed">
            Experience the power of strategic creativity and data-driven
            innovation that sets us apart in the industry.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>

        <div className="text-center">
          <Link to="/about">
            <Button
              size="lg"
              className="bg-[#FF0006] text-white hover:bg-[#FF0006]/90 transition-all duration-300 text-lg h-14 px-10 rounded-xl hover:scale-105"
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
