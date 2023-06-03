import React from 'react';
import {FaWhatsappSquare} from 'react-icons/fa'

function Card({ src}) {
  const shareToWhatsApp = () => {
    const encodedUrl = encodeURIComponent(src);
    const whatsappUrl = `whatsapp://send?text=${encodedUrl}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className='flex w-[200px] relative '>
      <img src={src} alt="img" className='w-full' />
      <button className='absolute bottom-0 right-0' onClick={shareToWhatsApp}><FaWhatsappSquare size={32} color="#4FCE5D"/></button>
    </div>
  );
}

export default Card;
