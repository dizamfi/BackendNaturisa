const wss = require('../../../index');
const net = require('net');
const readline = require('readline');
const { generarTags, generarTagsTCP, arregloTagsPS05Antenas } = require('../../../helpers/naturisa/arregloTagsAireacion');

let interval = null; 
let dataCache = {
    PS05: [],
    PS05TCP: [],
    PS05Antenas: []
}; 

let completedFuntions = 0
const clientSubscriptions = new Map()

const checkAllFuntionsComplete = () => {
    if (completedFuntions === 3) {
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

const getPS05 = () => {
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['Naturisa_FNTS_PS05'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                    dataCache.PS05 = [];
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(19)] = ex.Value;     
                    });
                    dataCache.PS05.push(obje)
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


const getPS05TCP = () => {
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['Naturisa_FNTS_PS05_TA_05_01','Naturisa_FNTS_PS05_TA_05_02'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                    dataCache.PS05TCP = [];
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(19)] = ex.Value;     
                    });
                    dataCache.PS05TCP.push(obje)
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

const getPS05Antenas = () => {
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPS05Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                    dataCache.PS05Antenas = [];
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(18)] = ex.Value;     
                    });
                    dataCache.PS05Antenas.push(obje)
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
    getPS05(),
    getPS05TCP(),
    getPS05Antenas()
}

const handleSubscriptionPS05 = (ws, message) => {
    if (message.toString() === 'subscribeFNTSPS05'){
        console.log('Cliente suscrito')
        clientSubscriptions.set(ws, true);

        if (!interval && Array.from(clientSubscriptions.values()).includes(true)) {
            interval = setInterval(executeAllFuntions, 2000); 
        }
    } else if (message.toString() === 'unsubscribeFNTSPS05'){
        clientSubscriptions.set(ws, false);
        console.log('Cliente desuscrito')

        if(!Array.from(clientSubscriptions.values()).includes(true)) {
            clearInterval(interval)
            interval = null
            console.log('No hay clientes suscritos, deteniendo procesos.')
        }


    }
}


module.exports = { handleSubscriptionPS05 }

// Manejar la conexión de nuevos clientes WebSocket
/* wss.on('connection', (ws) => {
    clientSubscriptions.set(ws, false)
    ws.on('message', (message) => {
        console.log(`Mensaje recibido: ${message}`)
        if (message.toString() === 'subscribePS05'){
            console.log('Cliente suscrito')
            console.log('aquii')
            clientSubscriptions.set(ws, true);

            if (!interval) {
                interval = setInterval(executeAllFuntions, 2000); 
            }
        } else if (message.toString() === 'unsubscribePS05'){
            clientSubscriptions.set(ws, false);
            console.log('Cliente desuscrito')
        }
        
    })

    ws.on('close', () => {
        clientSubscriptions.delete(ws);
        console.log('Cliente desconectado')
    });

    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
});
 */