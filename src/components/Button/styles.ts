import styled from 'styled-components';

export const Button = styled.button`
    border-radius: 10px;
    border: none;
    box-shadow: none;
    width: auto;
    padding: 8px 16px;
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    margin-right: 8px;
    font-size:0.7rem;
    white-space: nowrap;
    transition: transform .2s;
    &:hover {
        transform: scale(1.05);
      }
    ` ;
export const Icon = styled.img`
    position: absolute;
    left: 16px;
    ` ;

