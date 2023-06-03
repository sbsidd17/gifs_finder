import React from 'react';
import ShareButton from './ShareButton';

function Card({ src}) {

  return (
    <div className='flex w-[200px] relative '>
      <img src={src} alt="img" className='w-full' />
      {/* <button className='absolute bottom-0 right-0' onClick={shareToWhatsApp}><FaWhatsappSquare size={32} color="#4FCE5D"/></button> */}
      <ShareButton />
    </div>
  );
}

export default Card;
