import styled, { keyframes } from "styled-components";

const Animation = keyframes`
  0%{
    transform: translateY(0px);
  }50%{
    transform: translateY(10px);
  }100%{
    transform: translateY(0px);
  }
`;

export const Container = styled.aside`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  animation: ${Animation} 1.8s linear infinite;
  right: 2%;
  top: 65%;

  p {
    writing-mode: vertical-lr;
    font-size: 1.2rem;
    margin: 10px 0;
  }

  svg {
    color: #fff;
    font-size: 1rem;
  }
`;
