import { ParallaxCard } from "@/components/ParallaxCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
              Our Story
            </h1>
            <p className="text-xl text-secondary-light/80 mb-8 animate-fade-in delay-200">
              Crafting digital excellence through innovation and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-[#171717]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-secondary-light/80 leading-relaxed">
                  To empower businesses with innovative digital solutions that
                  drive growth, enhance brand visibility, and create meaningful
                  connections with their audience.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Our Vision
                </h2>
                <p className="text-secondary-light/80 leading-relaxed">
                  To be the leading force in digital transformation, setting new
                  standards for creativity, technology, and results-driven
                  solutions.
                </p>
              </div>
            </div>

            <ParallaxCard className="p-8 bg-white/5 backdrop-blur-sm border border-[#FF0006]/20 hover:border-[#FF0006]/40 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6">
                Core Values
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-[#FF0006]/10">
                    <div className="w-8 h-8 flex items-center justify-center text-[#FF0006]">
                      01
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Innovation First
                    </h4>
                    <p className="text-secondary-light/80">
                      Pushing boundaries and embracing new technologies
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-[#FF0006]/10">
                    <div className="w-8 h-8 flex items-center justify-center text-[#FF0006]">
                      02
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Client Success
                    </h4>
                    <p className="text-secondary-light/80">
                      Dedicated to achieving exceptional results
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-[#FF0006]/10">
                    <div className="w-8 h-8 flex items-center justify-center text-[#FF0006]">
                      03
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Quality Craftsmanship
                    </h4>
                    <p className="text-secondary-light/80">
                      Attention to detail in every project
                    </p>
                  </div>
                </div>
              </div>
            </ParallaxCard>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
            Meet Our Team
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <ParallaxCard
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border border-[#FF0006]/20 hover:border-[#FF0006]/40 transition-all duration-500"
              >
                <div className="aspect-square rounded-full overflow-hidden mb-6 border-2 border-[#FF0006]/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-[#FF0006] mb-4">{member.role}</p>
                <p className="text-secondary-light/80">{member.bio}</p>
              </ParallaxCard>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <Button
              size="lg"
              className="group bg-[#FF0006] hover:bg-[#FF0006]/90 text-white px-8 py-6 rounded-full"
            >
              <span>Join Our Team</span>
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </div> */}
        </div>
      </section>
    </main>
  );
};

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Creative Director",
    bio: "10+ years of experience in digital design and brand strategy.",
    image: "/images/team/sarah.jpg",
  },
  {
    name: "Michael Chen",
    role: "Technical Lead",
    bio: "Expert in web development and emerging technologies.",
    image: "/images/team/michael.jpg",
  },
  {
    name: "Emma Williams",
    role: "Marketing Strategist",
    bio: "Specialized in data-driven marketing campaigns.",
    image: "/images/team/emma.jpg",
  },
  {
    name: "David Kim",
    role: "UX Designer",
    bio: "Passionate about creating intuitive user experiences.",
    image: "/images/team/david.jpg",
  },
  {
    name: "Lisa Martinez",
    role: "Content Director",
    bio: "Crafting compelling narratives that engage and convert.",
    image: "/images/team/lisa.jpg",
  },
  {
    name: "James Wilson",
    role: "Project Manager",
    bio: "Ensuring seamless execution of client projects.",
    image: "/images/team/james.jpg",
  },
];

export default AboutPage;
