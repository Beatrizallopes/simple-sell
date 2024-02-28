import  { 
  useState,
  useContext, 
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
  import { createUser } from "../../services/repository/users";
  import LocalStorageService from '../../services/storage';
  import AppContext from "../../state/App.context";

export default function RegisterUser(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const fontSize = 16;
  let navigate = useNavigate();
  const localStorageService = LocalStorageService();
  const [, setSnack] = useContext(AppContext).snackState;

  function verifyPasswords(){
    try{
      let passwordsMatch = false;
      if(password === confirmPassword){
        passwordsMatch = true;
      }
      return passwordsMatch;
    } catch(err){
      console.log(err);
    }
  }

  async function registeringUser(){
    try{
      setLoading(true);
      if(email !== '' && password !== '' && confirmPassword !== ''){
        if(verifyPasswords()){
          const response = await createUser(email, password);
          if(response.success){
            setSnack({
              open: true,
              severity: 'success', 
              message:response?.message,
            });
            navigate('/');
          } else {
            setSnack({
              open: true,
              severity: 'error', 
              message:response?.message,
            })
          }
        } else {
          setSnack({
            open: true,
            severity: 'error', 
            message:'As senhas devem ser iguais',
          })
        }
      } else {
        setSnack({
          open: true,
          severity: 'error', 
          message:'Todos os campos devem ser preenchidos',
        })
      }
      
      
    } catch(err){
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

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
            onClick={()=> {registeringUser()}}
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