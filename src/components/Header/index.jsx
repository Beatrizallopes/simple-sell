/* eslint-disable react/prop-types */
import { Container, Title, Subtitle, Labels, Row, Username } from './styles';
import LocalStorageService from '../../services/storage';
import ProfileIcon from '../ProfileIcon';

export default function Header({title, subtitle}){
    const isMobile = window.innerWidth < 768;
    const localStorageService = LocalStorageService();
    const userInfo = localStorageService.getUserInfo();
    const username = userInfo?.email ? 'Olá, ' + userInfo.email : '';

    return (
        <Container>
            <Labels>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle>
            </Labels>
            <Row>
                <div style={{marginLeft: '1rem', display: isMobile ? 'none' : 'flex'}}>
                <ProfileIcon name={userInfo?.email} size="2rem" fontsize="0.8rem" loading={false}></ProfileIcon>
                </div> 
                <Username style={{display: isMobile ? 'none' : 'flex'}}>{username}</Username>
            </Row>
        </Container>
    )
}