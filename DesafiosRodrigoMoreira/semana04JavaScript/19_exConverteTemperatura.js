//19. Converta uma temperatura de Celsius para Fahrenheit.

function converteFahrenheit(temperatura){
    return (temperatura * 9/5) + 32;
}

console.log(converteFahrenheit(36));


// Exemplo de Arrowfunction neste mesmo caso:

const arrowConverteTemperatura = (temperatura) => (temperatura * 9/5) + 32;

console.log(arrowConverteTemperatura(36));