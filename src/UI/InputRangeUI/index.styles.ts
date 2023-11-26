import styled from "styled-components";
import { ColorsScheme } from "styles/Namespace/ColorsScheme.ts";

const RangeInput = styled.input`
  height: 5px;
  //width: min(100%, 500px);
  width: 100%;

  padding: 5px 14px;

  background-color: transparent;
  outline: none;
  border: none;

  //-webkit-appearance: none;
  //-moz-appearance: none;
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
    width: 5px;
    height: 15px;
    background-color: ${ColorsScheme.VIOLET};
    border: none;
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
    height: 5px;
    width: 100%;
    background-color: ${ColorsScheme.GRAY};
    //background:
    //  linear-gradient(red, red) 0 / var(--sx) 100% no-repeat,
    //  #9b9b9b;
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

  & {
    --range: calc(var(--max) - var(--min));
    --ratio: calc((var(--value) - var(--min)) / var(--range));
    --sx: calc(0.5 * 15px + var(--ratio) * (100% - 15px));
  }

  //&::-webkit-slider-runnable-track {
  //  background:
  //    linear-gradient(red, red) 0 / var(--sx) 100% no-repeat,
  //    #9b9b9b;
  //}
`;

export const styles = { RangeInput };
