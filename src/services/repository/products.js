import api from "../api";

export const getProducts = async () => {
    try {
      const response = await api.get('/products');
      return response;
    } catch (err) {
      console.log('[getProducts]', err?.response);
    }
    return null;
  };

  export const getProductById = async (id) => {
    try {
      const response = await api.get('/products/' + id);
      return response;
    } catch (err) {
      console.log('[getProductById]', err?.response);
    }
    return null;
  };

  export const createProduct = async (product) => {
    try {
      const response = await api.post('/products', {...product});   
     return response;
    } catch (err) {
      console.log('[createProduct]', err?.response);
    }
    return null;
  };

  export const updateProduct = async (product) => {
    try {
      const response = await api.put('/products/' + product?.id, {...product});   
     return response;
    } catch (err) {
      console.log('[updateProduct]', err?.response);
    }
    return null;
  };