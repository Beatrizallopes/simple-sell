/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Header from '../../components/Header';
import {
   Container, Content, Row, SectionTitle, Section, ProductsList, ProductBox, Name, ProductIcon, Price, ProductInfo, Stock, EditIcon, RemoveIcon
  } from './styles';
import Spinner from '../../components/Spinner';
import Searchbar from "../../components/Searchbar";
import Button from "../../components/Button";
import { Eletronics, Fashion, House, Edit, Delete} from '../../assets/icons';
import { formatMoney } from '../../services/functions';
import ModalAddProduct from './ModalAddProduct/index';
import ModalEditProduct from './ModalEditProduct/index';
import Tooltip from '@mui/material/Tooltip';


const productsMocked = [
  {
    id: 1,
    name: 'Iphone 11',
    price: 5000,
    stock: 13,
    lastUpdated: new Date(),
    createdAt: new Date(),
    category: 'eletrônicos'
  },
  {
    id: 2,
    name: 'Iphone 12',
    price: 7000,
    stock: 30,
    lastUpdated: new Date(),
    createdAt: new Date(),
    category: 'eletrônicos'
  },
  {
    id: 3,
    name: 'Aspirador de pó',
    price: 800,
    stock: 2,
    lastUpdated: new Date(),
    createdAt: new Date(),
    category: 'casa'
  },
  {
    id: 4,
    name: 'Air Fryer',
    price: 1200,
    stock: 100,
    lastUpdated: new Date(),
    createdAt: new Date(),
    category: 'casa'
  },  
  {
    id: 5,
    name: 'Salto alto',
    price: 200,
    stock: 15,
    lastUpdated: new Date(),
    createdAt: new Date(),
    category: 'moda'
  },
  {
    id: 6,
    name: 'Bolsa azul',
    price: 200,
    stock: 15,
    lastUpdated: new Date(),
    createdAt: new Date(),
    category: 'moda'
  },
  {
    id: 7,
    name: 'Boné',
    price: 200,
    stock: 15,
    lastUpdated: new Date(),
    createdAt: new Date(),
    category: 'moda'
  },
]


function Products(){
  const [products, setProducts] = useState(productsMocked)
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [openModalAddProduct, setOpenModalAddProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({open: false, mode: '', info: {}});
  const isMobile = window.innerWidth < 768;

  let productsToShow = [...products];

  if(search.length > 0){
    productsToShow = productsToShow.filter(a => a.name.toLowerCase().includes(search.toLowerCase()));
  }

  function Product({product}){
    let icon = Eletronics;
    if(product?.category === 'moda'){
      icon = Fashion;
    }
    if(product?.category === 'casa'){
      icon = House;
    }
    return (
      <ProductBox>
        <ProductIcon src={icon}></ProductIcon>
        <Tooltip title='Editar produto'>
          <EditIcon 
            src={Edit} 
            onClick={()=>setSelectedProduct({
            open: true,
            mode: 'edit',
            info: {...product}
          })}
          ></EditIcon>
        </Tooltip>
        <Tooltip title='Deletar produto'>
          <RemoveIcon 
          src={Delete}
          onClick={()=>setSelectedProduct({
            open: true,
            mode: 'delete',
            info: {...product}
          })}
          ></RemoveIcon>
        </Tooltip>
        <ProductInfo>
          <Name>{product?.name}</Name>
          <Price>{formatMoney(product?.price)}</Price>
          <Stock> Restam {product?.stock} produtos</Stock>
        </ProductInfo>
      </ProductBox>
    )
  } 

  function renderContent(){
    if(loading){
      return (
        <div style={{width:'100%', height:300}}>
        <Spinner width={40} fontSize={14}></Spinner>
        </div>
      )
    } else {
      return (
       <Section>
       <SectionTitle>Lista de produtos cadastrados</SectionTitle>
       <ProductsList>
        {
          productsToShow.map((product)=>{
            return (
              <Product product={product} key={product?.id}></Product>
            )
          })
        }

       </ProductsList>
       </Section>
      )
    }
  }

    return (
      <Container>
        <Header title="Produtos" subtitle="Gerencie todos os produtos cadastrados" />
        <Content>
          <Row>
          <Button 
              label="Adicionar produto" 
              background="var(--blue)" 
              color="var(--background)" 
              borderColor="var(--blue)" 
              disabled={false} 
              onClick={()=> {setOpenModalAddProduct(true)}}
              fontSize="0.8rem"
              width={isMobile ? 300: 200}
              ></Button>
          <Searchbar 
            value={search} 
            onChange={setSearch} 
            disabled={false}
            placeholder="Buscar produto..." 
            fontSize={'0.8rem'} 
            width={isMobile ? 300: 200}
            ></Searchbar>
          </Row>
          {renderContent()};
        </Content>
        <ModalAddProduct 
          open={openModalAddProduct} 
          handleOpen={setOpenModalAddProduct} 
          width={700} 
          height={330} 
         ></ModalAddProduct>
        <ModalEditProduct 
          open={selectedProduct.open} 
          handleOpen={setSelectedProduct} 
          width={700} 
          height={330} 
          product={selectedProduct.info}
         ></ModalEditProduct>
      </Container>
    );
  }

  // export default React.createElement(Products);
  export default Products;