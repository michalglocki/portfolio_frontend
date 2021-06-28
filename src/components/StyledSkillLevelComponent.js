import styled from "styled-components";

export const StyledSkillLevelComponent = styled.div`
  background-color: #946d46;
  margin: 0;
  padding: 0;
  height: 55px;
  width: ${({ level }) => {
    return level * 10;
  }}%;

  &.appear {
    transform: translateX(-100%);
  }
  &.appear-active {
    transform: translateX(0);
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
