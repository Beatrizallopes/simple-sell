/* eslint-disable react/prop-types */

import { Container} from './styles';
import TextField from '@mui/material/TextField';
import {Search} from '../../assets/icons/index';

export default function Searchbar({ width, disabled, fontSize, value, placeholder, onChange}){
    return (
        <Container>
            <TextField  
                type="search"
                variant="outlined" 
                size="small"
                disabled={disabled}
                value={value}
                onChange={(event)=> onChange(event.target.value)}
                placeholder={placeholder}
                style={{
                    width: width,
                    color: 'var(--txt-title)',
                    background:'var(--box-background)',
                    fontSize: fontSize
                    }} 
                sx={{ 
                    borderRadius:'10px', 
                    border: '0.2px solid #9C9CA4',
                    '& input': {
                                color: 'var(--txt-title)',
                                fontFamily:'Nunito',
                                fontSize: fontSize,
                            }
                    }}
                InputProps={{
                    startAdornment: (
                        <img src={Search} alt="Search"  style={{marginRight:12, width:fontSize}}></img>
                    ),
                    }}>
                    </TextField>
        </Container>
    )
}