import styled from "styled-components";

export const StyledSkillNameComponent = styled.div`
  height: auto;
  margin: 0;
  padding: 0;
  &.appear {
    transform: translateX(-100%);
  }
  &.appear-active {
    transform: translateX(0);
    transition: transform 1s ease-in-out;
    transition-delay: ${({ index }) => {
      return index * 100;
    }}ms;
  }
  &.exit-active {
    transform: translateX(-100%);
    transition: transform 0.5s ease-in-out;
  }
`;
