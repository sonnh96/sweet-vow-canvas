import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Using a royalty-free wedding music placeholder URL
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full gold-gradient flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 text-primary-foreground" />
      ) : (
        <VolumeX className="w-5 h-5 text-primary-foreground" />
      )}
    </button>
  );
};

export default MusicPlayer;
