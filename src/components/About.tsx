import React from "react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSmoothTransition } from "@/hooks/useSmoothTransition";
import { ParallaxCard } from "./ParallaxCard";

const AboutCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <ParallaxCard className="group bg-[#FF0006]/10 text-white h-full transition-all duration-300 hover:bg-[#FF0006]/20">
      <CardHeader>
        <CardTitle className="text-xl font-semibold group-hover:scale-105 transition-transform duration-300">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="group-hover:opacity-90 transition-opacity duration-300">
          {children}
        </p>
      </CardContent>
    </ParallaxCard>
  );
};

export default function About() {
  const aboutRef = useSmoothTransition();

  return (
    <section
      ref={aboutRef}
      id="about"
      className="relative bg-[#171717] py-20 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#FF0006]/5 via-transparent to-transparent opacity-50" />
      <div className="container relative mx-auto px-4">
        <h2 className="mb-4 text-center text-5xl font-bold bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
          Where Creativity Meets Impact
        </h2>
        <p className="mb-12 text-center text-lg text-gray-300 max-w-2xl mx-auto">
          We are Forge: a dynamic advertising agency built to reshape the media
          landscape. Our mission is simple—inspire innovation and drive enduring
          impact through powerful narratives.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              With a team of passionate creatives, strategists, and
              storytellers, we specialize in turning visions into reality. From
              cutting-edge digital campaigns to transformative brand strategies,
              we empower businesses to stand out, connect deeply, and thrive in
              competitive markets.
            </p>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <h3 className="mb-4 text-2xl font-semibold text-[#FF0006]">
                Our Mission
              </h3>
              <p className="text-lg text-gray-300">
                To inspire creativity and innovation worldwide, reshaping the
                media landscape with powerful narratives and cutting-edge
                advertising solutions that drive enduring impact across diverse
                markets.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <h3 className="mb-4 text-2xl font-semibold text-[#FF0006]">
                Our Vision
              </h3>
              <p className="text-lg text-gray-300">
                To create meaningful and lasting connections by delivering
                transformative ideas, pioneering advertising, and strategic
                communications that resonate globally.
              </p>
            </div>
            <p className="text-lg leading-relaxed">
              Every project we undertake is an opportunity to push boundaries,
              challenge conventions, and create something truly remarkable. We
              believe in the power of bold ideas and the impact they can have on
              shaping the future of brands.
            </p>
          </div>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <AboutCard title="Focus">
            Precision-driven strategies that hit your goals, ensuring every
            campaign delivers measurable results and lasting impact.
          </AboutCard>
          <AboutCard title="Creativity">
            Bold ideas that break the mold, pushing boundaries to create unique
            and memorable brand experiences that captivate audiences.
          </AboutCard>
          <AboutCard title="Collaboration">
            Your vision + our expertise = unstoppable results. We work closely
            with clients to transform ideas into powerful realities.
          </AboutCard>
          <AboutCard title="Excellence">
            Every pixel, word, and second crafted to perfection, maintaining the
            highest standards in everything we deliver.
          </AboutCard>
        </div>
      </div>
    </section>
  );
}
