//Ingresaremos una frase
var phrase = prompt("Ingresa una frase");
//variable donde estara almacenado temporalmente el nuevo numero ascii encriptado
var codAsciiEncrypted = 0;  

//VALIDAMOS QUE SE INGRESE LA FRASE y Mostramos mediante un alert los resultados.
if(phrase){
    /*llamamos a la funcion decipher esta pide la frase cifrada y el espaciado para eso en el primer parametro
    llamamos a la funcion cipher que nos retornara una cadena con el texto encriptado*/
    alert("La frase CIFRADA es: " + (cipher(phrase,33)) + "\n" + "La frase DESCIFRADA es: " + (decipher(cipher(phrase,33),33)));
    }
    //Si no ingresaron una frase devuelve vacio
    else{
    alert("No se ingreso la frase");
    }
 
//crear una función de cifrado(Cipher)
function cipher(phrase, space){
    //variable donde se almacenara la frase encriptada
    var phraseCipher="";
    //Recorreremos cada letra de la frase 
    for(var i = 0; i < phrase.length; i++){
        //Convertiremos y alamacenamos cada letra de la frase ingresada a código Ascci
        var convertLettertoAscii = phrase.charCodeAt(i);
        //Condicionamos para que la frase almacenada este en el rango de numeros ASCII y no de otros
        if(convertLettertoAscii > 64 || convertLettertoAscii < 33){
            //Validaremos si cada letra de la frase es mayúscula o minúscula
            if(phrase.charAt(i) == phrase.charAt(i).toUpperCase()){
                //Si la letra es MAYÚSCULA Aplicaremos la formula de César para obtener el código ASCII de la letra ya encriptada
                //codAsciiEncrypted: Guardamos el código ascii encriptado
                codAsciiEncrypted = (convertLettertoAscii - 65 + space) % 26 + 65;
                }
                else {
                    //Si la letra es minúscula Aplicaremos la formula de César para obtener el código ASCII de la letra ya encriptada
                    //codAsciiEncrypted: Guardamos el código ascii encriptado
                    codAsciiEncrypted = (convertLettertoAscii - 97 + space) % 26 + 97;
                    }
                    //valido si es hay un espacio y lo igualo
                    //con su respectivo ASCII 
                    if(convertLettertoAscii==32){
                        codAsciiEncrypted=32;
                    }

            //Convertiremos "codAsciiEncrypted" a letra
            var asciitoLetter = String.fromCharCode(codAsciiEncrypted);
            //Una vez obtenido las nuevas letras encriptadas guardaremos en una nueva variable "phraseCipher" (concatenamos con += ya que son cadenas)
            phraseCipher += asciitoLetter;
        }
        else{
            //Si la frase ingresada contiene numeros enviar un alert
            return alert("La frase ingresada contiene números");
          }
    }
    //Por ultimo retornamos la nueva frase encriptada
    return phraseCipher;
    }
//cipher(phrase, 33);
//console.log(cipher(phrase,33));

//CREAMOS LA FUNCION DECIPHER como parametro llamaremos a phrasecipher para poder manipular
function decipher(phraseCipher, space){
    //Variable que almacenara la nueva frase decencriptada
    var phraseDecipher="";
    //convertimos la letra a codigo ascii segun el indice especificado
    for(var i = 0; i < phraseCipher.length; i++){
        //En la variable convertLettertoAscii se almacenara los codigos Ascii segun va iterando
        var convertLettertoAscii = phraseCipher.charCodeAt(i);
        //Validaremos si cada letra de la frase es mayúscula o minúscula
        if(phraseCipher.charAt(i) == phraseCipher.charAt(i).toUpperCase()){
            ////Si la letra es MAYÚSCULA Aplicaremos la formula de César para obtener el código ASCII de la letra ya encriptada
            //newCod = Almacenara el codigo ascii encriptado
            codAsciiEncrypted = (convertLettertoAscii + 65 - space) % 26 + 65;      
            }
            else{
                //Si la letra es minúscula Aplicaremos la formula de César para obtener el código ASCII de la letra ya encriptada
                //codAsciiEncrypted: Guardamos el código ascii encriptado
                codAsciiEncrypted = (convertLettertoAscii + 85 - space) % 26 + 97;
                }
                //valido si es un espacio y lo convierto a espacio ASCII
                if(convertLettertoAscii==32){
                    codAsciiEncrypted=32;
                }
        //Convertiremos "codAsciiEncrypted=contiene el codigo Ascii encriptado" a letra
        var asciitoLetter= String.fromCharCode(codAsciiEncrypted);
        phraseDecipher += asciitoLetter;
    }

    return phraseDecipher;
}
//decipher(phrase, 33);





