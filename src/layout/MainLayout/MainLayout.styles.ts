import styled from "styled-components";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";
import { Fonts } from "styles/Namespace/Fonts.ts";

const LayoutSC = styled.div`
  width: 100%;
  height: 100%;

  font-family: ${Fonts.MAIN};

  background: ${ColorsScheme.BACKDOOR};
`;

export const styles = {
  LayoutSC,
};
