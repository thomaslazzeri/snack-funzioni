const creaContatoreAutomatico = (intervallo) => {
    let contatore = 0;
    return () => {
        setInterval(() => {
            contatore++;
            console.log(contatore);
        }, intervallo);
    };
};

const avvia = creaContatoreAutomatico(1000);
avvia();