import  { 
  useState,
  // useContext, 
  // useEffect
} from "react";
import {
   Container,
   Box,
   LogoRow,
   LogoImg,
   Row,
   RowButton,
  } from './styles';
  import { Logo} from '../../assets/images/index';
  import Textfield from "../../components/Textfield";
  import Button from "../../components/Button";
  import { useNavigate } from "react-router-dom";
  // import LocalStorageService from '../../services/storage';
  // import AppContext from "../../state/App.context";

export default function RegisterUser(){
  // const { authenticateUser } = UseUsers();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const fontSize = 16;
  let navigate = useNavigate();

    return (
      <Container>
        <Box>
        <LogoRow>
          <LogoImg src={Logo} alt='logo' />
        </LogoRow>
        <Row>
          <Textfield
            label="E-mail"
            width={'100%'}
            disabled={false} 
            value={email} 
            fontSize={fontSize} 
            onChange={setEmail}
            multiline={false}
            password={false}
            ></Textfield>
          </Row>
          <Row>
            <Textfield
              label="Senha"
              width={'100%'}
              disabled={false} 
              value={password} 
              fontSize={fontSize} 
              onChange={setPassword}
              multiline={false}
              password={true}
            ></Textfield>
        </Row>
        <Row>
            <Textfield
              label="Confirme a senha"
              width="100%"
              disabled={false} 
              value={confirmPassword} 
              fontSize={fontSize} 
              onChange={setConfirmPassword}
              multiline={false}
              password={true}
            ></Textfield>
        </Row>
        <RowButton>
          <Button
            label="Cadastrar novo usuário" 
            background="var(--blue)" 
            color="var(--background)" 
            borderColor="var(--blue)" 
            disabled={false} 
            onClick={()=> {}}
            fontSize='1rem'
            width="300px"
          ></Button>
        </RowButton>
        <RowButton style={{ marginTop: '4%'}}>
          <Button
            label="<  Voltar para Login" 
            background="var(--background)" 
            color="var(--txt-title)" 
            borderColor="var(--txt-title)" 
            disabled={false} 
            onClick={()=> { navigate('/')}}
            fontSize='1rem'
            width="300px"
          ></Button> 
        </RowButton>
        </Box>
      </Container>
    );
  }