const products =  [
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

export const getProducts = async () => {
    try {
    //   const response = await api.get('/products');
      const response = {
        success : true,
        data: [... products]
      }
      return response;
    } catch (err) {
      console.log('[getProducts]', err?.response);
    }
    return null;
  };

  export const getProductById = async (id) => {
    try {
        let productIndex = products.findIndex((product)=> product.id === id);
        const product = products[productIndex];
    //   const response = await api.get('/products');
      const response = {
        success : true,
        data:  product,
      }
      return response;
    } catch (err) {
      console.log('[getProductById]', err?.response);
    }
    return null;
  };

  export const createProduct = async (product) => {
    try {
    //   const response = await api.post('/products', {...product});   
    const response = {
        success : true,
        message: 'Produto adicionado com sucesso!',
    }
     return response;
    } catch (err) {
      console.log('[createProduct]', err?.response);
    }
    return null;
  };

  export const updateProduct = async (product) => {
    try {
    //   const response = await api.put('/products/?id=' + product?.id, {...product});   
    const response = {
        status: 201,
        message: 'Produto editado com sucesso!',
    }
     return response;
    } catch (err) {
      console.log('[updateProduct]', err?.response);
    }
    return null;
  };