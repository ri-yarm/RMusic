import styled from "styled-components";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";

const ContainerSC = styled.div<{ haveMusic: boolean }>`
  width: 100%;
  height: 110px;

  display: ${({ haveMusic }) => (haveMusic ? "flex" : "none")};
  align-items: center;
  //justify-content: space-between;

  position: sticky;
  bottom: 0;
  left: 0;

  background: ${ColorsScheme.MAIN_TWO};
`;

const ImgSC = styled.img`
  width: 110px;
  height: 100%;

  object-fit: cover;
`;

const InfoContainerSC = styled.div`
  flex: 1;

  padding: 0 25px;

  display: flex;
  gap: 50px;
  align-items: center;
`;

export const styles = {
  ContainerSC,
  ImgSC,
  InfoContainerSC,
};
