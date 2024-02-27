

import { Container, Title, Subtitle } from './styles';

interface HeaderProps{
    title: string;
    subtitle: string;
}

export default function Header({title, subtitle}: HeaderProps){

    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    )
}