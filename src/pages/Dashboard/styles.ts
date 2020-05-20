import styled from 'styled-components';
import { lighten } from 'polished';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    width: 300px;
    height: 50px;
    border: 1px solid #444;
    margin-bottom: 20px;
    padding: 0 20px;
    color: #333;

    &::placeholder {
      text-align: center;
    }
    &:focus::placeholder {
      color: transparent;
    }
  }

  button {
    border: none;
    background: #444;
    width: 150px;
    height: 50px;
    color: #fff;
    transition: background 0.2s;

    &:hover {
      background: ${lighten(0.1, '#444')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: red;
  margin-top: 5px;
  text-align: center;
`;

export const Cities = styled.div`
  display: flex;
  flex-direction: column;

  a {
    width: 200px;
    height: 50px;
    margin: 50px auto 0;
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 5px;
    align-items: center;
    border-radius: 5px;
    color: #333;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    div {
      strong {
        display: block;
      }
    }
  }
`;
