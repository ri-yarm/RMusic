import styled from "styled-components";
import { Sizes } from "styles/Namespace/Sizes.ts";

const ContainerSC = styled.aside`
  width: 100%;
  max-width: 300px;

  display: flex;
  flex-direction: column;
  gap: ${Sizes.ASIDE_GAP}px;
`;

export const style = { ContainerSC };
