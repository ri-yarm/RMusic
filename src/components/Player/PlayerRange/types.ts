export interface InputRangeProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface PlayerRangeProps {
  progress: InputRangeProps;
  volume: InputRangeProps;
}
