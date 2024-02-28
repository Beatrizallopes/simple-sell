/* eslint-disable react/prop-types */
import { Container, Label } from './styles';
import CircularProgress from '@mui/material/CircularProgress';

export default function CustomizedSpinner({width, fontSize}){

    return (
        <Container>
              <CircularProgress
                sx={{
                    color: 'var(--blue)',
                    animationDuration: '1.5s',
                  }}
                  size={width}
              />
              <Label style={{fontSize: fontSize}}>Carregando...</Label>
        </Container>
    )
}