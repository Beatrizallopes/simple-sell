import styled from 'styled-components';

export const Container = styled.div`
background: var(--background);
height: 100%;
width: 100%;
padding: 32px;
overflow-y: auto;
@media (max-width: 768px) {
  padding-bottom: 5rem;
}
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
@media (max-width: 768px) {
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
}
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
@media (max-width: 768px) {
  grid-template-columns: 1fr;

}
`;

export const ProductBox = styled.div`
    position: relative;
    background-color: var(--box-background);
    width: 100%;
    border-radius: 1rem;
    height:100px;
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    padding: 1rem 1.5rem;

`;

export const Name = styled.h1`
    font-weight: 600;
    font-size: 0.9rem;
    color: var(--txt-title);
    text-align: left;
    margin-bottom: 0.2rem;
` ;

export const Price = styled.h1`
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--blue);
    text-align: left;
    margin-bottom: 0.3rem;
` ;

export const Stock = styled.h1`
    font-weight: 500;
    font-size: 0.6rem;
    color: var(--txt-title);
    text-align: left;
` ;

export const ProductIcon = styled.img`
  width: 48px;
`;

export const ProductInfo= styled.div`
    height:100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
`;

export const RemoveIcon = styled.img`
  height: 1rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  transition: transform .2s;
    &:hover {
      transform: scale(1.03);
    }
`;
export const EditIcon = styled.img`
  height: 1rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  transition: transform .2s;
    &:hover {
      transform: scale(1.03);
    }
`;
