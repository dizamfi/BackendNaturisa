const wss = require('../../../index');
const net = require('net');
const readline = require('readline');
const { generarTags, generarTagsTCP, arregloTagsPS17Antenas } = require('../../../helpers/josefina/arregloTagsAireacion');

let interval = null; 
let dataCache = {
    PS17: [],
    PS17TCP: [],
    PS17Antenas: []
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

const getPS17 = () => {
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTags(['Josefina_FJOS_PS17'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                    dataCache.PS17 = [];
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(19)] = ex.Value;     
                    });
                    dataCache.PS17.push(obje)
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


const getPS17TCP = () => {
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${generarTagsTCP(['Josefina_FJOS_PS17_TA_17_01'])}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                    dataCache.PS17TCP = [];
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(19)] = ex.Value;     
                    });
                    dataCache.PS17TCP.push(obje)
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

const getPS17Antenas = () => {
    try {
        let client = net.connect('\\\\.\\pipe\\HmiRuntime', () => {
            let tagReadCommand = `{"Message":"ReadTag","Params":{"Tags": ${arregloTagsPS17Antenas()}},"ClientCookie":"myReadTagRequest1"}\n`;
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
                    dataCache.PS17Antenas = [];
                    arreglo.forEach((ex, i) => {
                        obje[ex.Name.slice(18)] = ex.Value;     
                    });
                    dataCache.PS17Antenas.push(obje)
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
    getPS17(),
    getPS17TCP(),
    getPS17Antenas()
}

const handleSubscriptionPS17 = (ws, message) => {
    if (message.toString() === 'subscribeFJOSPS17'){
        console.log('Cliente suscrito')
        clientSubscriptions.set(ws, true);

        if (!interval && Array.from(clientSubscriptions.values()).includes(true)) {
            interval = setInterval(executeAllFuntions, 2000); 
        }
    } else if (message.toString() === 'unsubscribeFJOSPS17'){
        clientSubscriptions.set(ws, false);
        console.log('Cliente desuscrito')

        if(!Array.from(clientSubscriptions.values()).includes(true)) {
            clearInterval(interval)
            interval = null
            console.log('No hay clientes suscritos, deteniendo procesos.')
        }


    }
}


module.exports = { handleSubscriptionPS17 }

// Manejar la conexión de nuevos clientes WebSocket
/* wss.on('connection', (ws) => {
    clientSubscriptions.set(ws, false)
    ws.on('message', (message) => {
        console.log(`Mensaje recibido: ${message}`)
        if (message.toString() === 'subscribePS01'){
            console.log('Cliente suscrito')
            console.log('aquii')
            clientSubscriptions.set(ws, true);

            if (!interval) {
                interval = setInterval(executeAllFuntions, 2000); 
            }
        } else if (message.toString() === 'unsubscribePS01'){
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