const moltiplicazione = (num, num2) => num * num2;
const divisione = (num, num2) => num / num2;

const eseguiOperazione = (num, num2, operazione) => operazione(num, num2);

console.log(eseguiOperazione(10, 10, moltiplicazione));
console.log(eseguiOperazione(10, 10, divisione));