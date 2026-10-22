const eseguiEferma = (messaggio, tempoAvvio, tempoStop) => {
    const id = setInterval(() => {
        console.log(messaggio);
    }, tempoAvvio);
    setTimeout(() => {
        clearInterval(id);
    }, tempoStop);
};

eseguiEferma('Messaggio avviato', 1000, 5000);