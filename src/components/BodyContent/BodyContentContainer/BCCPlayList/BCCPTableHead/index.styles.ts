import styled from "styled-components";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";

const ContainerSC = styled.thead`
  color: ${ColorsScheme.GRAY};
  font-family: Quicksand, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  th {
    padding-bottom: 20px;

    border-bottom: 1px solid ${ColorsScheme.GRAY};
  }

  th:nth-child(1) {
    width: 7%;
  }

  th:nth-child(3) {
    width: 35%;
  }

  th:nth-child(4) {
    width: 10%;
  }

  th:nth-child(5) {
    width: 5%;
  }
`;

export const styles = { ContainerSC };
