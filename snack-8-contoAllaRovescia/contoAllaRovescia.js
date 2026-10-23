const contoAllaRovescia = (n) => {
    const id = setInterval(() => {
        if (n === 0) {
            console.log('Tempo scaduto!');
            clearInterval(id);
        }
        else {
            console.log(n);
            n--;
        }
    }, 1000);
};

contoAllaRovescia(5);