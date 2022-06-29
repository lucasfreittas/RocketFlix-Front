import { Container } from './styles';
import {FiStar} from 'react-icons/fi'

export function Stars({rate, ...rest}){
    return(
        <Container {...rest}>
            {rate == 'true' ? <FiStar style={{fill: "#ff859b"}}/> : <FiStar/> }
        </Container>
    )
};