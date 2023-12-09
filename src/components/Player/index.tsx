import React, { useEffect, useState } from "react";
import CreateBusinessImg from "assets/images/BodyContent/BCAside/CreateBusiness.jpg";
import { styles } from "components/Player/index.styles.ts";
import PlayAuthor from "components/Player/PlayerAuthor";
import PlayerControl from "components/Player/PlayerControl";
import PlayerRange from "components/Player/PlayerRange";
import { Howl } from "howler";
import { RootMusicDir } from "lib/constants";
import { BDPlaylistMock } from "lib/mock/BodyContent/BDPlaylistMock.ts";
import { formatDuration } from "lib/services/formatedTime.ts";
import { usePlayerStore } from "store/index.ts";

const Player = () => {
  const currentSong = usePlayerStore((state) => state.currentSong);
  const setCurrentSong = usePlayerStore((state) => state.setSong);

  const isPlaying = usePlayerStore((state) => state.isPlaying);
  const setIsPlay = usePlayerStore((state) => state.setIsPlay);
  const setIsPause = usePlayerStore((state) => state.setIsPause);

  const playlist = BDPlaylistMock;

  const [sound, setSound] = useState<Howl | null>(null);
  const [volume, setVolume] = useState<number>(0.8);
  const [progress, setProgress] = useState<number>(0);
  const [duration, setDuration] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isRepeat, setIsRepeat] = useState<boolean>(false);

  useEffect(() => {
    const index = playlist.findIndex((song) => song.music === currentSong);

    if (index !== -1) {
      const sound = new Howl({
        preload: true,
        autoplay: true,
        src: [`${RootMusicDir}${currentSong}`],
        html5: true,

        onplay: () => {
          setIsPlay();
          const duration = formatDuration(sound.duration());
          setDuration(duration);
        },
        onpause: () => {
          setIsPause();
        },
        onend: () => {
          setIsPause();
          setProgress(0);

          // Если включен режим повтора, играйте снова ту же песню
          if (isRepeat) {
            sound.play();
          } else {
            // В противном случае воспроизводите следующую песню, если она доступна
            if (index < playlist.length - 1) {
              setCurrentSong(playlist[index + 1].music);
            }
          }
        },
        onseek: () => {
          setProgress(sound.seek());
        },
      });

      setSound(sound);

      return () => {
        sound.unload();
      };
    }
  }, [currentSong, playlist, setIsPlay, setIsPause]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound && isPlaying) {
        const currentTimeAudio = sound.seek();
        setProgress(currentTimeAudio / sound.duration());

        const formattedCurrentTime = formatDuration(currentTimeAudio);
        setCurrentTime(formattedCurrentTime);
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

  const playNextSong = () => {
    const index = playlist.findIndex((song) => song.music === currentSong);
    if (index !== -1 && index < playlist.length - 1) {
      setCurrentSong(playlist[index + 1].music);
    }
  };

  const playPreviousSong = () => {
    const index = playlist.findIndex((song) => song.music === currentSong);
    if (index > 0) {
      setCurrentSong(playlist[index - 1].music);
    }
  };

  const handleToggleRepeat = () => {
    setIsRepeat(!isRepeat);
  };

  return (
    <ContainerSC haveMusic={!!currentSong}>
      <ImgSC src={CreateBusinessImg} />
      <InfoContainerSC>
        <PlayAuthor />
        <PlayerControl
          isPlaying={isPlaying}
          isRepeat={isRepeat}
          handlePlayPause={handlePlayPause}
          handleStop={handleStop}
          handleNextSong={playNextSong}
          handlePrevSong={playPreviousSong}
          handleToggleRepeat={handleToggleRepeat}
        />
        <PlayerRange
          progress={{
            value: progress,
            onChange: handleProgressChange,
            duration: duration,
            currentTime: currentTime,
          }}
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
