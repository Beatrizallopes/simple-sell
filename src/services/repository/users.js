
export const createUser = async (user) => {
    try {
    //   const response = await api.post('/users', {...user});    
      const response = {
        status: 201,
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
        status: 200,
        data: {
          token: 'token123',
        }
      }
      return response;
    } catch (err) {
      console.log('[authenticateUser]', err?.response);
    }
    return null;
  };