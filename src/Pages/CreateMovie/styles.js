import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;

  grid-template-rows: 120px auto;
  grid-template-areas:
  "Header"
  "content";

  .link{
    display: flex;

  }`

  export const Main = styled.div`
    grid-area: content;
    overflow: auto;
  `;

export const Movie = styled.div`

  grid-area: content;
  padding: 30px 360px;

  > h1{
    margin: 30px 0;
    font-size: 36px;
    font-weight: medium;
  }

  > div{
    display: flex;
    gap: 40px;
    margin-bottom: 20px;
  }
`

export const Markers = styled.div`
  padding: 30px 360px;
  grid-area: content;
  overflow: auto;

  >h3 {
    font-size: 20px;
    color: ${({theme}) => theme.COLORS.LIGHT_GRAY};
  }
  
  .tagContainer{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    overflow: auto;
    background-color: ${({theme}) => theme.COLORS.BLACK};

    border-radius 10px;
    padding: 20px 20px; ;

    margin-top: 25px;
    margin-bottom: 40px;
  }

  .formButtons{
    display: flex;
    gap: 40px;

    > :nth-child(1){
      background-color: ${({theme}) => theme.COLORS.BLACK};
      color: ${({theme}) => theme.COLORS.PINK};
    }
  }
`