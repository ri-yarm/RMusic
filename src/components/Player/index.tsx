import React, { useEffect, useState } from "react";
import CreateBusinessImg from "assets/images/BodyContent/BCAside/CreateBusiness.jpg";
import { styles } from "components/Player/index.styles.ts";
import PlayAuthor from "components/Player/PlayerAuthor";
import PlayerControl from "components/Player/PlayerControl";
import PlayerRange from "components/Player/PlayerRange";
import { Howl } from "howler";
import { RootMusicDir } from "lib/constants";
import { usePlayerStore } from "store/index.ts";

const Player = () => {
  const currentSong = usePlayerStore((state) => state.currentSong);

  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const setIsPlay = usePlayerStore((state) => state.setIsPlay);
  const setIsPause = usePlayerStore((state) => state.setIsPause);

  const [sound, setSound] = useState<Howl | null>(null);
  const [volume, setVolume] = useState<number>(0.8);
  const [progress, setProgress] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  useEffect(() => {
    const sound = new Howl({
      preload: true,
      autoplay: true,

      src: [`${RootMusicDir}${currentSong}`],
      html5: true,

      onplay: () => {
        setIsPlay();
      },
      onpause: () => {
        setIsPause();
      },
      onend: () => {
        setIsPause();
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
  }, [currentSong]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound && isPlaying) {
        setProgress(sound.seek() / sound.duration());
      }
    }, 150);

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
      if (!isMuted) {
        sound.volume(newVolume);
      }
    }
  };

  const handleMute = () => {
    if (sound) {
      const newMuteState = !isMuted;
      setIsMuted(newMuteState);
      if (newMuteState) {
        setVolume(0);
        sound.volume(0);
      } else {
        setVolume(0.8);
        sound.volume(0.8);
      }
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
    <ContainerSC haveMusic={!!currentSong}>
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
          volume={{
            value: volume,
            onChange: handleVolumeChange,
            handleMute: handleMute,
          }}
        />
      </InfoContainerSC>
    </ContainerSC>
  );
};

const { ContainerSC, ImgSC, InfoContainerSC } = styles;

export default React.memo(Player);
