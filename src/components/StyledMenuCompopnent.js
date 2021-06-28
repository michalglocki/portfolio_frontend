import styled from "styled-components";

export const StyledMenuComponent = styled.div`
  height: auto;
  margin: 0;
  padding: 0;
  &.appear,
  &.enter {
    transform: rotateX(90deg);
  }
  &.appear-active,
  &.enter-active {
    transform: rotateX(0);
    transition: transform 1s ease-in-out;
    transition-delay: ${({ index }) => {
      return index * 200;
    }}ms;
  }
  &.exit-active {
    transform: rotateX(90);
    transition: transform 1s ease-in-out;
  }
`;
