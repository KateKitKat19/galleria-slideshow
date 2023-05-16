import { Wrap, ButtonStart, LogoStyled } from './Header.styled';
import Logo from './galleria.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Wrap>
      <Link to="/">
        <LogoStyled src={Logo} alt="logo"></LogoStyled>
      </Link>

      <ButtonStart>START SLIDESHOW</ButtonStart>
    </Wrap>
  );
};
