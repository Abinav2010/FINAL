import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  const [songs, setSongs] = useState([
    {
      title: 'Song 1',
      artist: 'Artist 1',
      src: '/music/song1.mp3'
    },
    {
      title: 'Song 2',
      artist: 'Artist 2',
      src: '/music/song2.mp3'
    },
    {
      title: 'Song 3',
      artist: 'Artist 3',
      src: '/music/song3.mp3'
    }
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayPauseClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNextButtonClick = () => {
    const newIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(newIndex);
    setIsPlaying(true);
  };

  return (
    <div className="App">
      <div className="player">
        <div className="song-info">
          <h2>{songs[currentSongIndex].title}</h2>
          <h3>{songs[currentSongIndex].artist}</h3>
        </div>
        <div className="buttons">
          <button onClick={handlePlayPauseClick}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button onClick={handleNextButtonClick}>Next</button>
        </div>
      </div>
      <audio ref={audioRef} src={songs[currentSongIndex].src} />
    </div>
  );
}

export default App;