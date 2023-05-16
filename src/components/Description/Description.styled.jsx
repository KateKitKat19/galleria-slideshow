import styled from 'styled-components';

export const Wrap = styled.div`
  width: 327px;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 457px;
  }
  @media screen and (min-width: 1440px) {
    width: 350px;
  }
`;

export const Descr = styled.p`
  display: block;
  font-family: 'Libre Baskerville';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 28px;
  /* or 200% */
  margin-top: 54px;
  color: #7d7d7d;
`;

export const StyledYear = styled.span`
  display: block;
  position: absolute;
  right: 0;
  top: -20px;
  font-family: 'Libre Baskerville';
  font-style: normal;
  font-weight: 700;
  font-size: 100px;
  line-height: 100px;
  /* identical to box height, or 100% */

  text-align: right;
  color: rgb(243, 243, 243);
  z-index: -1;
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
`;
