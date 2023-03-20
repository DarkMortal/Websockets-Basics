const PORT = 5000;

const WBS = require('ws');
const WSS = new WBS.Server({ port: PORT }, () => {
    console.info(`Web socket server running on PORT ${PORT}`);
});

WSS.on('connection', ws => {
    console.info("New client connection");

    ws.send('Connection Acknowledgement string', err => {
        if (err) console.warn(err);
    })

    ws.on('close', () => {
        console.info("Client disconnected");
    });

    ws.on('message', data => {
        const parsedData = JSON.parse(decodeURI(data));
        console.log('Client sent the following data', parsedData);
    });
});