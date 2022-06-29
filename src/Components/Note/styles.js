import styled  from 'styled-components';

export const Container = styled.button`

    width: 100%;
    height: 250px;
    padding: 32px;
    background-color: ${({theme}) => theme.COLORS.LIGHT_RED};
    border: none;
    border-radius: 10px;
    margin-bottom: 25px;

    > h1 {
        text-align: left;
        font-size: 24px;
        font-weight: bold;
        color: ${({theme}) => theme.COLORS.WHITE};

        margin-bottom: 10px;
    }

    > p {
        text-align: left;
        font-size: 16px;
        font-weight: normal;
        color: ${({theme}) => theme.COLORS.LIGHT_GRAY};

        margin-bottom: 30px;
    }

    > div{
        display: flex;
        margin-bottom: 15px;
    }

    > footer{
        display: flex;
    }
`;