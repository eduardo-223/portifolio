import { Container } from "./style";

import Cartoon from "../../Assets/img/cartoonImg.jpg";

import Typical from "react-typical";
import { ScrollDown } from "../ScrollDown";

export const HomeCp = () => {
  return (
    <Container>
      <Typical
        steps={[`Ola Mundo!`, 500, "Hello World!", 1000]}
        loop={Infinity}
      />
      <h2>Sou Eduardo, desenvolvedor Front End!!</h2>
      <figure>
        <img src={Cartoon} alt="Profile Avatar" />
      </figure>
      <ScrollDown/>

      <a
        href={require("../../Assets/Files/devEdu.pdf")}
        download="MeuCurriculo"
        target="_blank"
        rel="noreferrer"

      >
        Curriculo
      </a>
    </Container>
  );
};
