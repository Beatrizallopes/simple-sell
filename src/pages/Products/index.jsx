/* eslint-disable react/prop-types */
import { useEffect, useState, useContext } from 'react';
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
import { getProducts } from '../../services/repository/products';
import AppContext from "../../state/App.context";

function Products(){
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [openModalAddProduct, setOpenModalAddProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({open: false, mode: '', info: {}});
  const isMobile = window.innerWidth < 768;
  const [, setSnack] = useContext(AppContext).snackState;

  let productsToShow = [...products];

  if(search.length > 0){
    productsToShow = productsToShow.filter(a => a.name.toLowerCase().includes(search.toLowerCase()));
  }

  async function gettingProducts(){
    try{
      const response = await getProducts();
      if(response.success){
        setProducts(response?.data);
      } else {
        setSnack({
          open: true,
          severity: 'error', 
          message:response?.message,
        })
      }
    } catch(err){
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    gettingProducts()
  }, [])


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
        {/* <Tooltip title='Deletar produto'>
          <RemoveIcon 
          src={Delete}
          onClick={()=>setSelectedProduct({
            open: true,
            mode: 'delete',
            info: {...product}
          })}
          ></RemoveIcon>
        </Tooltip> */}
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
          products={products}
          setProducts={setProducts}
         ></ModalAddProduct>
        <ModalEditProduct 
          open={selectedProduct.open} 
          handleOpen={setSelectedProduct} 
          width={700} 
          height={330} 
          id={selectedProduct?.info?.id}
          products={products}
          setProducts={setProducts}
         ></ModalEditProduct>
      </Container>
    );
  }

  // export default React.createElement(Products);
  export default Products;