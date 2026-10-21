const creaTimer = (tempo) => {
    return () => {
        setTimeout(() => {
            console.log('Tempo scaduto!');
        }, tempo);
    };
};

const timer = creaTimer(2000);
timer();
const timerLento = creaTimer(5000);
timerLento();
const timerVeloce = creaTimer(1000);
timerVeloce();