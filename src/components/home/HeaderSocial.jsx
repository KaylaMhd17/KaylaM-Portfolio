import React from 'react';
import { FaInstagram, FaGithub, FaSquareXTwitter, FaRegEnvelope } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa"; // ✅ import WhatsApp dari fa biasa
import "./home.css";

const HeaderSocials = () => {
  return (
    <div className="home_socials">
      <a 
        href="https://github.com/KaylaMhd17/mygame" 
        className="home_social-link" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>

      <a 
        href="https://www.instagram.com/kaylaa_975?igsh=em53cGdmYWppeWI4" 
        className="home_social-link" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>

      <a 
        href="kaylamashudini17@gmail.com" 
        className="home_social-link" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaRegEnvelope />
      </a>

      <a 
        href="Https://wa.me/6285890377455" // ✅ ganti nomor WA kamu (pakai format internasional tanpa +)
        className="home_social-link" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default HeaderSocials;
