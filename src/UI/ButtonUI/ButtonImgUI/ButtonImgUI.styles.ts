import styled, { css } from "styled-components";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";
import { Sizes } from "styles/Namespace/Sizes.ts";
import { ButtonImgSCProps } from "UI/ButtonUI/ButtonImgUI/types.ts";

const paddingMixin = css<ButtonImgSCProps>`
  display: flex;
  align-items: center;

  position: relative;

  padding: ${({ padding }) =>
    Array.isArray(padding)
      ? padding.map((value) => `${value}px`).join(" ")
      : `${padding}px`};
`;

const ButtonSC = styled.button<ButtonImgSCProps>`
  ${paddingMixin};

  background: ${({ background }) => background || ColorsScheme.MAIN_TWO};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : `${Sizes.DEFAULT}px`};

  cursor: pointer;
`;

export const styles = { ButtonSC };
