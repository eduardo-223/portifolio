import { Container } from "./style";

import Cartoon from "../../Assets/img/cartoonImg.jpg";

import Typical from "react-typical";

export const HomeCp = () => {
  return (
    <Container>
      <Typical
        steps={[`Ola Mundo!`, 500, "Hello World!", 1000]}
        loop={Infinity}
      />
      <h2>Sou Eduardo, desenvolvedor Front End!!</h2>
      <img src={Cartoon} alt="Profile Avatar" />
    </Container>
  );
};
