/* eslint-disable react/prop-types */
// import React, {useContext, useEffect} from 'react';
// import Snackbar from '@material-ui/core/Snackbar';
// import MuiAlert from '@material-ui/lab/Alert';
// import AppContext from '../state/App.context';
import { red } from '@material-ui/core/colors';
import { Menu } from '../components/Menu';
// import './Base.css';

// function Alert(props){
//     return <MuiAlert elevation={6} variant="filled" {...props}/>
// }

function Base({children}){
    // const [snack, setSnack] = useContext(AppContext).snackState;

    // const handleClose = (event, reason) => {
    //     if(reason === 'clickaway'){
    //         return;
    //     };
    //     setSnack({
    //         ... snack,
    //         open: false,
    //     })
    // }

    return (
        <div style={{
            display: 'flex', 
            flexDirection:'row', 
            alignItems:'center', 
            justifyContent:'space-between', 
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden',}}>
            <Menu></Menu>
            {children}
            {/* <Snackbar open={snack.open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={snack.severity}>
                    {snack.message}
                </Alert>
            </Snackbar> */}
        </div>
    )
}

export default Base;