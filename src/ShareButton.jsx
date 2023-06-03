import React from 'react';
import {FaShareSquare} from 'react-icons/fa';

function ShareButton({url}) {
  const handleShare = () => {
    const imageUrl = url;

    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const file = new File([blob], 'my-gif.gif', { type: 'image/gif' });
        const filesArray = [file];

        if (navigator.canShare && navigator.canShare({ files: filesArray })) {
          navigator.share({
            files: filesArray,
          })
            .then(() => console.log('Shared successfully'))
            .catch((error) => console.error('Error sharing:', error));
        } else {
          console.error('Sharing files is not supported');
        }
      })
      .catch((error) => {
        console.error('Error fetching GIF:', error);
      });
  };

  return <button className='absolute bottom-0 right-0' onClick={handleShare}> <FaShareSquare size={32} color="#4FCE5D" /> </button>
}

export default ShareButton;
