/* const sequenzaOperazioni = (operazioni, intervallo) => {
    let i = 0;
    const id = setInterval(() => {
        if (i >= operazioni.length) {
            clearInterval(id);
        } else {
            operazioni[i]();
            i++;
            if (i === operazioni.length) {
                clearInterval(id);
            }
        }
    }, intervallo);
};

sequenzaOperazioni([
    () => console.log("Operazione 1"),
    () => console.log("Operazione 2"),
    () => console.log("Operazione 3")
], 2000); */

const sequenzaOperazioni = (operazioni, intervallo) => {
    operazioni.forEach((operazione, indice) => {
        setTimeout(() => {
            operazione();
        }, (indice + 1) * intervallo);
    });
};

sequenzaOperazioni([
    () => console.log("Operazione 1"),
    () => console.log("Operazione 2"),
    () => console.log("Operazione 3")
], 2000);