import styled from 'styled-components';

export const Container = styled.div`
    font-size: 14px;
    padding: 5px 15px;
    border-radius: 10px;
    margin-right: 6px;
    font-weight: normal;
    color: ${({theme}) => theme.COLORS.WHITE};
    background-color: #312e38;

    &&:hover{
        filter: brightness(1.2);
        transform: scale(1.05);
        transition: all 200ms ease-in-out;
        cursor: pointer;
    }
`;