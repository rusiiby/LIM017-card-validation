const validator = {
  
  isValid: function(cardNumber){
    let cardNumberArray = [];
    let reverseCardNumberArray = [];    
    if(cardNumber.length>0){
        cardNumberArray = cardNumber.split('');
        //console.log(cardNumberArray);
        reverseCardNumberArray = cardNumberArray;
        //console.log(reverseCardNumberArray);
        reverseCardNumberArray.forEach(function(digit, index){
            reverseCardNumberArray[index] = parseInt(digit);
            if(index % 2 === 0){
                reverseCardNumberArray[index] = digit * 2;
            }
        });
        //console.log(reverseCardNumberArray);
        reverseCardNumberArray.forEach(function(digit, index){
            if(digit > 9){
                reverseCardNumberArray[index] = digit - 9;
            }
        });

        //console.log(reverseCardNumberArray);

        let suma = 0;
        reverseCardNumberArray.forEach(function(digit){
          suma += digit;
        });
        //console.log(suma);
        if(suma % 10 === 0){
            return true;
        }else{
            return false;
        }        
    }
  },
  maskify: function(numCard){
    let numCardArray = numCard.split("").reverse();
  //  console.log(numCard);
  //  console.log(numCardArray);

    numCardArray.forEach(function(value, index){
      if(index >= 4 ){
        numCardArray[index] = '#';
      }
    });
  //  console.log(numCardArray);
    let maskifyNumber = numCardArray.reverse().join('');
    // console.log(maskifyNumber);
    return maskifyNumber;
  }
};

export default validator;



// const objeto = {
//   nombre: 'ruth',
//   nacimiento: 1991,
//   profesion: 'Ingenieria de sistemas',
//   edad: function(nacimiento){
//       return 2022-parseInt(nacimiento);
//   },
//   coloresFavoritos: ['rojo', 'negro', 'azul']
// }

// export default objeto;