
export function formatMoney(value) {
    const formattedValue = parseFloat(value).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      currency: 'BRL'
    });
    return `R$ ${formattedValue}`;
  }

  export function formatNumber(value) {
    const formattedValue = parseFloat(value).toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      currency: 'BRL'
    });
    return `${formattedValue}`;
  }

  export function generateToken(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let token = '';
    for (let i = 0; i < length; i++) {
      token += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log(token)
    return token;
  }
