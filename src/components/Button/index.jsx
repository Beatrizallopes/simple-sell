/* eslint-disable react/prop-types */
import {Button} from './styles';

export default function CustomizedButton({label, background, color, disabled, borderColor, onClick, fontSize}){

    return (
    <Button
     style={{
        background,
        color,
        border: '1px solid ' + borderColor,
        paddingLeft: 16,
        cursor: disabled ? 'default' : 'pointer',
        fontSize: fontSize ? fontSize : '0.7rem',
        }}
        disabled={disabled}
        onClick={onClick}
        > {label}</Button> 
    )
}