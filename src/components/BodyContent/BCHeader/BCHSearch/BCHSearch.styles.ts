import styled from "styled-components";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";
import { Sizes } from "styles/Namespace/Sizes.ts";

const ContainerSC = styled.div`
  padding: 16px 5px 16px 20px;

  flex: 1;
  display: flex;
  gap: ${Sizes.DEFAULT}px;

  background: ${ColorsScheme.MAIN_TWO};
  border-radius: ${Sizes.DEFAULT}px;

  cursor: pointer;
`;

const InputSC = styled.input`
  width: 100%;

  border: none;
  background: none;
  outline: none;

  font-size: 18px;

  &::placeholder {
    font-size: 16px;
    color: ${ColorsScheme.GRAY};
  }
`;

export const styles = { ContainerSC, InputSC };
