/* eslint-disable react/prop-types */
import {Button} from './styles';

export default function CustomizedButton({label, background, color, disabled, borderColor, onClick, fontSize, width}){

    return (
    <Button
     style={{
        background,
        color,
        border: '1px solid ' + borderColor,
        paddingLeft: 16,
        cursor: disabled ? 'default' : 'pointer',
        fontSize: fontSize ? fontSize : '0.7rem',
        width: width ? width : 'auto',
        }}
        disabled={disabled}
        onClick={onClick}
        > {label}</Button> 
    )
}