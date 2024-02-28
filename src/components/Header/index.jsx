/* eslint-disable react/prop-types */
import { Container, Title, Subtitle } from './styles';

export default function Header({title, subtitle}){

    return (
        <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    )
}