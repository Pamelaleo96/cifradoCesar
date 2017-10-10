//Ingresaremos una frase
var phrase = prompt("Ingresa una frase");
//Creamos una variable donde se almacenara las letras encriptadas
var phraseCipher="";
//variable donde estara almacenado temporalmente el nuevo numero ascii encriptado
var codAsciiEncrypted = 0;

//crear una función de cifrado(Cipher)
function cipher(phrase, space){
    //validaremos si el usuario no ingresa ninguna frase, que tenga numero 
 //if(phrase == 'string' && (phrase)){
    //Recorreremos cada letra de la frase 
    for(var i = 0; i < phrase.length; i++){
        //Convertiremos cada letra de la frase ingresada a código Ascci
        var convertLettertoAscii = phrase.charCodeAt(i);
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

        //Convertiremos "codAsciiEncrypted" a letra
        var asciitoLetter = String.fromCharCode(codAsciiEncrypted);
        //Una vez obtenido las nuevas letras encriptadas guardaremos en una nueva variable "phraseCipher" (concatenamos con += ya que son cadenas)
        phraseCipher += asciitoLetter;
    }
   
  
  /*} else {
         //si no ingreso frase retornar alert
         return prompt("Ingresa frase!!!!");
        }*/

  //retornamos nuestra funcion
  return phraseCipher;
}
cipher(phrase, 33);
console.log(cipher(phrase,33));

function decipher(phrase, space){
    
    return;
}
decipher(phrase, 33);











