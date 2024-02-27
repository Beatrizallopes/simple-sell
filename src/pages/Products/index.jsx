import React, { useState } from 'react';
import Header from '../../components/Header';
import {
   Container, Content, Row,
  } from './styles';
  // import { UseProducts } from '../../hooks/useProducts';
  // import Table from '../../components/Table';
  import Spinner from '../../components/Spinner';
  import Searchbar from "../../components/Searchbar";
  import Button from "../../components/Button";
  // import Drawer from "../../components/Drawer";
  // import Datepicker from "../../components/Datepicker";
//  import moment from 'moment';


function Products(){
  // const { products, loading} = UseProducts();
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);


  let productsToShow = [...products];
  // productsToShow = productsToShow && productsToShow.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  // if(search.length > 0){
  //   productsToShow = productsToShow.filter(a => a.e_mail.toLowerCase().includes(search.toLowerCase()));
  // }
  // if(filters?.startDate !== '' && filters?.endDate !== '' ){
  //   const startDate = moment(filters?.startDate, 'YYYY-MM-DD');
  //   const endDate = moment(filters?.endDate, 'YYYY-MM-DD');
  //   productsToShow = productsToShow.filter((log) => {
  //     return verifyInterval(startDate, endDate, moment(log.created_at, 'YYYY-MM-DD')) 
  //   });
  // }

  function renderContent(){
    if(loading){
      return (
        <div style={{width:'100%', height:300}}>
        <Spinner width={40} fontSize={14}></Spinner>
        </div>
      )
    } else {
      return (
       <></>
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
              onClick={()=> {}}
              fontSize="1rem"
              ></Button>
          <Searchbar 
            value={search} 
            onChange={setSearch} 
            disabled={false}
            width={300} 
            placeholder="Buscar produto..." 
            fontSize={'1rem'} 
            ></Searchbar>
          </Row>
          {renderContent()};
        </Content>
      </Container>
    );
  };

  // export default React.createElement(Products);
  export default Products;