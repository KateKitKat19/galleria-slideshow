import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  padding: 24px;
  border: 1px solid yellow;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    padding: 29px 40px;
  }
  @media screen and (min-width: 1440px) {
    padding: 40px;
  }
`;
