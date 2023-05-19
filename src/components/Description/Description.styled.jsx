import styled from 'styled-components';

export const Wrap = styled.div`
  width: 327px;
  position: relative;
  margin-top: 172px;
  @media screen and (min-width: 768px) {
    width: 457px;
    margin-left: 115px;
    margin-top: 139px;
  }
  @media screen and (min-width: 1440px) {
    width: 350px;
    margin-right: 125px;
  }
`;

export const Descr = styled.p`
  display: block;
  font-family: 'Libre Baskerville';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 28px;

  color: #7d7d7d;
  @media screen and (min-width: 1440px) {
  }
`;

export const StyledYear = styled.span`
  display: block;
  position: absolute;
  right: 0;
  top: -74px;
  font-family: 'Libre Baskerville';
  font-style: normal;
  font-weight: 700;
  font-size: 100px;
  line-height: 100px;
  /* identical to box height, or 100% */

  text-align: right;
  color: rgb(243, 243, 243);
  z-index: -1;

  @media screen and (min-width: 768px) {
    font-size: 200px;
    line-height: 150px;
    /* identical to box height, or 75% */
    right: 96px;
    top: 0;
    transform: translateY(-50%);
  }
  @media screen and (min-width: 1440px) {
    transform: translateY(-75%);
    right: auto;
    left: 0;
  }
`;

export const LinkToSource = styled.a`
  display: block;
  font-family: 'Libre Baskerville';
  font-style: normal;
  font-weight: 700;
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 1.92857px;
  text-decoration-line: underline;
  margin-top: 68px;
  color: #7d7d7d;
  @media screen and (min-width: 768px) {
    margin-top: 124px;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 81px;
  }
`;
