import React from 'react';

function Card({ src}) {

  return (
    <div className='flex w-[200px]'>
        <img src={src} alt="img" className='w-full'/>
    </div>
  );
}

export default Card;
