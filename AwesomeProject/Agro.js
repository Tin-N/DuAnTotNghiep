export const formatPrice = (input) => {
  
  
    var price = input.toString();
    var array = [];
    for (i = price.length; i >= 0; i -= 3) {
      if (i >= 3)
        array.push(price.substring(i, i - 3));
      else {
        if (i == 2)
          array.push(price.substring(i, i - 2));
        if (i == 1)
          array.push(price.substring(i, i - 1));
      }
    }
    const string = array.reverse().join(",");
    return string;
  }

  export function formatMoney(value) {
    let i=0;
    if (typeof value == 'string') {
       i=parseInt(value);
    }
  
    const absValue = Math.abs(i);
    console.log(absValue, " value" , i);
    if (absValue < 1000) {
      return `${value}`;
    } else if (absValue < 1000000) {
      return `${(value / 1000).toFixed(1)} ng `;
    } else if (absValue < 1000000000) {
      return `${(value / 1000000).toFixed(1)} Tr `;
    } else {

      return `${(value / 1000000000).toFixed(1)} T `;
    }
  }
  
  export const formatString = (lineBreakLimit, cutoffLimit,text) => {
    if (typeof text !== 'undefined') {
      let name1 = text;
      if (name1.length > lineBreakLimit) {
        const lineBreakPosition = name1.lastIndexOf(' ', lineBreakLimit);
        if (lineBreakPosition !== -1) {
          let name2 =
            name1.slice(0, lineBreakPosition) +
            '\n' +
            name1.slice(lineBreakPosition + 1);
          if (name2.length > cutoffLimit) {
            console.log(name2.length)
            return name2.slice(0, cutoffLimit) + '...';
            
          }
          return name2;
          
        }
      } else {
        return name1;
      }
    }
    
  };
  