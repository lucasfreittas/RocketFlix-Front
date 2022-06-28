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
  margin-top: -300px;

  > div:nth-child(3), div:nth-child(5){
    margin-bottom: 25px;
  }

`

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 65px;

  width: 186px;
  height: 186px;

  >img{
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }

  >label{
    width: 48px;
    height: 48px;
    background-color: ${({theme}) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input{
      display: none;
    }

    svg{
      width: 20px;
      height: 20px;

      color: ${({theme}) => theme.COLORS.BACKGROUND_GRAY};
    }
  }

`