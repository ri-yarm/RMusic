import styled from "styled-components";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";

const ContainerSC = styled.div`
  width: 100%;
  height: 110px;

  display: flex;
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

const TextContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ControlContainerSC = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const DurationContainerSC = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const VolumeContainerSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const styles = {
  ContainerSC,
  ImgSC,
  InfoContainerSC,
  TextContainerSC,
  ControlContainerSC,
  DurationContainerSC,
  VolumeContainerSC,
};
