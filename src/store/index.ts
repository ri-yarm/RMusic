import create from "zustand";

type PlayerState = {
  currentSong: string | null;
  setSong: (song: string) => void;
};

export const usePlayerStore = create<PlayerState>((set) => ({
  currentSong: null,
  setSong: (song) => set({ currentSong: song }),
}));
