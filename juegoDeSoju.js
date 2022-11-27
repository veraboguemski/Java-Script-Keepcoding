// configuracion de max y min >DONE
// calculo de numero secreto >DONE
// pedir numero al usuario 
// comprobar serpuesta 
//   - si => denunciar que ha ganado
//   - no => dar la pista + volver a pedir numero

function calculateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min +1)) + min;
    return randomNumber
}

const secretNumber = calculateRandomNumber(0, 100);

console.log(secretNumber);
