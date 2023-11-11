import styled from "styled-components";

const ContainerSC = styled.article`
  padding: 2px 0;

  display: flex;
`;

const ImgSC = styled.img`
  margin-right: 10px;

  border-radius: 10px;

  object-fit: contain;
`;

const TextContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const styles = { ContainerSC, ImgSC, TextContainerSC };
