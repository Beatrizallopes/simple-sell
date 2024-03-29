/* eslint-disable react/prop-types */
import { 
  useEffect,
  // FormEvent, 
  useState, 
  useContext
} from "react";
import Button from "../../../components/Button";
import Textfield from "../../../components/Textfield";
import {Container, Header, Row, Content} from './styles';
import Modal from '@mui/material/Modal';
import {Close} from '../../../assets/icons/index';
import Spinner from "../../../components/Spinner";
import Numberfield from "../../../components/Numberfield";
import Autocomplete from "../../../components/Autocomplete";
import AppContext from "../../../state/App.context";
import { getProductById, updateProduct} from "../../../services/repository/products";

const categories = [
  {
    id: 'eletrônicos',
    label: 'Eletrônicos'
  },
  {
    id: 'moda',
    label: 'Moda'
  },
  {
    id: 'casa',
    label: 'Casa'
  },
]

export default function ModalEditProduct({open, handleOpen, width, height, id, products, setProducts}){
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [category, setCategory] = useState(categories[0])
    const fontSize = 14;
    const [loading, setLoading] = useState(true);
    const isMobile = window.innerWidth < 768;
    const [, setSnack] = useContext(AppContext).snackState;

    const title = 'Editar produto';

  function checkingRequiredFields() {
    if (name === '' || !price  || !stock || !category.id ) {
      setSnack({
        open: true,
        severity: 'error', 
        message: 'Preencha todos os campos necessários!',
      });
      return false;
    }
    return true;
  }

   async function settingDefaultStates(){
    try{
      let response = await getProductById(id);
      if(response.status === 200){
        const productInfo = response?.data;
        setName(productInfo?.name);
        setPrice(productInfo?.price);
        setStock(productInfo?.stock);
        let categoryIndex = categories.findIndex((element)=> element?.id === productInfo?.category);
        setCategory(categories[categoryIndex]);
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
    if(open) settingDefaultStates();
  }, [open])

    async function handleEditProduct(event){
      try{
        setLoading(true);
        event.preventDefault();
        if(checkingRequiredFields()){
          const response = await updateProduct(
              {
              id,
              name,
              price,
              stock,
              category: category.id
          }
          );
          if(response.status === 200){
              let newProducts = [...products];
              let productIndex = products.findIndex((element)=> element.id === id);
              newProducts[productIndex] = {
                id,
                name,
                price,
                stock,
                category: category.id
              };
              setProducts([...newProducts])
              handleOpen(false);
              setSnack({
                open: true,
                severity: 'success', 
                message:'Produto editado com sucesso!',
              })
          } else {
            setSnack({
              open: true,
              severity: 'error', 
              message:'Ocorreu um erro na edição. Tente novamente ou entre em contato com a equipe técnica.',
            })
          }
      }
      } catch(err){
        console.log(err);
      } finally{
        setLoading(false);
      }

        
     }

     function renderContent(){
        if(loading){
          return (
            <Spinner width={40} fontSize={14}></Spinner>
          )
        } else {
            return(
            <Content>
                <Row>
                    <Textfield
                    label="Nome do produto"
                    width={isMobile ? '100%': 400}
                    disabled={false} 
                    value={name} 
                    fontSize={fontSize} 
                    onChange={setName}
                    multiline={false}
                    ></Textfield>
                </Row>
                <Row>
                <Autocomplete
                  value={category}
                  width={isMobile ? '100%': 400}
                  disabled={false}
                  options={categories}
                  fontSize={fontSize} 
                  label="Categoria"
                  onChange={setCategory}
              ></Autocomplete>
                </Row>
                <Row>
                <Numberfield
                  label="Preço (R$)"
                  disabled={false}
                  width={'90%'}
                  value={price} 
                  fontSize={fontSize} 
                  onChange={(item) => setPrice(item)}
                ></Numberfield>
                  <Numberfield
                  label="Qtd. no estoque"
                  disabled={false}
                  width={'90%'}
                  value={stock} 
                  fontSize={fontSize} 
                  onChange={(item) => setStock(item)}
                ></Numberfield>
                </Row>
                <Row>
                    <Button
                    label="Cancelar" 
                    background="var(--txt-subtitle)" 
                    color="var(--background)" 
                    borderColor="var(--txt-subtitle)"
                    disabled={false} 
                    onClick={()=> handleOpen(false)}
                    fontSize="0.8rem"
                    ></Button>
                    <Button
                    label="Salvar produto" 
                    background="var(--blue)" 
                    color="var(--background)" 
                    borderColor="var(--blue)" 
                    disabled={false} 
                    onClick={handleEditProduct}
                    fontSize="0.8rem"
                    ></Button>
                </Row>
        </Content>
            )
            
        }}

    return (
        <Modal
        open={open}
        onClose={() => handleOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Container style={{width, height}}>
          <Header>
          <h1>
            {title}
          </h1>
          <img src={Close} onClick={()=> handleOpen(false)} alt="Fechar"></img>
          </Header>
          {renderContent()}
 
        </Container>
      </Modal>
       )
  }