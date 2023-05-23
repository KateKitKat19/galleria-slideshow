import { Wrap, ButtonStart, LogoStyled } from './Header.styled';
import Logo from './galleria.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Header = ({ isSlideshowActive, setSlideshowState }) => {
  const navigate = useNavigate();

  function onClick() {
    isSlideshowActive ? navigate('/') : navigate('/1');
    setSlideshowState(prev => !prev);
  }

  function onLogoClick() {
    setSlideshowState(false);
  }

  return (
    <Wrap>
      <Link to="/" onClick={onLogoClick}>
        <LogoStyled src={Logo} alt="logo"></LogoStyled>
      </Link>

      <ButtonStart onClick={onClick}>
        {isSlideshowActive ? 'STOP SLIDESHOW' : 'START SLIDESHOW'}
      </ButtonStart>
    </Wrap>
  );
};
