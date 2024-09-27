'use client'
import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '573125225009'; // Cambia este número por el tuyo (formato: código de país + número)

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank'); // Abre en una nueva pestaña
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="px-4 py-2 font-bold text-white bg-green-500 w-36 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
    >
      WhatsApp
    </button>
  );
};

export default WhatsAppButton;
