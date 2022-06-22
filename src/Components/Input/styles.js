import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    display: flex;
    align-items: center;


    > input{

        width: 100%;
        height: 56px;
        padding: 12px;
        background-color: ${({theme}) => theme.COLORS.MEDIUM_GRAY};
        color: ${({theme}) => theme.COLORS.WHITE};
        border-radius: 10px;
        border: none;

        &:placeholder{
            color: ${({theme}) => theme.COLORS.LIGHT_GRAY};
        }
    }

    > svg{
        margin-left: 16px;
    }
`;
