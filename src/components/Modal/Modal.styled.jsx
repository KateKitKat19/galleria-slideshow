import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const Modal = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-family: 'Libre Baskerville';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  letter-spacing: 3px;

  color: #ffffff;
  margin-bottom: 41px;
`;

export const Image = styled.img`
  display: block;
  max-width: 327px;
  height: auto;
  @media screen and (min-width: 768px) {
    max-width: 670px;
  }
`;
