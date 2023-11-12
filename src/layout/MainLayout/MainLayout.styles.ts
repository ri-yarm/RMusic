import styled from "styled-components";
import { Fonts } from "styles/Namespace/Fonts.ts";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";

const LayoutSC = styled.div`
  width: 100%;
  height: 100%;

  font-family: ${Fonts.MAIN};

  background: ${ColorsScheme.BACKDOOR};
`;

export const styles = {
  LayoutSC,
};
