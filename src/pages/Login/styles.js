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
padding: 3%;
border-radius:10px;
display: flex;
flex-direction: column;
align-items: center;
@media (max-width: 768px) {
  width: 90%;
}
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
  @media (max-width: 768px) {
    height: 10rem;
  }
`;

export const Row = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    // @media (max-width: 768px) {
    //   width: 100%;
    // }
`;

export const RowButton = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8%;
`;


