import { Container } from './styles';

export function TextLink({icon: Icon, title }){
    return(
        <Container>
            {Icon && <Icon size={17}/>}
            {title}
        </Container>
    )
}