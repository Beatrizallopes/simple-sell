import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--box-background);
    border-radius: 10px;
    box-shadow: 24px;
    padding:16px 24px;
    max-height: 90vh;
    height: auto !important;
    width: auto !important;
    @media (max-width: 768px) {
        width: 90% !important;
      }
    ` ;

export const Header  = styled.div`
    width: 100%;
    height: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid var(--txt-subtitle);
    position: relative;
    padding-bottom: 0.25rem;
    h1{
        font-weight: 600;
        font-size: 1rem !important;
        color: var(--txt-title);
        text-align: center;
    };
    img {
        // height: 0.8rem;
        width: 0.8rem;
        position: absolute;
        right: 0px;
        cursor: pointer;
        transition: transform .2s;
        &:hover {
            transform: scale(1.05);
          }
    }
` ;

export const Content = styled.div`
height: auto;
width: 100%;
padding: 9px 12px;
display: flex;
flex-direction: column;
overflow: auto;
// align-items: end;
// justify-content: end;
`;

export const Row = styled.div`
width: auto;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-top: 16px;
// padding-left: 16px;
`;

