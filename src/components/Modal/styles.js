import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--background);
    border-radius: 10px;
    box-shadow: 24px;
    padding:16px 24px;
    max-height: 90vh;
    height: auto;
    overflow: scroll;
    scrollbar-width: thin; 
    scrollbar-color: #989898 #FFFFFF; 
    &::-webkit-scrollbar {
    width: 6px; 
    }
    &::-webkit-scrollbar-thumb {
    background-color: #989898; 
    border-radius: 4px; 
    }
    &::-webkit-scrollbar-track {
    background-color: #FFFFFF;
    }
    ` ;

export const Header  = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--txt-title);
    position: relative;
    padding-bottom: 8px;
    h1{
        font-weight: 600;
        font-size: 1rem !important;
        color: var(--txt-title);
        text-align: center;
    };
    img {
        height: 0.5rem;
        position: absolute;
        right: 0px;
        cursor: pointer;
        transition: transform .2s;
        &:hover {
            transform: scale(1.05);
          }
    }
` ;




