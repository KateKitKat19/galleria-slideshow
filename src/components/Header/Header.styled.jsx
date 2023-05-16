import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 24px;
  @media screen and (min-width: 768px) {
    padding-bottom: 28px;
  }
  @media screen and (min-width: 1440px) {
    padding-bottom: 40px;
  }

  border-bottom: 1px solid #e5e5e5;
`;

export const LogoStyled = styled.img`
  width: 113px;
  height: 32px;
  @media screen and (min-width: 1440px) {
    width: 170px;
    height: 48px;
  }
  cursor: pointer;
  &:hover,
  &:focus {
    filter: opacity 0.5;
  }
`;

export const ButtonStart = styled.button`
  font-family: inherit;
  font-size: 9px;
  line-height: 11px;
  text-align: right;
  letter-spacing: 1.92857px;
  background-color: transparent;
  border: none;
  color: #7d7d7d;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 15px;

    letter-spacing: 2.57143px;
  }
  &:hover,
  &:focus {
    color: #000000;
  }
`;
