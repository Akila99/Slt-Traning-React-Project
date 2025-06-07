import React, { useEffect, useState } from "react";
import "../public/style.css";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-content">
        {props.columns.map((columm, idx) => (
          <div className="footer-columns" key={idx}>
            <p>{columm.title}</p>
            {columm.links.map((link, i) => (
              <a key={i} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      {/* Dynamic Social Icons */}
      <div className="social-icons">
        {props.socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            // target="_blank"
            // rel="noopener noreferrer"
          >
            {social.svg}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
