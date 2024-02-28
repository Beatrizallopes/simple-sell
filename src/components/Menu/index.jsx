/* eslint-disable react/prop-types */
import {
  useState, 
  // useEffect
} from "react";
import {Logo, LogoExpanded, LogoSmall, Logout} from '../../assets/images/index';
import {Products, ProductsSelected} from '../../assets/icons/index';
import {
  Nav,
  // NavExpanded,
  NavIcon,
  NavLink,
  NavMenu,
  LogoArea,
  // LogoImg,
  LogoImgExpanded,
} from './styles';
import LocalStorageService from '../../services/storage';
import { Tooltip } from "@material-ui/core";


function getCurrentURL () {
  return window.location.href
}

export function Menu() {
  const [menuExpanded, setMenuExpanded] = useState(false);
  const [selectedPage, setSelectedPage] = useState(0);
  const LogoToShow = menuExpanded ? LogoExpanded : LogoSmall;
  const localStorageService = LocalStorageService();
  const isAuthenticated = !!localStorage.getItem('token');

  const url = getCurrentURL();

  const pages = [
    
    {
      label: 'Produtos',
      icon: Products,
      iconSelected: ProductsSelected,
      path: '/products',
    },
  ]


  function MenuItem({page, index}){
    if(url.includes(page.path)){
      return(
        <Tooltip title={menuExpanded ? '' : page.label}>
        <NavLink to={page.path} onClick={()=>setSelectedPage(index)}  >
            <NavIcon src={page.iconSelected } alt={page.label}></NavIcon>
            {menuExpanded && page.label}
        </NavLink>
        </Tooltip>
      )
    } else {
      return(
        <Tooltip title={menuExpanded ? '' : page.label}>
        <NavLink to={page.path} onClick={()=>setSelectedPage(index)}  >
          <NavIcon src={page.icon} alt={page.label}></NavIcon>
          {menuExpanded && page.label}
        </NavLink>
      </Tooltip>
      )
    }
    
  }
  
  function LogoutItem(){
    if(menuExpanded){
      return(
        <NavLink to={'/'} onClick={()=>{localStorageService.logout(); setSelectedPage(pages.length)}} key="Logout" >
          <NavIcon src={Logout} alt="logout"></NavIcon>
          Sair
        </NavLink>
      )
    } else {
      return(
        <Tooltip title="Sair">
        <NavLink to={'/'} onClick={()=>{localStorageService.logout(); setSelectedPage(pages.length)}} key="Logout" >
          <NavIcon src={Logout} alt="logout"></NavIcon>
        </NavLink>
        </Tooltip>
      )
    }

  }

  return (
    <Nav style={{display: isAuthenticated ? 'flex': 'none' }} expanded={menuExpanded} >
      <LogoArea>
        <LogoImgExpanded src={LogoToShow} onClick={()=>setMenuExpanded(!menuExpanded)} alt='logo' />
      </LogoArea>
      <NavMenu>
      {
      pages.map((page, index)=>{
        return (
        <MenuItem page={page} index={index} key={page.label}></MenuItem>
        )
      })
      }
    </NavMenu>
    <LogoutItem/>
   </Nav>
  )
}