// my-app/app/components/VideoBackground.tsx

'use client';
import React from 'react';

// अपनी वीडियो फ़ाइल का पाथ यहाँ डालें
const VIDEO_SRC = '/videos/background.mp4'; 

const VideoBackground: React.FC = () => {
  const videoStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1, // UI के पीछे भेजने के लिए
    objectFit: 'cover',
    filter: 'brightness(0.5) blur(2px)', // Optional
  };

  return (
    <video 
      style={videoStyle} 
      autoPlay 
      loop 
      muted 
      playsInline
    >
      <source src={VIDEO_SRC} type="video/mp4" />
    </video>
  );
};

export default VideoBackground;