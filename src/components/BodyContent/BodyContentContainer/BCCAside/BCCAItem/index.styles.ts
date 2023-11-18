import styled from "styled-components";
import { Sizes } from "styles/Namespace/Sizes.ts";

const ContainerSC = styled.article`
  position: relative;
  cursor: pointer;
`;

const ImgSC = styled.img`
  border-radius: ${Sizes.DEFAULT}px;

  object-fit: contain;
`;

const TextContainerSC = styled.div`
  padding: 0 16px 16px;

  width: 100%;

  display: flex;
  gap: 8px;

  position: absolute;
  left: 0;
  bottom: 0;
`;

export const styles = { ContainerSC, ImgSC, TextContainerSC };
