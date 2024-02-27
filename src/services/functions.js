import moment from "moment";

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

  export function isValidCNPJ(cnpj) {
    if (typeof cnpj !== "string") return false;
    cnpj = cnpj.replace(/[^\d]+/g,'');
    if (cnpj.length !== 14) return false;
    if (/^(\d)\1+$/.test(cnpj)) return false;
  
    var size = cnpj.length - 2;
    var digits = cnpj.substring(size);
    var numbers = cnpj.substring(0, size);
    var sum = 0;
    var pos = size - 7;
    for (var i = size; i >= 1; i--) {
      sum += numbers.charAt(size - i) * pos--;
      if (pos < 2) pos = 9;
    }
    var result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    console.log("digit 1 expected: " + result + ", actual: " + digits.charAt(0));
    if (result != digits.charAt(0)) return false;
  
    size = size + 1;
    digits = cnpj.substring(size);
    sum = 0;
    pos = size - 7;
    for (var i = size; i >= 1; i--) {
      sum += numbers.charAt(size - i) * pos--;
      if (pos < 2) pos = 9;
    }
    result = sum % 11 < 2 ? 0 : 11 - sum % 11;
    console.log("digit 2 expected: " + result + ", actual: " + digits.charAt(1));
    if (result != digits.charAt(1)) return false;
  
    return true;
  }

  export function verifyInterval(startDate, endDate, compareDate){
    return compareDate.isBetween(startDate, endDate, 'day', '[]');
  }

  export function findMinDate(dates) {
    let minDate = moment(dates[0]);
    for (let i = 1; i < dates.length; i++) {
      const currentDate = moment(dates[i]);
      if (currentDate.isBefore(minDate)) {
        minDate = currentDate;
      }
    }
    return minDate;
  }

  export function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  export function countExecutedParcels(parcels) {
    if (!Array.isArray(parcels)) {
      return 0; // If it's not an array, return 0
    }
  
    const count = parcels.reduce((acc, currentValue) => {
      if (currentValue.status && currentValue.status.label === 'Executado') {
        return acc + 1;
      }
      return acc;
    }, 0);
  
    return count;
  }

  export function adjustCloseToZero(value) {
    if (value > -0.1 && value < 0.1) {
      return 0.0;
    } else {
      return value;
    }
  }

  export function sortByProperty(list, propertyName) {
    return list.sort((a, b) => {
        const propA = (a[propertyName] || '').toUpperCase(); // Handle null values
        const propB = (b[propertyName] || '').toUpperCase(); // Handle null values
        if (propA < propB) {
            return -1;
        }
        if (propA > propB) {
            return 1;
        }
        return 0;
    });
}
    