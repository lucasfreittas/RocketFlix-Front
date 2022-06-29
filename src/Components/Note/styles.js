import styled  from 'styled-components';

export const Container = styled.button`

    width: 100%;
    height: 220px;
    background-color: ${({theme}) => theme.COLORS.LIGHT_RED};
    border: none;
    border-radius: 10px;
    margin-bottom: 25px;
`;