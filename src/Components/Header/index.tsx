import { useState } from "react";
import { MenuBuger } from "./MenuBurger";
import { Header, Navbar } from "./style";

export const HeaderComponent = () => {
  const [open, setOpen] = useState(false);
  return (
    <Header>
      <h2>
        <span className="caracter">&lt;</span> Eduardo <span>Rangel</span>
        <span className="caracter"> &frasl; &gt;</span>
      </h2>
      <MenuBuger open={open} onClick={() => setOpen(!open)} />
      <Navbar open={open}>
        <ul>
          <li>Home</li>
          <li>Sobre mim</li>
          <li>Projetos</li>
          <li>Contato</li>
        </ul>
      </Navbar>
    </Header>
  );
};
