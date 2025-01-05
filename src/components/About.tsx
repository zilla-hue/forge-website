import React from 'react';
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSmoothTransition } from '@/hooks/useSmoothTransition';
import { ParallaxCard } from './ParallaxCard';

const AboutCard = ({ title, children }: { title: string; children: React.ReactNode }) => {
  

  return (
    <ParallaxCard 
      className="bg-[#FF0006]/10 text-white h-full"
    
    >
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{children}</p>
      </CardContent>
    </ParallaxCard>
  );
};

export default function About() {
  const aboutRef = useSmoothTransition();

  return (
    <section ref={aboutRef} id="about" className="bg-[#171717] py-20 text-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">About Forge</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-lg">
              At Forge, we specialize in crafting bold, innovative advertising solutions that drive results. Our agency thrives on creativity, strategy, and collaboration to help brands forge meaningful connections with their audience.
            </p>
            <p className="mb-4 text-lg">
              Whether it is through cutting-edge digital campaigns, impactful branding, or engaging content, we deliver tailored strategies that empower businesses to stand out in today's competitive market.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-semibold">Our Mission</h3>
            <p className="mb-6 text-lg">
              To inspire creativity and innovation worldwide, reshaping the media landscape with powerful narratives and cutting-edge advertising solutions that drive enduring impact across diverse markets.
            </p>
            <h3 className="mb-4 text-2xl font-semibold">Our Vision</h3>
            <p className="text-lg">
              To create meaningful and lasting connections by delivering transformative ideas, pioneering advertising, and strategic communications that resonate globally.
            </p>
          </div>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {["Focus", "Creativity", "Excellence", "Collaboration"].map((value) => (
            <AboutCard key={value} title={value}>
              Our core value of {value.toLowerCase()} guides our work and ensures we deliver the best results for our clients.
            </AboutCard>
          ))}
        </div>
      </div>
    </section>
  );
}