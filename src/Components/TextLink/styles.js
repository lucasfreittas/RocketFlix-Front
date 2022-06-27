import styled from 'styled-components';

export const Container = styled.div`

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: normal;
  font-size: 15px;
  color:${({theme}) => theme.COLORS.PINK};

  > svg{
  
    margin-right: 10px;
  }
`;