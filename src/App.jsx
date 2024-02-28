import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
// import { useState } from 'react'
import './App.css'

// import ProtectedRoute from './routes/ProtectedRoute';
import styled from 'styled-components';
import Base from './Base';

import  Login  from './pages/Login/index';
import Products from "./pages/Products";
import RegisterUser from "./pages/RegisterUser";

const Root = styled.div`
  display: flex;
  flex-direction: row;
  background: var(--background);
  height: 100vh;
  width: 100%;
`;

Modal.setAppElement('#root');


export default function App() {
  return (
    <>
    <Router>
    <Base>
      <Root>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/products' element={<Products />} />
            <Route path='/register' element={<RegisterUser />} />
        </Routes>
        </Root>
        </Base>
    </Router>
<GlobalStyle /> 
</>
  )
}

