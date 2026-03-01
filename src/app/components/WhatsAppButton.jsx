'use client'
import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '573013415322'; // Cambia este número por el tuyo (formato: código de país + número)

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank'); // Abre en una nueva pestaña
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="w-36 rounded-full border border-[var(--line)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink)] transition hover:border-[#25D366] hover:text-[#25D366] focus:outline-none focus:ring-2 focus:ring-[#25D366]/40"
    >
      WhatsApp
    </button>
  );
};

export default WhatsAppButton;
