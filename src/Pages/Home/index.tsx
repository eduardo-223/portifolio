import { HeaderComponent } from "../../Components/Header";
import { HomeCp } from "../../Components/HomeCp";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <HeaderComponent />
      <HomeCp/>
    </Container>
  );
};
