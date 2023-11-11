import styled from "styled-components";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";
import { mix } from "UI/TypographyUI";

const T500 = styled("p")<{ color?: string }>`
  ${mix};
  font-weight: 500;

  color: ${({ color }) => color || ColorsScheme.WHITE};
`;

export default T500;
