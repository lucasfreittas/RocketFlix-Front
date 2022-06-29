import { Container } from './styles';
import { Tags } from '../Tags';
import { Stars } from '../Stars';

export function Note({icon: Icon, data, ...rest }){
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>
                {
                    data.stars.map(star => <Stars key={star.id} rate={star.rate}/>)

                }
            <p>{data.description}</p>
            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag => <Tags key={tag.id} title={tag.name}/>)
                    }
                </footer>
            }
        
        </Container>
    )
}