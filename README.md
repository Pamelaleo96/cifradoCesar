# Cifrado César

### Pseudocódigos:

#### Pseudocodigo Cifrado
    1. INICIO
    2. Ingresar "Frase"
    3. Recorremos cada letra de la frase ingresada con For(i)
    4. Convertiremos cada letra de la frase ingresada a código Ascci
    5. Validaremos si cada letra de la frase es mayúscula o minúscula
    6. Si la letra es MAYÚSCULA Aplicaremos la formula de César para obtener el código ASCII de la letra ya encriptada
         - Si i= MAYUSCULA => (x-65+n)%26+65
    7. Si la letra es minúscula: Aplicaremos la formula de César para obtener el código ASCII de la letra ya encriptada
         - Si i= minuscula => (x-97+n)%26+97
    8. Guardamos el código ascii encriptado
    9. Convertiremos el codigo encriptado a letra
    10. Guardamos la letra convertida en una nueva variable
    11. Mostramos nuestra nueva frase encriptada
    12. FIN




### Diagrama de Flujo:
    