import { ReactNode } from "react";

export interface ButtonImgUIProps extends ButtonImgSCProps {
  children: ReactNode;
}

export interface ButtonImgSCProps {
  padding: number[] | number;
  background?: string;
  borderRadius?: string;
}
