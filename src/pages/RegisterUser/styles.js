import styled from 'styled-components';

export const Container = styled.div`
height: 100%;
width: 100%;
background-size: cover;
background-repeat: no-repeat;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const Box = styled.div`
height: auto;
// border: 0.5px solid var(--txt-subtitle);
padding: 3%;
border-radius:10px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const LogoRow = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

export const LogoImg = styled.img`
  margin-bottom: 8%;
  transition: transform .2s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Row = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const RowButton = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8%;
`;


