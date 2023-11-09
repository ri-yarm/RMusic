import styled, { css } from "styled-components";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";

export const mix = css`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Typography = styled("p")<{ color?: string }>`
  ${mix};

  color: ${(props) => props.color || ColorsScheme.WHITE};
`;

export default Typography;
