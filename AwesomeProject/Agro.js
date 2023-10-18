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