
import api from "../api";
import { generateToken } from "../functions";

export const createUser = async (email, password) => {
    try {
      const token = generateToken(10);
      const response = await api.post('/users', {email, password,token});    
     return response;
    } catch (err) {
      console.log('[createUser]', err?.response);
    }
    return null;
  };

  export const authenticateUser = async (email, password) => {
    try {
      let response = await api.get('/users');
      if(response.status === 200){
        const users = response?.data;
        const index = users.findIndex((element) =>  element.email === email && element.password === password);
        if(index !== -1){
          const user = users[index];
          response =  {
            status: 200,
            data: user,
          }
        } else {
          response = {
            status: 404,
            message: "O usuário não está cadastrado no sistema"
          }
        }
       
      } else {
        response = {
          status: 404,
          message: "Erro ao buscar usuários."
        }
      }
      return response;
    } catch (err) {
      console.log('[authenticateUser]', err?.response);
    }
    return null;
  };