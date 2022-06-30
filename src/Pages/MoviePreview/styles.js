import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 120px auto;
  grid-template-areas:
  "Header"
  "Content";
`;

export const Content = styled.div`
  grid-area: Content;
  padding: 40px 365px;
  overflow: auto;

  .link{
    display: flex;
  }

  .title{
    display: flex;
    align-items: center;

    >h1 {
      font-size: 36px;
      font-weight: medium;
      margin: 24px 0 ;
      margin-right: 20px;
    }

    svg{
      font-size: 25px;
      margin-top: 10px;
      margin-left: 5px;
    
    }
    
  }

  .author{
    display: flex;
    gap: 8px;
    align-items: center;

    font-size: 16px;
    font-weight: normal;

    >img{
      width: 20px;
      height: 20px;
      border-radius: 50%;
    }

    >svg{
      color: ${({theme}) => theme.COLORS.PINK};
    }
  }

  .tagsContainer{
    display: flex;
    margin: 40px 0;

    div:nth-child(n){
      background-color: ${({theme}) => theme.COLORS.LIGHT_RED};
    }
  }

  .review{
    text-align: justify;
  }
`;

