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
`;


export const NavLink = styled(Link)`
  white-space: nowrap;
  width: 90%;
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
  font-size: 0.8rem !important;
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
`;

export const LogoImgExpanded = styled.img`
  width: 48px;
  cursor: pointer;
  transition: transform .2s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const LogoImg = styled.img`
  height: 36px;
  cursor: pointer;
  transition: transform .2s;
  &:hover {
    transform: scale(1.05);
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

