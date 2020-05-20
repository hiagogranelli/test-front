import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
`;

export const TempContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 200px;

  div {
    span {
      display: block;
    }
  }

  > strong {
    font-size: 38px;
  }
`;
