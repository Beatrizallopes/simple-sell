import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
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

export const Username = styled.h1 `
    font-weight: 600;
    width: 100%;
    font-size: 0.8rem;
    color: var(--txt-title);
    text-align: right;
    margin-right: 0.8rem;
    margin-left: 0.8rem;
    white-space: nowrap;
    @media (max-width: 768px) {
        padding-top: 8px;
        }
`;

export const Row = styled.div`
    min-width: auto;
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    ` ;

export const Labels = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    @media (max-width: 768px) {
        padding-top: 8px;
        padding-left: 8px;
        }
    ` ;