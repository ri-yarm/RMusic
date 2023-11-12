import styled from "styled-components";

const ContainerSC = styled.article`
  padding: 2px 0;

  display: flex;

  cursor: pointer;
`;

const TextContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const styles = { ContainerSC, TextContainerSC };
