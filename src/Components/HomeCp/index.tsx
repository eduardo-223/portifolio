import { Container } from "./style";

import Typical from "react-typical";

export const HomeCp = () => {
  return (
    <Container>
      <Typical steps={[`Ola Mundo!`, 1500, "Hello World!", 1500]} loop={Infinity} />
      <h2>Sou Eduardo, desenvolvedor Front End!!</h2>
    </Container>
  );
};
