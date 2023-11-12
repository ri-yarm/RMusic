import { CSSProperties } from "styled-components";

export interface AvatarUIProps extends AvatarSCProps {
  image: string;
}

export interface AvatarSCProps {
  bigSize?: boolean;
  background?: string;
  borderRadius?: number;
  styles?: CSSProperties;
}
