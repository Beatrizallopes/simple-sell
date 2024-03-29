import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: var(--box-background);
  height: 100vh;
  // width: ${({ expanded }) => (expanded ? '15rem' : '5rem')};
  display: flex;
  flex-direction: column;
  justify-content: left;
  z-index: 10;
  padding-top: 24px;
  transition: width 0.5s ease-in-out;
  @media (max-width: 768px) {
    position: absolute;
    width: 100vw;
    height: 5rem;
    bottom: 0px;
    flex-direction: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    align-items: center;
  }
`;


export const NavLink = styled(Link)`
  white-space: nowrap;
  width: 100%;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  font-weight: 600;
  line-height: 150%;
  border-radius: 10px;
  color: var(--txt-subtitle);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  text-decoration: none;
  font-size: 1rem !important;
  text-align: left;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: transform .2s;
  transition: width 0.5s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  &.active {
    background: var(--active);
    color: var(--txt-body);
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;

  }
`;


export const NavIcon = styled.img`
  width: 24px;
  margin-right: 8px;
  fill: #FFFFFF;
  filter: ${props => `invert(${props.theme.textColor})`}; 
`;


export const LogoArea = styled.div`
  display: flex;
  width: 100%;
  align-itens: center;
  justify-content: center;
  @media (max-width: 768px) {
    height: 0px;
    width: 0px;
  }
`;

export const LogoImgExpanded = styled.img`
  width: 48px;
  cursor: pointer;
  transition: transform .2s;
  &:hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 768px) {
    display: none;
   }
`;

export const LogoImg = styled.img`
  height: 36px;
  cursor: pointer;
  transition: transform .2s;
  &:hover {
    transform: scale(1.05);
  }
   @media screen and (max-width: 768px) {
      display: none;
     }
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 48px;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    margin-top: 0px;
    justify-content: space-between;
  }
`;

