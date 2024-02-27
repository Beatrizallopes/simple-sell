
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
