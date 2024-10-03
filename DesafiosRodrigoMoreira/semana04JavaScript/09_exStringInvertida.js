//9. Inverta uma string.

function inverteString(string){
    let stringInvertida = string.split('').reverse().join(''); /*Usei o método split('') para dividir a string em uma array de caracteres, 
    após isso usei o método reverse() para inverter as ordens dos caracteres,
    e em seguida usei join('') para juntar os caracteres de volta em uma string.*/
    console.log(stringInvertida);
}

inverteString("Hello, world!");