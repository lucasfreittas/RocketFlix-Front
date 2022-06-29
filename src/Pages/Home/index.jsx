import { Container, Title, Content } from './styles';
import { Header } from '../../Components/Header'
import { Button } from '../../Components/Button';
import {FiPlus} from 'react-icons/fi'
import { Note } from '../../Components/Note';


export function Home(){
    return(
        <Container>
            <Header />
            <Title>
                <h1>Meus Filmes</h1>
                <Button icon={FiPlus} title='Adicionar Filme' /> 
            </Title>

            <Content>
                <Note data={{
                    title: 'Elysium',
                    stars: [
                        {id: '1', rate:'true'},
                        {id: '2', rate:'true'},
                        {id: '3', rate:'true'},
                        {id: '4', rate:'true'},
                        {id: '5', rate:'false'},

                    ],
                    description: 'Essa é uma descrição ficticia',
                    tags: [
                        {id: '1', name:'React'},
                        {id: '2', name:'RocketSeat'},
                    ]
                    }}/> 
              
            </Content>
        </Container>
    )
}