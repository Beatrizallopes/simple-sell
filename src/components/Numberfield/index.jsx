/* eslint-disable react/prop-types */

import { Container, Label} from './styles';
import TextField from '@mui/material/TextField';

export default function CustomizedNumberfield({ label, width, disabled, fontSize, value, onChange}){

    return (
        <Container>
            <Label style={{fontSize:fontSize}}>{label}:</Label>
            <TextField  
                variant="outlined" 
                size="small"
                type="number"
                disabled={disabled}
                value={value}
                onChange={(event)=> onChange(Number(event.target.value))}
                sx={{ 
                    borderRadius:'10px', 
                    border: '0.2px solid var(--txt-subtitle)',
                    '& input': {
                                color: 'var(--txt-title)',
                                fontFamily:'Nunito',
                                fontSize: fontSize,
                            }
                    }}
                style={{
                    width: width,
                    color: 'var(--txt-title)',
                    background:'var(--box-background)',
                    fontSize: fontSize
                    }} />
        </Container>
    )
}