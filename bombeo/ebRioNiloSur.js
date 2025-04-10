const wss = require('../../../index');
const net = require('net');
const readline = require('readline');
const { arregloTagsRioNiloSurEB, arregloTagsRioNiloSurEBGeneral, arregloTagsRioNiloSurEBTCP, arregloTagsRioNiloSurEBAntenas } = require('../../../helpers/rioNilo/arregloTagsBombeo');

let interval = null; 
let dataCache = {
    EBRioNiloSur: [],
    EBRioNiloSurGral: [],
    EBRioNiloSurTCP: [],
    EBRioNiloSurAntenas: []
}; 

let completedFuntions = 0
const clientSubscriptions = new Map()

const checkAllFuntionsComplete = () => {
    if (completedFuntions === 4) {
        broadcastData()
        completedFuntions = 0
    }
}

const broadcastData = () => {
    clientSubscriptions.forEach((isSubscribed, client) => {
        if (isSubscribed) {
            //console.log("Sending data: ", JSON.stringify(dataCache))
            client.send(JSON.stringify(dataCache));
        }
    })

}

const getEBRioNiloSur = () => {
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsRioNiloSurEB()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    dataCache.EBRioNiloSur = [];
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(19)] = ex.Value;     
                    });
                    dataCache.EBRioNiloSur.push(obje)
                    obje = {}
                    completedFuntions++
                    checkAllFuntionsComplete()
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const getEBRioNiloSurGral = () => {
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsRioNiloSurEBGeneral()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    dataCache.EBRioNiloSurGral = [];
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(17)] = ex.Value;     
                    });
                    dataCache.EBRioNiloSurGral.push(obje)
                    obje = {}
                    completedFuntions++
                    checkAllFuntionsComplete()
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEBRioNiloSurTCP = () => {
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsRioNiloSurEBTCP()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    dataCache.EBRioNiloSurTCP = [];
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(17)] = ex.Value;     
                    });
                    dataCache.EBRioNiloSurTCP.push(obje)
                    obje = {}
                    completedFuntions++
                    checkAllFuntionsComplete()
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getEBRioNiloSurAntenas = () => {
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsRioNiloSurEBAntenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
            let obje = {};
            client.write(tagReadCommand);

            const rl = readline.createInterface({
                input: client,
                crlfDelay: Infinity
            });
            rl.on('line', (line) => {
                const obj = JSON.parse(line);
                if (obj.Message === 'NotifyReadTag') {
                    const arreglo = obj.Params.Tags;
                    dataCache.EBRioNiloSurAntenas = [];
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(4)] = ex.Value;     
                    });
                    dataCache.EBRioNiloSurAntenas.push(obje)
                    obje = {}
                    completedFuntions++
                    checkAllFuntionsComplete()
                }
                client.end();
            });
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const executeAllFuntions = () => {
    getEBRioNiloSur(),
    getEBRioNiloSurGral(),
    getEBRioNiloSurTCP(),
    getEBRioNiloSurAntenas()
}

const handleSubscriptionEBRioNiloSur = (ws, message) => {
    if (message.toString() === 'subscribeFRNLSEB'){
        console.log('Cliente suscrito')
        clientSubscriptions.set(ws, true);

        if (!interval && Array.from(clientSubscriptions.values()).includes(true)) {
            interval = setInterval(executeAllFuntions, 2000); 
        }
    } else if (message.toString() === 'unsubscribeFRNLSEB'){
        clientSubscriptions.set(ws, false);
        console.log('Cliente desuscrito')

        if(!Array.from(clientSubscriptions.values()).includes(true)) {
            clearInterval(interval)
            interval = null
            console.log('No hay clientes suscritos, deteniendo procesos.')
        }
        

    }
}


module.exports = { handleSubscriptionEBRioNiloSur }
