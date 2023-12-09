import create from "zustand";

export interface InfoSong {
  title: string;
  author: string;
  img: string;
}

type PlayerState = {
  currentSong: string | null;
  info: InfoSong;
  setSong: (song: string, info: InfoSong) => void;

  isPlaying: boolean;
  setIsPlay: () => void;
  setIsPause: () => void;
};

export const usePlayerStore = create<PlayerState>((set) => ({
  currentSong: null,
  info: {
    title: "",
    author: "",
    img: "",
  },
  setSong: (song, info) => set({ currentSong: song, info: info }),

  isPlaying: false,
  setIsPlay: () => set({ isPlaying: true }),
  setIsPause: () => set({ isPlaying: false }),
}));
