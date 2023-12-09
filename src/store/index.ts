import create from "zustand";

type PlayerState = {
  currentSong: string | null;
  setSong: (song: string) => void;

  isPlaying: boolean;
  setIsPlay: () => void;
  setIsPause: () => void;
};

export const usePlayerStore = create<PlayerState>((set) => ({
  currentSong: null,
  setSong: (song) => set({ currentSong: song }),

  isPlaying: false,
  setIsPlay: () => set({ isPlaying: true }),
  setIsPause: () => set({ isPlaying: false }),
}));
