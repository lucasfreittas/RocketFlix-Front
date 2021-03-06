import { Container, Title, Content } from './styles';
import { Header } from '../../Components/Header'
import { Button } from '../../Components/Button';
import {FiPlus} from 'react-icons/fi'
import { Note } from '../../Components/Note';
import { Link } from 'react-router-dom';


export function Home(){
    return(
        <Container>
            <Header />
            <Title>
                <h1>Meus Filmes</h1>
                <Link to='/newReview'>
                    <Button icon={FiPlus} title='Adicionar Filme' /> 
                </Link>
            </Title>

            <Content>
                <Link to ='/moviePreview'>
                    <Note data={{
                        title: 'Interestellar',
                        stars: [
                            {id: '1', rate:'true'},
                            {id: '2', rate:'true'},
                            {id: '3', rate:'true'},
                            {id: '4', rate:'true'},
                            {id: '5', rate:'false'},

                        ],
                        description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se... ',
                        tags: [
                            {id: '1', name:'Ficção Científica'},
                            {id: '2', name:'Drama'},
                            {id: '3', name:'Família'},
                        ]
                        }}/> 
                    </Link>
                <Note data={{
                    title: 'Spider-Man',
                    stars: [
                        {id: '1', rate:'true'},
                        {id: '2', rate:'true'},
                        {id: '3', rate:'true'},
                        {id: '4', rate:'false'},
                        {id: '5', rate:'false'},

                    ],
                    description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ',
                    tags: [
                        {id: '1', name:'Herói'},
                        {id: '2', name:'Aventura'},
                    ]
                    }}/> 
              
              <Note data={{
                    title: 'Shrek',
                    stars: [
                        {id: '1', rate:'true'},
                        {id: '2', rate:'true'},
                        {id: '3', rate:'false'},
                        {id: '4', rate:'false'},
                        {id: '5', rate:'false'},

                    ],
                    description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se ',
                    tags: [
                        {id: '1', name:'Animação'},
                        {id: '2', name:'Comédia'},
                    ]
                    }}/> 
            </Content>
        </Container>
    )
}