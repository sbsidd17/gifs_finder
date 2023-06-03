import React from 'react';
import {FaShareSquare} from 'react-icons/fa';

function ShareButton() {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'Share GIF',
        url: 'https://example.com/my-gif.gif',
      });
      console.log('Shared successfully');
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <button className='absolute bottom-0 right-0' onClick={handleShare}> <FaShareSquare size={32} color="#4FCE5D" /> </button>
  );
}

export default ShareButton;
