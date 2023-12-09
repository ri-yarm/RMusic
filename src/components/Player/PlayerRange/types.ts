export interface InputRangeProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputRangeVolumeProps extends InputRangeProps {
  handleMute: () => void;
}

export interface InputRangeProgressProps extends InputRangeProps {
  duration: string | null;
}

export interface PlayerRangeProps {
  progress: InputRangeProgressProps;
  volume: InputRangeVolumeProps;
}
