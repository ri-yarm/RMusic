import styled from "styled-components";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";

const ContainerSC = styled.section`
  padding: 10px 0;

  border-radius: 16px;

  background: ${ColorsScheme.MAIN_TWO};
`;

const ListSC = styled.ul`
  list-style-type: none;

  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`;

const LiSC = styled.li`
  padding: 16px 20px;

  display: flex;
  gap: 16px;

  justify-content: center;
  align-items: center;
`;

const TitleSC = styled.h6`
  color: ${ColorsScheme.WHITE};
  font-size: 16px;
  font-weight: 600;
`;

export const styles = { ContainerSC, ListSC, LiSC, TitleSC };
