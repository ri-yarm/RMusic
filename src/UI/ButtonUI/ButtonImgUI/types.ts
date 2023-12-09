import { ReactNode } from "react";
import { CSSProperties } from "styled-components";

export interface ButtonImgUIProps extends ButtonImgSCProps {
  children: ReactNode;
  handleClick?: () => void;
  handleDoubleClick?: () => void;
}

export interface ButtonImgSCProps {
  padding: number[] | number;
  background?: string;
  borderRadius?: number;
  styles?: CSSProperties;
}
