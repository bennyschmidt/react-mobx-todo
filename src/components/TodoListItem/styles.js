import styled from 'styled-components';

export const CloseButton = styled.button`
  float: right;
  width: 20px;
  height: 20px;
  line-height: 0;
  text-align: center;
  padding: 0;
  margin-top: -32px;
  border: none;
  border-bottom: 1px solid silver;
  border-radius: 4px;
  color: silver;
  cursor: pointer;
  outline: none;
`;

export const Item = styled.div`
  background-color: #eee;
  border: 0 solid #ddd;
  border-bottom-width: 1px;
  border-radius: 4px;
  width: calc(100% - 80px);
  height: 56px;
  margin: 20px;
  padding: 30px 20px;
  overflow: hidden;
  cursor: pointer;
`;

export const ItemText = styled.p`
  text-decoration: solid ${props => props.completed ? 'line-through' : 'none'};
  opacity: ${props => props.completed ? 0.75 : 1};
  width: 90%;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
