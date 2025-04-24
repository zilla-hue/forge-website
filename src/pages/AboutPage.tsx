import { ParallaxCard } from "@/components/ParallaxCard";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-secondary">
      {/* Hero Section - improved spacing and animation */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-8 animate-fade-in bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-secondary-light/90 mb-8 animate-fade-in delay-200 leading-relaxed">
              Pioneering advertising excellence through strategic communications and creative innovation.
            </p>
          </div>
        </div>

        {/* Add subtle background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FF0006] via-transparent to-transparent" />
      </section>

      {/* Mission & Values Section - improved card design */}
      <section className="py-24 bg-[#171717]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12 animate-fade-in">
              <div className="p-8 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/5 hover:border-[#FF0006]/20 transition-all duration-500">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-secondary-light/90 leading-relaxed">
                  To inspire creativity and innovation worldwide, reshaping the
                  media landscape with powerful narratives and cutting-edge
                  advertising solutions that drive enduring impact across
                  diverse markets.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/5 hover:border-[#FF0006]/20 transition-all duration-500">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our Vision
                </h2>
                <p className="text-lg text-secondary-light/90 leading-relaxed">
                  To create meaningful and lasting connections by delivering
                  transformative ideas, pioneering advertising, and strategic
                  communications that resonate globally.
                </p>
              </div>
            </div>

            {/* Enhanced Core Values card */}
            <ParallaxCard className="p-10 bg-black/20 backdrop-blur-sm border border-[#FF0006]/20 hover:border-[#FF0006]/40 transition-all duration-500 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Core Values
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#FF0006]/10">
                    <div className="w-10 h-10 flex items-center justify-center text-[#FF0006] font-bold">
                      01
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Focus
                    </h4>
                    <p className="text-secondary-light/80">
                      Emphasizing the importance of clear goals and direction in
                      advertising strategies, we are driven and attentive,
                      ensuring that each project receives our full commitment to
                      meet our clients&apos; goals with precision.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#FF0006]/10">
                    <div className="w-10 h-10 flex items-center justify-center text-[#FF0006] font-bold">
                      02
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Creativity
                    </h4>
                    <p className="text-secondary-light/80">
                      Our team thrives on original ideas, embracing change, and
                      bringing fresh perspectives that set our clients apart in
                      a fast evolving and crowded media landscape.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#FF0006]/10">
                    <div className="w-10 h-10 flex items-center justify-center text-[#FF0006] font-bold">
                      03
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Collaboration
                    </h4>
                    <p className="text-secondary-light/80">
                      Working in unison, we foster a collaborative environment
                      that values each team member&apos;s input, harmony of
                      ideas, and handshake with other dealers and stakeholders
                      in the industry.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#FF0006]/10">
                    <div className="w-10 h-10 flex items-center justify-center text-[#FF0006] font-bold">
                      04
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Excellence
                    </h4>
                    <p className="text-secondary-light/80">
                      We aim for the highest quality in everything we do,
                      upholding standards that reflect our dedication to a
                      collective success.
                    </p>
                  </div>
                </div>
              </div>
            </ParallaxCard>
          </div>
        </div>
      </section>

      {/* Team Section - improved card design */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-white via-red-200 to-white bg-clip-text text-transparent">
            Meet Our Team
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <ParallaxCard
                key={index}
                className="p-8 bg-black/20 backdrop-blur-sm border border-[#FF0006]/20 hover:border-[#FF0006]/40 transition-all duration-500 rounded-2xl group"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-8 border-2 border-[#FF0006]/20 group-hover:border-[#FF0006]/40 transition-all duration-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {member.name}
                </h3>
                <p className="text-[#FF0006] text-lg mb-4">{member.role}</p>
              </ParallaxCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

const teamMembers = [
  {
    name: "Godwin Olowosagba (ARPA)",
    role: "MD/CEO",
    bio: "10+ years of experience in digital design and brand strategy.",
    image: "/images/_J5A2528 (1).jpg",
  },
  {
    name: "Dr. Fatima Zara Abubakar",
    role: "Director",
    bio: "Expert in web development and emerging technologies.",
    image: "/images/fatima-zara-abubakar.jpg",
  },
  {
    name: "Ebenezer Olowosagba",
    role: "Creative Director",
    bio: "Specialized in data-driven marketing campaigns.",
    image: "/images/ebenezer-olowosagba.jpg",
  },
  {
    name: "David Daberechi Amah",
    role: "Copywriting/Business Intelligence",
    bio: "Passionate about creating intuitive user experiences.",
    image: "/images/david-daberechi-amah.png",
  },
  {
    name: "Felix Jimmy",
    role: "Public Relations/Marketing Strategist",
    bio: "Crafting compelling narratives that engage and convert.",
    image: "/images/felix-jimmy.jpg",
  },
  {
    name: "Charles Barnabas",
    role: "Sales/Marketing Strategist",
    bio: "Ensuring seamless execution of client projects.",
    image: "/images/charles-barnabas.jpg",
  },
  {
    name: "Charles Benjamin",
    role: "Sales/Marketing Strategist",
    bio: "Ensuring seamless execution of client projects.",
    image: "/images/charles-benjamin.jpg",
  },
  {
    name: "Itodo Josephine Fatu",
    role: "Sales/Marketing Strategist",
    bio: "Ensuring seamless execution of client projects.",
    image: "/images/itodo-josephine-fatu.jpg",
  },
  {
    name: "Uchenna Nwaokeke",
    role: "Sales/Marketing Strategist",
    bio: "Ensuring seamless execution of client projects.",
    image: "/images/uchenna-nwaokeke.jpg",
  },
];

export default AboutPage;
