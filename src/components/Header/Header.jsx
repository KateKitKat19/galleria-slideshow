import { useState } from 'react';
import { Wrap, ButtonStart, LogoStyled } from './Header.styled';
import Logo from './galleria.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);
  console.log('Header   isSlideshowActive:', isSlideshowActive);
  const navigate = useNavigate();

  function onClick() {
    isSlideshowActive ? navigate('/') : navigate('/1');
    setIsSlideshowActive(!isSlideshowActive);
  }

  return (
    <Wrap>
      <Link to="/">
        <LogoStyled src={Logo} alt="logo"></LogoStyled>
      </Link>

      <ButtonStart onClick={onClick}>
        {isSlideshowActive ? 'STOP SLIDESHOW' : 'START SLIDESHOW'}
      </ButtonStart>
    </Wrap>
  );
};
