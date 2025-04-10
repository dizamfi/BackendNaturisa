const wss = require('../../../index');
const net = require('net');
const readline = require('readline');
const { arregloTagsRioNiloNorteEB, arregloTagsRioNiloNorteEBGeneral, arregloTagsRioNiloNorteEBTCP, arregloTagsRioNiloNorteEBAntenas } = require('../../../helpers/rioNilo/arregloTagsBombeo');

let interval = null; 
let dataCache = {
    EBRioNiloNorte: [],
    EBRioNiloNorteGral: [],
    EBRioNiloNorteTCP: [],
    EBRioNiloNorteAntenas: []
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

const getEBRioNiloNorte = () => {
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsRioNiloNorteEB()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                    dataCache.EBRioNiloNorte = [];
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(18)] = ex.Value;     
                    });
                    dataCache.EBRioNiloNorte.push(obje)
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


const getEBRioNiloNorteGral = () => {
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsRioNiloNorteEBGeneral()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                    dataCache.EBRioNiloNorteGral = [];
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(13)] = ex.Value;     
                    });
                    dataCache.EBRioNiloNorteGral.push(obje)
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

const getEBRioNiloNorteTCP = () => {
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsRioNiloNorteEBTCP()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                    dataCache.EBRioNiloNorteTCP = [];
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(13)] = ex.Value;     
                    });
                    dataCache.EBRioNiloNorteTCP.push(obje)
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

const getEBRioNiloNorteAntenas = () => {
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsRioNiloNorteEBAntenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                    dataCache.EBRioNiloNorteAntenas = [];
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(4)] = ex.Value;     
                    });
                    dataCache.EBRioNiloNorteAntenas.push(obje)
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
    getEBRioNiloNorte(),
    getEBRioNiloNorteGral(),
    getEBRioNiloNorteTCP(),
    getEBRioNiloNorteAntenas()
}

const handleSubscriptionEBRioNiloNorte = (ws, message) => {
    if (message.toString() === 'subscribeFRNLEB'){
        console.log('Cliente suscrito')
        clientSubscriptions.set(ws, true);

        if (!interval && Array.from(clientSubscriptions.values()).includes(true)) {
            interval = setInterval(executeAllFuntions, 2000); 
        }
    } else if (message.toString() === 'unsubscribeFRNLEB'){
        clientSubscriptions.set(ws, false);
        console.log('Cliente desuscrito')

        if(!Array.from(clientSubscriptions.values()).includes(true)) {
            clearInterval(interval)
            interval = null
            console.log('No hay clientes suscritos, deteniendo procesos.')
        }
        

    }
}


module.exports = { handleSubscriptionEBRioNiloNorte }
