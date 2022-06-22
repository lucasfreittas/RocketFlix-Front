import styled from 'styled-components';
import backgroundImg from '../../Assets/Cinema_Picture.png'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-columns: 40% auto;
  grid-template-areas:
  "form photo";

`;

export const Photo = styled.div`
  grid-area: photo;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;

`;

export const Form = styled.div`
  width: 45%;
  margin: auto;
  grid-area: form;
  align-self: center;

    > h1{
      color: ${({theme}) => theme.COLORS.PINK};
      font-size: 48px;
      font-weight: bold;
    }

    > p {
      color: ${({theme}) => theme.COLORS.LIGHT_GRAY};
      font-size: 14px;
      font-weight: normal;

      margin-bottom: 50px;
    }

    > h2 {
      color: ${({theme}) => theme.COLORS.WHITE};
      font-size: 24px;
      font-weight: medium;

      margin-bottom: 50px;
    }

    > button{
      margin-top: 25px;
    }

    .TextLink{
      margin-top: 40px;
    }
`;