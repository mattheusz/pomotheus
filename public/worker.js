onmessage = e => {
    const { showNotification, timer } = e.data;
    switch (timer) {
        case 'pomodoro':
            showNotification && new Notification('Bom trabalho! Hora do descanso.', { silent: true });
            postMessage(true);
            break;
        case 'short':
            showNotification && new Notification('É hora de trabalhar! Let\'s go!', { silent: true });
            postMessage(true);
            break;
        case 'long':
            showNotification && new Notification('É hora de voltar! Let\'s go!', { silent: true });
            postMessage(true);
            break;
        default:
            break;

    }
}