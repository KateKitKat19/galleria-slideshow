import styled from 'styled-components';
import Arrows from './arrows.svg';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const Button = styled.button`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 152px;
  height: 40px;
  padding: 14px 16px;
  border: none;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  mix-blend-mode: normal;
  transition: background-color 250ms ease;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.25);
  }
  &::before {
    position: absolute;
    top: 14px;
    left: 16px;
    width: 12px;
    height: 12px;
    display: block;
    content: '';
    background: url(${Arrows});
    opacity: 1;
    & > svg {
      fill: white;
    }
  }
`;

export const ButtonText = styled.p`
  display: block;
  opacity: 1;
  font-family: 'Libre Baskerville';
  font-style: normal;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 2.14286px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
  padding: 0;
  margin: 0;
`;

export const Painting = styled.img`
  display: block;
  width: 327px;
  height: 280px;
  @media screen and (min-width: 768px) {
    width: 475px;
    height: 560px;
  }
`;

export const TextWrap = styled.div`
  width: 280px;
  padding: 24px;
  position: absolute;
  left: 0;
  bottom: -54px;

  background-color: white;
`;

export const PaintingName = styled.h2`
  font-family: 'Libre Baskerville';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height, or 121% */
  color: #000000;
  margin-bottom: 8px;
`;

export const ArtistName = styled.h3`
  font-family: 'Libre Baskerville';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  /* identical to box height */

  color: #7d7d7d;
`;

export const AuthorImage = styled.img`
  width: 64px;
  height: 64px;
  @media screen and (min-width: 768px) {
    width: 128px;
    height: 128px;
  }

  margin-top: 54px;
  margin-left: 16px;
`;
