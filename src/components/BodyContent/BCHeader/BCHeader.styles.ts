import styled from "styled-components";
import { Sizes } from "styles/Namespace/Sizes.ts";

const ContainerSC = styled.header`
  margin-bottom: 20px;

  display: flex;
  align-items: center;
  gap: ${Sizes.DEFAULT}px;
`;

export const style = { ContainerSC };
