import styled from "styled-components";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";

const RangeInput = styled.input`
  height: 5px;
  width: min(100%, 500px);

  padding: 5px 14px;

  background-color: transparent;
  outline: none;
  border: none;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  cursor: pointer;

  &::-webkit-slider-thumb {
    width: 15px;
    height: 15px;
    background-color: ${ColorsScheme.VIOLET};
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.4s;
  }

  &:hover::-webkit-slider-thumb {
    opacity: 1;
  }

  &::-moz-range-thumb {
    width: 15px;
    height: 15px;
    background-color: ${ColorsScheme.VIOLET};
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.4s;
  }

  &:hover::-moz-range-thumb {
    opacity: 1;
  }

  &::-ms-thumb {
    width: 15px;
    height: 15px;
    background-color: ${ColorsScheme.VIOLET};
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.4s;
  }

  &:hover::-ms-thumb {
    opacity: 1;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    background-color: ${ColorsScheme.GRAY};
  }

  &::-moz-range-track {
    width: 100%;
    background-color: ${ColorsScheme.GRAY};
  }

  &::-ms-track {
    width: 100%;
    height: 5px;
    background-color: ${ColorsScheme.WHITE};
  }

  &::-moz-range-progress {
    background-color: ${ColorsScheme.WHITE};
  }

  &::-ms-fill-lower {
    background-color: ${ColorsScheme.WHITE};
  }
`;

export const styles = { RangeInput };
