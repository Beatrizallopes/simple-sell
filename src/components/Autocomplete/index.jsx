/* eslint-disable react/prop-types */

import { Container, Label} from './styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function CustomizedAutocomplete({value, width, options, disabled, label, fontSize, onChange}){

    return (
        <Container>
             <Label style={{fontSize:fontSize}}>{label}:</Label>
            <Autocomplete
                value={value.label}
                autoComplete
                autoSelect
                disableClearable
                disabled={disabled}
                disablePortal
                id="customized-autocomplete"
                options={options}
                size="small"
                onChange={(event, value)=> {
                    onChange(value);
                }}
                sx={{ 
                    width: width, 
                    background:'var(--box-background)', 
                    borderRadius:'10px', 
                    border: '0.2px solid var(--txt-subtitle)',
                    '& input': {
                              color: 'var(--txt-title)',
                              fontFamily:'Nunito',
                              fontSize:'0.7rem',
                          }
                 }}
                renderInput={(params) => <TextField {...params} variant="outlined" style={{color: '#var(--txt-title)'}} />}
                loadingText="Carregando..."
                noOptionsText="Nenhuma opção carregada"
            />
        </Container>
    )
}