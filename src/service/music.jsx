import React from 'react';

function MusicPlayer() {
  return (
    <div>
      <audio autoPlay>
        <source src="https://www.youtube.com/watch?v=rWIPn3x31aM&t=2045s&ab_channel=Hozho" type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default MusicPlayer;
