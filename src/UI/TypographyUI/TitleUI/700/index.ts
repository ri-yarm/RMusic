import styled from "styled-components";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";
import { mix } from "UI/TypographyUI/TitleUI";

const T700 = styled("p")<{ color?: string }>`
  ${mix};
  font-size: 32px;
  font-weight: 700;

  color: ${({ color }) => color || ColorsScheme.WHITE};
`;

export default T700;
