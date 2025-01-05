import forgeLogo from '/assets/forge-logo.png';

const FooterInfo = () => {
  return (
    <div className="mb-4 w-full md:w-1/3">
      <div className="h-14 mb-4">
        <img 
          src={forgeLogo}
          alt="Forge" 
          className="h-full"
        />
      </div>
      <p>Crafting bold, innovative advertising solutions that drive results.</p>
    </div>
  );
};

export default FooterInfo;