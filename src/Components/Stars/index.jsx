import { Container } from './styles';
import {FiStar} from 'react-icons/fi'

export function Stars({...rest}){
    return(
        <Container {...rest}>
          <FiStar/>
        </Container>
    )
};