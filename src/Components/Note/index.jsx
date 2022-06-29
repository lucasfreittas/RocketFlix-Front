import { Container } from './styles';

export function Note({icon: Icon, data, ...rest }){
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>
            {data.stars}
            <p>{data.description}</p>
        
        </Container>
    )
}