import React from 'react';

const FooterCopyright = () => {
  return (
    <div className="mt-8 border-t border-white/20 pt-4 text-center">
      <p>&copy; {new Date().getFullYear()} Forge. All rights reserved. RC: 8028370</p>
    </div>
  );
};

export default FooterCopyright;