import styled from "styled-components";

const ContainerSC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 0;

  margin-bottom: 10px;
`;

const ListSC = styled.ul<{ gap: number }>`
  display: flex;
  gap: ${({ gap }) => `${gap}px`};
`;

export const styles = { ContainerSC, ListSC };
