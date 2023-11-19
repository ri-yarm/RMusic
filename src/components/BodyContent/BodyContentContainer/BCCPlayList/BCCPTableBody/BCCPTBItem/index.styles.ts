import styled from "styled-components";

const ContainerSC = styled.tr`
  td {
    padding: 16px 0;
  }
`;

const TitleContainerSC = styled.div`
  display: flex;
  gap: 20px;
`;

const TextContainerSC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImgSC = styled.img`
  border-radius: 8px;
`;

export const styles = { ContainerSC, TitleContainerSC, TextContainerSC, ImgSC };
