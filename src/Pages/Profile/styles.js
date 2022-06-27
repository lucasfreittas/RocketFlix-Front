import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 20% auto;
  grid-template-areas:
  'header'
  'content';
`;

export const Header = styled.div`
  grid-area: header;
  display: flex;
  background-color: rgba(255, 133, 155, 0.05);
  padding-left: 145px;
  text-align: left;

  > a {
    display: flex;
  }
`

export const Content = styled.div`
  grid-area: content;

  width: 20%;
  align-self: center;
  margin: 0 auto;

  > div:nth-child(2), div:nth-child(4){
    margin-bottom: 25px;
  }

`