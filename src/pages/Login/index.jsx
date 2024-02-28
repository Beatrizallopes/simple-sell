import  { 
  useState,
  // useContext, 
  useEffect
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
  import LocalStorageService from '../../services/storage';
  // import AppContext from "../../state/App.context";

export default function Login(){
  // const { authenticateUser } = UseUsers();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const fontSize = 16;
  let navigate = useNavigate();

  const localStorageService = LocalStorageService();
  // const [, setSnack] = useContext(AppContext).snackState;
  const token = localStorageService.getIdToken();

  useEffect(()=>{
    if(token){
      navigate('/products');
    }
  })

  async function verifyingCredentials(){
    try{
      // const responseLogin = await authenticateUser({e_mail: email, user_password: password});
      const responseLogin = {
        success: true,
        data: {
          token: '123'
        },
        message: 'Login efetuado com sucesso!',
      }
      if(responseLogin.success){
       await Promise.all([
          localStorageService.setToken({ token: responseLogin?.data?.token }),
          localStorageService.setUserInfo({
            email,
          }),
        ]);
        navigate('/products');
        // setSnack({
        //   open: true,
        //   severity: 'success', 
        //   message:responseLogin?.message,
        // });
      } else {
        // setSnack({
        //   open: true,
        //   severity: 'error', 
        //   message:responseLogin?.message,
        // })
      }
    } catch(err){
      console.log(err);
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
            width={400}
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
              width={400}
              disabled={false} 
              value={password} 
              fontSize={fontSize} 
              onChange={setPassword}
              multiline={false}
              password={true}
            ></Textfield>
        </Row>
        <RowButton>
          <Button
            label="Entrar no sistema" 
            background="var(--blue)" 
            color="var(--background)" 
            borderColor="var(--blue)" 
            disabled={false} 
            onClick={()=> {verifyingCredentials()}}
            fontSize='1rem'
          ></Button>
        </RowButton>
        <RowButton style={{ marginTop: '4%'}}>
          <Button
            label="Cadastrar usuário" 
            background="var(--background)" 
            color="var(--txt-title)" 
            borderColor="var(--txt-title)" 
            disabled={false} 
            onClick={()=> { navigate('/register')}}
            fontSize='1rem'
          ></Button> 
        </RowButton>
        </Box>
      </Container>
    );
  }