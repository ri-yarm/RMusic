export interface InputRangeProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputRangeVolumeProps extends InputRangeProps {
  handleMute: () => void;
}

export interface PlayerRangeProps {
  progress: InputRangeProps;
  volume: InputRangeVolumeProps;
}
