import styled from "styled-components";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";
import { Sizes } from "styles/Namespace/Sizes.ts";
import { mix } from "UI/TypographyUI/TitleUI";

const T500 = styled("p")<{ color?: string; fontSize?: number }>`
  ${mix};
  font-weight: 500;
  font-size: ${({ fontSize }) => `${fontSize}px` || `${Sizes.DEFAULT}px`};

  color: ${({ color }) => color || ColorsScheme.WHITE};
`;

export default T500;
