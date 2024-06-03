import React, { useRef } from 'react';

const AudioPlayer = ({ src, title, onPlay }) => {
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (onPlay) onPlay(audioRef.current);
  };

  return (
    <div className="audio-player">
      <h4>{title}</h4>
      <audio controls ref={audioRef} onPlay={handlePlay}>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
