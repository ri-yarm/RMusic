import styled from "styled-components";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";

const ContainerSC = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const RepeatInfo = styled.span`
  position: absolute;

  right: -11px;
  top: -11px;

  width: 10px;
  height: 10px;

  background: ${ColorsScheme.VIOLET};
  border-radius: 50%;
`;

export const styles = { ContainerSC, RepeatInfo };
