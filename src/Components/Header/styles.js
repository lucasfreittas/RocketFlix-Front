import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    height: 115px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.LIGHT_GRAY};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 65px;

    padding: 0 125px;;

    >h1{
        font-size: 25px;
        font-weight: bold;
        color: ${({theme}) => theme.COLORS.PINK};
    }


`;

export const Avatar = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;

    >img{
        width: 65px;
        height: 65px;
        border-radius: 50%;
    }

    > div{
        width: 110px;
        text-align: right;
    }

    > div p {
        font-size: 15px;
        font-weight: bold;
    }

    > div span{
        font-size: 15px;
        font-weight: normal;
        color: ${({theme}) => theme.COLORS.LIGHT_GRAY};
    }
`;