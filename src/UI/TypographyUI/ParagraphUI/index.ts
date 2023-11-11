import styled, { css } from "styled-components";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";

const mix = css`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const P500 = styled("p")<{ color?: string }>`
  ${mix};
  
  color: ${({ color }) => color || ColorsScheme.GRAY}};
`;

export default P500;
