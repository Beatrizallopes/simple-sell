/* eslint-disable react/prop-types */
import { Container, Label} from './styles';
import TextField from '@mui/material/TextField';

export default function CustomizedTextfield({ label, width, disabled, fontSize, value, multiline, onChange, password}){

    return (
        <Container>
            <Label style={{fontSize:fontSize}}>{label}:</Label>
            <TextField  
                variant="outlined" 
                size="small"
                disabled={disabled}
                value={value}
                multiline={multiline}
                rows={4}
                onChange={(event)=> onChange(event.target.value)}
                type={password ? "password" : "text"}
                sx={{ 
                    borderRadius:'10px', 
                    border: '0.2px solid #8E92BC',
                    '& input': {
                                color: 'white',
                                fontFamily:'Nunito',
                                fontSize: fontSize,
                            }
                    }}
                style={{
                    width: width,
                    color: 'white',
                    background:'transparent',
                    fontSize: fontSize
                    }} />
        </Container>
    )
}