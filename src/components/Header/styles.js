import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    ` ;

export const Title = styled.h1 `
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 150%;
    color: var(--txt-title);
    text-align: left;
`;

export const Subtitle = styled.h2 `
    font-weight: 500;
    font-size: 1rem;
    line-height: 180%;
    color: var(--txt-subtitle);
    text-align: left;
`;