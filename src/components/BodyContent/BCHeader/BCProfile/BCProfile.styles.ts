import styled from "styled-components";
import { Sizes } from "styles/Namespace/Sizes.ts";

const ContainerSC = styled.div``;

const ImgSC = styled.img`
  border-radius: ${Sizes.DEFAULT}px;

  cursor: pointer;
`;

export const styles = { ContainerSC, ImgSC };
