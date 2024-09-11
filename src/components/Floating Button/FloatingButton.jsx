import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import '../Floating Button/FloatingButton.css';

const FloatingButtons = () => {
  const phoneNumber = '+919717556727';

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
    console.log('Calling action');
  };

  const handleWhatsappClick = () => {
    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
    console.log('WhatsApp action');
  };

  return (
    <div className="floating-buttons">
      <div className="floating-button call-button" onClick={handleCallClick}>
        <FaPhoneAlt size={20} />
      </div>
      <div className="floating-button whatsapp-button" onClick={handleWhatsappClick}>
        <FaWhatsapp size={30} />
      </div>
    </div>
  );
};

export default FloatingButtons;
