import styled from 'styled-components';

export const List = styled.ul`
  margin-top: 60px;
  padding: 0;
  height: 69vh;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const Loading = styled.div`
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
`;

export const LoadingText = styled.p`
  line-height: 100vh;
  color: #666;
  display: block;
  margin-top: -60px;
  padding: 0;
  text-align: center;
`;

export const Screen = styled.div`
  background-color: #fefefe;
`;
