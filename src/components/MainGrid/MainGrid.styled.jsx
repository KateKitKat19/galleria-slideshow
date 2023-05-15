import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
    flex-direction: row;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const ListStyled = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;

export const ListItem = styled.div`
  width: 100%;
  position: relative;

  @media screen and (min-width: 768px) {
    width: 324px;
  }

  @media screen and (min-width: 1440px) {
    width: 310px;
  }

  &::before {
    content: '';
    display: block;
    padding-bottom: ${({ aspectRatio }) => aspectRatio}%;

    /* Adjust the padding-bottom value to change the height ratio */
  }
`;

export const NameBlock = styled.div`
  width: 246px;
  margin-left: 32px;
  margin-bottom: 32px;
  @media screen and (min-width: 1440px) {
    width: 246px;
  }
`;

export const NameStyled = styled.p`
  font-family: inherit;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  text-align: left;
  max-width: 95%;
  color: #ffffff;
`;

export const Artist = styled.p`
  font-family: inherit;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  margin-top: 7px;
  color: #ffffff;

  mix-blend-mode: normal;
  opacity: 0.75;
`;

export const Mask = styled.div`
  width: 100%;
  height: 170px;
  position: absolute;
  left: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 1));
  display: flex;
  align-items: flex-end;
`;
