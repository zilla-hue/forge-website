import forgeVideo from "/assets/videos/forge-hero-1.mp4";

const HeroBackground = () => {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={forgeVideo} type="video/mp4" />
      </video>

      {/* Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-secondary/30 to-primary/30 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary bg-opacity-60" />
    </>
  );
};

export default HeroBackground;
