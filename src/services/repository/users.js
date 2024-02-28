
export const createUser = async (user) => {
    try {
    //   const response = await api.post('/users', {...user});    
      const response = {
        success: true,
        message: 'Usuário criado com sucesso!'
      }
     return response;
    } catch (err) {
      console.log('[createUser]', err?.response);
    }
    return null;
  };

  export const authenticateUser = async (user, password) => {
    try {
      const payload = {user, password};
    //   const response = await api.post('/login', payload);
      const response = {
        success: true,
        data: {
          token: '123'
        },
        message: 'Login efetuado com sucesso!',
      }
      return response;
    } catch (err) {
      console.log('[authenticateUser]', err?.response);
    }
    return null;
  };