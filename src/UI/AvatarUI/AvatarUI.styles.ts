import styled from "styled-components";
import { Sizes } from "styles/Namespace/Sizes.ts";
import { AvatarSCProps } from "UI/AvatarUI/types.ts";

const AvatarSC = styled.img<AvatarSCProps>`
  width: ${({ bigSize }) => (bigSize ? "50px" : "45px")};
  height: ${({ bigSize }) => (bigSize ? "50px" : "45px")};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : `${Sizes.DEFAULT}px`};

  object-fit: contain;

  cursor: pointer;
`;

export const styles = { AvatarSC };
