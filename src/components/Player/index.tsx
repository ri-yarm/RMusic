import React, { useEffect, useState } from "react";
import CreateBusinessImg from "assets/images/BodyContent/BCAside/CreateBusiness.jpg";
import { styles } from "components/Player/index.styles.ts";
import PlayAuthor from "components/Player/PlayerAuthor";
import PlayerControl from "components/Player/PlayerControl";
import PlayerRange from "components/Player/PlayerRange";
import { Howl } from "howler";

const Player = () => {
  const [sound, setSound] = useState<Howl | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.8);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const sound = new Howl({
      src: ["/music/Серёга - Черный бумер.mp3"],
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
      setProgress(0);
      sound.play();
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (sound) {
      sound.volume(newVolume);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = parseFloat(e.target.value);
    setProgress(newProgress);
    if (sound) {
      sound.seek(newProgress * sound.duration());
    }
  };

  return (
    <ContainerSC>
      <ImgSC src={CreateBusinessImg} />
      <InfoContainerSC>
        <PlayAuthor />
        <PlayerControl
          isPlaying={isPlaying}
          handlePlayPause={handlePlayPause}
          handleStop={handleStop}
        />
        <PlayerRange
          progress={{ value: progress, onChange: handleProgressChange }}
          volume={{ value: volume, onChange: handleVolumeChange }}
        />
      </InfoContainerSC>
    </ContainerSC>
  );
};

const { ContainerSC, ImgSC, InfoContainerSC } = styles;

export default React.memo(Player);
