import { Wrap, ButtonStart, LogoStyled } from './Header.styled';
import Logo from './galleria.svg';

export const Header = () => {
  return (
    <Wrap>
      <LogoStyled src={Logo} alt="logo"></LogoStyled>
      <ButtonStart>START SLIDESHOW</ButtonStart>
    </Wrap>
  );
};
