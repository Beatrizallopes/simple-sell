import styled from 'styled-components';

export const Container = styled.div`
background: var(--background);
height: 100%;
width: 100%;
padding: 32px;
overflow-y: auto;
`;

export const Content = styled.div`
height: auto;
width: 100%;
margin-top: 18px;
display: flex;
flex-direction: column;
align-items: end;
justify-content: end;
`;

export const Row = styled.div`
width: auto;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;

export const SectionTitle = styled.h1`
    width: 100%;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;
    color: var(--txt-title);
    text-align: left;
    border-bottom: 0.5px solid var(--txt-subtitle);
` ;

export const Section = styled.div`
height: auto;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
`;

export const ProductsList = styled.div`
width: 100%;
display: grid;
margin-top: 1rem;
grid-template-columns: 1fr 1fr 1fr 1fr;
row-gap: 0.8rem;
column-gap: 0.8rem;
`;

export const ProductBox = styled.div`
    background-color: var(--box-background);
    width: 100%;
    border-radius: 1rem;
    height:100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
`;

export const Name = styled.h1`
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--txt-title);
    text-align: left;
` ;

export const Price = styled.h1`
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--blue);
    text-align: left;
` ;

export const ProductIcon = styled.img`
  width: 48px;
  cursor: pointer;
  transition: transform .2s;
  margin-right: 1rem;
  &:hover {
    transform: scale(1.05);
  }
`;

export const ProductInfo= styled.div`
    height:100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
`;