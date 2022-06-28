import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.BACKGROUND_GRAY};

    height: 56px;
    border: none;
    padding: 0 16px;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    font-weight: medium;
    font-size: 16px;
`