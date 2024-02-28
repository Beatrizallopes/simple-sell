import axios from 'axios';
import LocalStorageService from './storage';
import { useNavigate } from "react-router-dom";

const localStorageService = LocalStorageService();

let retry = false;

const api = axios.create({
    baseURL: 'http://localhost:3000',
    // params: {
    //     token: localStorageService.getIdToken(),
    // }
});


// api.interceptors.request.use(
//   (config) => {
//     const tokenToUse =  localStorageService.getIdToken();
//     if(!config.params.token){
//       config.params = {
//         token: tokenToUse,
//       }
//     }
//     config.data = {
//       ...config.data,
//       token:  tokenToUse,
//     };
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

//   api.interceptors.response.use(
//     (response) => response,
//     async (err) => {
//       const originalRequest = err.config;
//       if (err.response.status === 500) {
//         retry = false;
//       }
  
//       if (err.response.status === 401) {
//         localStorageService.logout();
//         let navigate = useNavigate();
//         navigate('/');
//         retry = false;
//       }
  
//       return err.response;
//     },
//   );

export default api;