import styled from "styled-components";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";
import { Sizes } from "styles/Namespace/Sizes.ts";

const ContainerSC = styled.aside`
  padding: 20px;

  width: 100%;
  max-width: 280px;

  background: ${ColorsScheme.MAIN};
  border-radius: ${Sizes.DEFAULT}px;

  box-sizing: border-box;
`;

const ListSC = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const styles = { ContainerSC, ListSC };
