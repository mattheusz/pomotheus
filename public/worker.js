onmessage = e => {
    console.log('e.data', e.data);
    if (e.data) {
        console.log("Worker working")
        new Notification('Sessão terminada! Parabéns!');
        postMessage(true)
    }
}