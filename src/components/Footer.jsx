import React, { useState } from "react";

const Footer = () => {
  const [bgStyle] = useState({ backgroundColor: "#f5f5f5" });

  return (
    <footer style={bgStyle} className="mt-auto py-3 text-center">
      <p>
        <small className="text-muted">
          {" "}
           - Coded by Miriam Said - 
        </small>
      </p>
    </footer>
  );
};

export default Footer;
