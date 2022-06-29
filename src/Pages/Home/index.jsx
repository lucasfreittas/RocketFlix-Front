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
                        {id: '1'},
                        {id: '2'},
                        {id: '3'},
                        {id: '4'},
                        {id: '5'},

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