const stampaOgniSecondo = (messaggio) => {
    return setInterval(() => {
        console.log(messaggio);
    }, 1000);
};

const intervallo = stampaOgniSecondo('1 secondo è passato');

setTimeout(() => {
    clearInterval(intervallo);
}, 10000);