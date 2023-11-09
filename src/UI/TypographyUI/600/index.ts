import styled from "styled-components";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";
import { mix } from "UI/TypographyUI";

const T600 = styled("p")<{ color?: string }>`
  ${mix};
  font-weight: 600;

  color: ${(props) => props.color || ColorsScheme.WHITE};
`;

export default T600;
