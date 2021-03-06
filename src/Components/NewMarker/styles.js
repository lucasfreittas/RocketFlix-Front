import styled from 'styled-components';

export const Container = styled.div`

    display: flex;
    align-items: center;
    

    background-color: ${({theme, isNew}) => isNew ? 'transparent' : theme.COLORS.MEDIUM_GRAY};
    color: ${({theme, isNew}) => theme.COLORS.WHITE};

    border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.MEDIUM_GRAY}` : 'none'};


    border-radius: 10px;
    padding-right: 16px;

    > button{
        border: none;
        background: none;
    }
        .button-delete{
            color: ${({theme, isNew}) => theme.COLORS.PINK};
        }

        .button-add{
            color: ${({theme, isNew}) => theme.COLORS.PINK};
        }

        >input {
            height: 56px;
            

            padding: 12px;

            color: ${({theme, isNew}) => theme.COLORS.WHITE};
            background: transparent;

            border: none;

            &::placeholder{
                color: ${({theme, isNew}) => theme.COLORS.LIGHT_GRAY};
            }
        }
`;
