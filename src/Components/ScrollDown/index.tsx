import { Container } from "./styled";

import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export const ScrollDown = () => {
  return (
    <Container>
      <FiChevronUp />
      <FiChevronUp />
      <FiChevronUp />
      <p>Scroll Down</p>
      <FiChevronDown />
      <FiChevronDown />
      <FiChevronDown />
    </Container>
  );
};
