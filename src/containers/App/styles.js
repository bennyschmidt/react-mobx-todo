import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  z-index: 10;
  top: calc(100% - 120px);
  width: calc(100% - 40px);
  height: 60px;
  margin: 20px;
  background-color: blue;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
`;

export const ButtonText = styled.p`
  text-align: center;
  color: white;
  font-weight: bold;
`;

export const Screen = styled.div`
  flex: 1;
  background-color: #fefefe;
  align-items: center;
  justify-content: flex-start;
`;

export const TextBox = styled.input`
  position: absolute;
  z-index: 10;
  top: calc(100% - 188px);
  width: calc(100% - 40px);
  height: 50px;
  margin: 20px;
  padding: 0 10px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid silver;
  box-sizing: border-box;
  font-size: 15px;
  outline: none;
`;
