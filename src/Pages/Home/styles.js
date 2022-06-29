import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 120px 165px auto;
  grid-template-areas:
  "Header"
  "Title"
  "Content";


`;

export const Title = styled.div`
  grid-area: Title;

  display: flex;
  justify-content: space-between;
  padding: 50px 123px;

  Button{
    width: 200px;
  }
`;

export const Content = styled.div`
  grid-area: Content;
  padding: 0 123px;
  overflow: auto;

`;