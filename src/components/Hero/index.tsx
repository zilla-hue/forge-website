import HeroContent from './HeroContent';
import HeroBackground from './HeroBackground';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <HeroBackground />
      <HeroContent />
    </div>
  );
};

export default Hero;
