import { Container } from './styles';

export function TextLink({icon: Icon, title }){
    return(
        <Container>
            {Icon && <Icon size={20}/>}
            {title}
        </Container>
    )
}