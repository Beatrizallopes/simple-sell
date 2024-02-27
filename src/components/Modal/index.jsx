
import React from 'react';
import Modal from '@mui/material/Modal';
import {Container, Header} from './styles';
import {Close} from '../../assets/icons/index';

export default function CustomizedModal({title,open, handleOpen, width, height, children}){
    return (
      <Modal
        open={open}
        onClose={() => handleOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Container style={{width, height}}>
          <Header>
          <h1>
            {title}
          </h1>
          <img src={Close} onClick={()=> handleOpen(false)} alt="Fechar"></img>
          </Header>
           {children}
        </Container>
      </Modal>
    )
}
