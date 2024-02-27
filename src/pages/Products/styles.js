import styled from 'styled-components';

export const Container = styled.div`
background: var(--background);
height: 100vh;
width: 95%;
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

