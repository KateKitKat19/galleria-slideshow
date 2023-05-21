import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    margin-top: 100px;
    max-width: 1360px;
  }
`;
