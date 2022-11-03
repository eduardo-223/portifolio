import { Showburger } from "./BurgerStyle";

interface MenuBugerProps {
  open: boolean;
  onClick: () => void;
}

export const MenuBuger = ({ onClick, open }: MenuBugerProps) => {
  return (
    <Showburger open={open} onClick={onClick}>
      <li></li>
      <li></li>
      <li></li>
    </Showburger>
  );
};
