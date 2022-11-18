import styled, { css, keyframes } from "styled-components";

interface ShowBurgerProps {
  open: boolean;
}

export const Showburger = styled.ul<ShowBurgerProps>`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 15px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  flex-wrap: nowrap;
  z-index: 3;
  transition: ease-in-out 200ms;

  @media (min-width: 720px) {
    display: none;
  }

  li {
    background-color: ${({ open }) => (open ? "#E0FBFC" : "#8385D1")};
    width: 2rem;
    height: 0.25rem;
    transform-origin: 1px;
    transition: all linear 0.4s;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
