import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #161718;
        --box-background: #292D32;
        --white: #FFFFFF;
        --red: #FF4D5E;
        --green: #03A03E;
        --blue: #65BAB6;
        --grey: #8E92BC;
        --light-grey: #F5F5F7;
        --light-blue: #DCE4FF;
        --txt-title: #EBEBEB;
        --txt-subtitle: #7D7D7D;
        --txt-body: #EBEBEB;
        --shape:#ffffff;
    }
    *{
      margin:0;
      padding:0;
      box-sizing:border-box; 
    }

    /*font-size 16px (Desktop)*/  
    html{
        @media (max-width:1080px){
            font-size: 93.75%; /* 15px*/
        }

        @media (max-width:720px){
            font-size: 87.5%: /*14px*/
        }
    }
    /*REM ==> Medida. Retorna o tamanho do font-size da nossa página em 1rem */
    /*REM = 1rem = 16px */

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        font-family: 'Plus Jakarta Sans', sans-serif;
    }

    body, input, textarea, button {
        font-weigth: 400;
    }

    h1. h2. h3, h4, h5, h6, strong {
        font-weigth: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }


    .react-modal-overlay{
        background: rgba(0,0,0,0.5);
        position: fixed;
        top:0;
        bottom:0;
        right:0;
        left:0;

        display: flex;
        align-items: center;
        justify-content: center;



    }

    .react-modal-content{
        width:100%;;
        max-width: 576px;
        background:  var(--background);
        padding: 2rem;
        position: relative;
        border-radius: 0.25rem;

    }


    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }

    }
`