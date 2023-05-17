import styled from 'styled-components';

export const CommonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 67px;
  padding: 16px 0;
  border-top: 1px solid #e5e5e5;
`;

export const Name = styled.p`
  font-family: 'Libre Baskerville';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;

  color: #000000;
`;

export const Artist = styled.p`
  font-family: 'Libre Baskerville';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  margin-top: 9px;
  color: #000000;

  mix-blend-mode: normal;
  opacity: 0.75;
`;

export const BtnNav = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  &:first-of-type {
    margin-right: 23px;
  }
  &:disabled > img {
    filter: opacity(0.15);
  }

  &:disabled {
    cursor: initial;
    pointer-events: none;
  }
`;

export const Icons = styled.img`
  transition: opacity 250ms ease;
  &:hover,
  &:focus {
    filter: opacity(0.5);
  }
`;
