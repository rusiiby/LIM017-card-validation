import validator from './validator.js';
    let botonValidador = document.getElementById('validador');
    let botonOpenCard = document.getElementsByName('opencard');
     console.log();
    let modalCard = document.getElementById('show-validation');
    let botonClose = document.getElementById('close');
    let validMessage = document.getElementById('valid-card');
    let invalidMessage = document.getElementById('invalid-card');
    
    console.log(botonOpenCard);
    botonValidador.addEventListener('click', function(){
        let numero1 = document.getElementById('number1').value;
        let numero2 = document.getElementById('number2').value;
        let numero3 = document.getElementById('number3').value;
        let numero4 = document.getElementById('number4').value;

        // console.log(numero1);
        // console.log(numero2);
        // console.log(numero3);
        // console.log(numero4);

        let numCard = numero1+numero2+numero3+numero4;
        let esValido = validator.isValid(numCard);
        if(esValido === true){
            // console.log(esValido);
            let enmascarado = validator.maskify(numCard);
            let maskArray = enmascarado.split('');
            let input1 = [];
            let input2 = [];
            let input3 = [];
            let input4 = [];
    
            maskArray.forEach(function(valor, indice) {
                if(indice < 4){
                    input1.push(maskArray[indice]);
                }else if (indice >= 4 && indice < 8){
                    input2.push(maskArray[indice]);
                }else if(indice >= 8 && indice < 12){
                    input3.push(maskArray[indice]);
                }else if(indice >= 12 && indice  <= 15){
                    input4.push(maskArray[indice]);
                }
                
            });
           // console.log(input1);
            document.getElementById('number1').value = input1.join('');
            document.getElementById('number1').style.background = "#B6D79B";
            document.getElementById('number1').style.color = "white";
            //console.log(input2);
            document.getElementById('number2').value = input2.join('');
            document.getElementById('number2').style.background = "#B6D79B";
            document.getElementById('number2').style.color = "white";
            //console.log(input3);
            document.getElementById('number3').value = input3.join('');
            document.getElementById('number3').style.background = "#B6D79B";
            document.getElementById('number3').style.color = "white";
            //console.log(input4);
            document.getElementById('number4').value = input4.join('');
            document.getElementById('number4').style.background = "#B6D79B";
            document.getElementById('number4').style.color = "white";

            botonValidador.disabled = true ;
            botonValidador.style.opacity = '0.5';
            validMessage.style.display = 'block';
            invalidMessage.style.display = 'none';

        }else{
            document.getElementById('number1').style.color = "white";
            document.getElementById('number1').style.background = "#DAB2B2";

            document.getElementById('number2').style.color = "white";
            document.getElementById('number2').style.background = "#DAB2B2";

            document.getElementById('number3').style.color = "white";
            document.getElementById('number3').style.background = "#DAB2B2";

            document.getElementById('number4').style.color = "white";
            document.getElementById('number4').style.background = "#DAB2B2";

            invalidMessage.style.display = 'block';
            validMessage.style.display = 'none';
        }
       
        //console.log(maskArray);
    }); 
    botonOpenCard.forEach(function(value, indice){
        value.addEventListener('click', function(){
            modalCard.style.display = "block";
            console.log(indice);
        });
    })
    botonClose.addEventListener('click',function(){
        modalCard.style.display = 'none';
        document.getElementById('number1').value = '';
        document.getElementById('number2').value = '';
        document.getElementById('number3').value = '';
        document.getElementById('number4').value = '';

        botonValidador.disabled = false ;
        botonValidador.style.opacity = '1';
        validMessage.style.display = 'none';
        invalidMessage.style.display = 'none';

        document.getElementById('number1').style.color = "black";
        document.getElementById('number1').style.background = "white";

        document.getElementById('number2').style.color = "black";
        document.getElementById('number2').style.background = "white";

        document.getElementById('number3').style.color = "black";
        document.getElementById('number3').style.background = "white";

        document.getElementById('number4').style.color = "black";
        document.getElementById('number4').style.background = "white";

        

    });
    // console.log(numCard)
    // let result = validator.isValid(numCard);
    // console.log(result);
    // let mask = validator.maskify(numCard);
    // console.log(mask);



// const objeto = {
//     nombre: 'ruth',
//     nacimiento: 1991,
//     profesion: 'Ingenieria de sistemas',
//     edad: function(nacimiento){
//         return 2022-parseInt(nacimiento);
//     },
//     coloresFavoritos: ['rojo', 'negro', 'azul']
// }

// console.log(objeto);

// let nombreObjeto = objeto.nombre;
// console.log(nombreObjeto);

// let profesionObjeto = objeto.profesion;
// console.log(profesionObjeto);



// import objeto from './validator.js';



// console.log(edad);