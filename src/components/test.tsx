// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useState } from "react";
import { Howl } from "howler";

const AudioPlayerTest = () => {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sound = new Howl({
      src: ["/russia.mp3"],
      html5: true,
      onplay: () => {
        setIsPlaying(true);
      },
      onpause: () => {
        setIsPlaying(false);
      },
      onend: () => {
        setIsPlaying(false);
        setProgress(0);
      },
      onseek: () => {
        setProgress(sound.seek() / sound.duration());
      },
    });

    setSound(sound);

    return () => {
      sound.unload();
    };
  }, []);

  useEffect(() => {
    // Обновляем ползунок каждые 100 миллисекунд
    const interval = setInterval(() => {
      if (sound && isPlaying) {
        setProgress(sound.seek() / sound.duration());
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [sound, isPlaying]);

  const handlePlayPause = () => {
    if (sound) {
      if (isPlaying) {
        sound.pause();
      } else {
        sound.play();
      }
    }
  };

  const handleStop = () => {
    if (sound) {
      sound.stop();
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (sound) {
      sound.volume(newVolume);
    }
  };

  const handleProgressChange = (e) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    if (sound) {
      sound.seek(newProgress * sound.duration());
    }
  };

  return (
    <div>
      <button onClick={handlePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
      <button onClick={handleStop}>Stop</button>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={handleVolumeChange}
      />
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={progress}
        onChange={handleProgressChange}
      />
      <div>Прогресс: {Math.round(progress * 100)}%</div>
    </div>
  );
};

export default React.memo(AudioPlayerTest);
