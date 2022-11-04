import styled, { keyframes } from "styled-components";

interface NavbarProps {
  open: boolean;
}

const moveLeft = keyframes`
 from{
  transform: translateY(-100px);
  opacity: 0;
 }
 to{
  transform: translateY(0);
  opacity: 1;
 }

 `;


export const Header = styled.header`
  margin-top: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  h2 {
    font-size: 1.4rem;
    color: var(--blue-light);
    font-family: var(--Poppins);
    font-weight: bold;
    letter-spacing: 2px;

    @media (min-width: 720px) {
      font-size: 1.5rem;
    }

    span {
      font-weight: 500;
      font-style: italic;
    }

    .caracter {
      color: var(--text);
      font-weight: bolder;
    }
  }
`;

export const Navbar = styled.nav<NavbarProps>`
  ul {
    animation: ${moveLeft} 550ms ease-out;
    display: flex;
    gap: 10px;
    color: var(--white);

    @media (max-width: 720px) {
      display: ${({ open }) => (open ? "block" : "none")};
      width: 100%;
      height: 100%;
      background-color: var(--background2);
      padding-right: 10px;
      position: absolute;
      top: 0;
      right: 0;
      flex-direction: column;
      transition: ease-in 300ms;

      li {
        margin-top: 5rem;
        padding-left: 10px;
        color: var(--white);
        width: 60%;
        height: 50px;
        font-size: 2.2rem;
        margin-bottom: 8px;
        transition: ease-in-out 200ms;

        &:hover {
          border-bottom: 1px solid var(--text);
          color: var(--blue);
          padding: 2px 0;
        }
      }
    }

    li {
      @media (min-width: 720px) {
        font-size: 1.2rem;
      }
    }
  }
`;
