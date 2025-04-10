const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const { connectionDB } = require('./db/config');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const cors = require('cors');
const User = require('./models/User');
require('dotenv').config();

const admin = require('firebase-admin');
const bodyParser = require('body-parser');

const serviceAccount = require('./firebase-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Middleware
app.use(bodyParser.json());

app.post('/api/notificacion-alarma', async (req, res) => {
  const { token, titulo, mensaje } = req.body;

  if (!token || !titulo || !mensaje) {
    return res.status(400).json({ error: 'Faltan parámetros obligatorios.' });
  }

  const payload = {
    notification: {
      title: titulo,
      body: mensaje,
    },
    token: token,
  };

  try {
    const response = await admin.messaging().send(payload);
    console.log('Notificación enviada:', response);
    res.json({ success: true, response });
  } catch (error) {
    console.error('Error al enviar notificación:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});



const ps01controler = require('./controllers/josefina/aireacion/ps01');
const ps02controler = require('./controllers/josefina/aireacion/ps02');
const ps03controler = require('./controllers/josefina/aireacion/ps03');
const ps04controler = require('./controllers/josefina/aireacion/ps04');
const ps05controler = require('./controllers/josefina/aireacion/ps05');
const ps06controler = require('./controllers/josefina/aireacion/ps06');
const ps07controler = require('./controllers/josefina/aireacion/ps07');
const ps08controler = require('./controllers/josefina/aireacion/ps08');
const ps09controler = require('./controllers/josefina/aireacion/ps09');
const ps10controler = require('./controllers/josefina/aireacion/ps10');
const ps11controler = require('./controllers/josefina/aireacion/ps11');
const ps13controler = require('./controllers/josefina/aireacion/ps13');
const ps14controler = require('./controllers/josefina/aireacion/ps14');
const ps15controler = require('./controllers/josefina/aireacion/ps15');
const ps16controler = require('./controllers/josefina/aireacion/ps16');
const ps17controler = require('./controllers/josefina/aireacion/ps17');
const ps18controler = require('./controllers/josefina/aireacion/ps18');
const ps19controler = require('./controllers/josefina/aireacion/ps19');
const ps21controler = require('./controllers/josefina/aireacion/ps21');
const ps22controler = require('./controllers/josefina/aireacion/ps22');
const ps23controler = require('./controllers/josefina/aireacion/ps23');
const ps24controler = require('./controllers/josefina/aireacion/ps24');
const ps25controler = require('./controllers/josefina/aireacion/ps25');
const ps26controler = require('./controllers/josefina/aireacion/ps26');
const ps27controler = require('./controllers/josefina/aireacion/ps27');
const ps28controler = require('./controllers/josefina/aireacion/ps28');
const ps29controler = require('./controllers/josefina/aireacion/ps29');
const ps30controler = require('./controllers/josefina/aireacion/ps30');
const ps31controler = require('./controllers/josefina/aireacion/ps31');
const ps32controler = require('./controllers/josefina/aireacion/ps32');
const ps33controler = require('./controllers/josefina/aireacion/ps33');
const ps34controler = require('./controllers/josefina/aireacion/ps34');
const ps35controler = require('./controllers/josefina/aireacion/ps35');
const ps36controler = require('./controllers/josefina/aireacion/ps36');
const ps37controler = require('./controllers/josefina/aireacion/ps37');
const ps38controler = require('./controllers/josefina/aireacion/ps38');
const ps39controler = require('./controllers/josefina/aireacion/ps39');
const ps40controler = require('./controllers/josefina/aireacion/ps40');
const ps41controler = require('./controllers/josefina/aireacion/ps41');
const ps42controler = require('./controllers/josefina/aireacion/ps42');
const ps43controler = require('./controllers/josefina/aireacion/ps43');
const ps44controler = require('./controllers/josefina/aireacion/ps44');
const ps45controler = require('./controllers/josefina/aireacion/ps45');
const ps46controler = require('./controllers/josefina/aireacion/ps46');
const ps47controler = require('./controllers/josefina/aireacion/ps47');
const ps47Bcontroler = require('./controllers/josefina/aireacion/ps47B');
const ps48controler = require('./controllers/josefina/aireacion/ps48');
const ps49controler = require('./controllers/josefina/aireacion/ps49');
const ps50controler = require('./controllers/josefina/aireacion/ps50');
const ps51controler = require('./controllers/josefina/aireacion/ps51');
const ps52controler = require('./controllers/josefina/aireacion/ps52');
const ps53controler = require('./controllers/josefina/aireacion/ps53');
const ps54controler = require('./controllers/josefina/aireacion/ps54');
const ps55controler = require('./controllers/josefina/aireacion/ps55');
const ps56controler = require('./controllers/josefina/aireacion/ps56');
const ps57controler = require('./controllers/josefina/aireacion/ps57');
const ps58controler = require('./controllers/josefina/aireacion/ps58');
const pc20controler = require('./controllers/josefina/aireacion/pc20');
const pc101controler = require('./controllers/josefina/aireacion/pc101');
const pc102controler = require('./controllers/josefina/aireacion/pc102');
const pc103controler = require('./controllers/josefina/aireacion/pc103');
const pc104controler = require('./controllers/josefina/aireacion/pc104');
const pc106controler = require('./controllers/josefina/aireacion/pc106');
const pc107controler = require('./controllers/josefina/aireacion/pc107');
const pc108controler = require('./controllers/josefina/aireacion/pc108');
const pc111controler = require('./controllers/josefina/aireacion/pc111');
const pc113controler = require('./controllers/josefina/aireacion/pc113');
const pc114controler = require('./controllers/josefina/aireacion/pc114');
const pc115controler = require('./controllers/josefina/aireacion/pc115');
const pc116controler = require('./controllers/josefina/aireacion/pc116');
const pc117controler = require('./controllers/josefina/aireacion/pc117');
const antenasFJOScontroler = require('./controllers/josefina/aireacion/antenas');
const infoGeneralPSFJOScontroler = require('./controllers/josefina/aireacion/infoGeneralPS');
const ebFJOScontroler = require('./controllers/josefina/bombeo/ebJosefina');




const pc56controlerFMARC = require('./controllers/maricultura/aireacion/pc56');
const pc107AcontrolerFMARC = require('./controllers/maricultura/aireacion/pc107A');
const pc107BcontrolerFMARC = require('./controllers/maricultura/aireacion/pc107B');
const pc249controlerFMARC = require('./controllers/maricultura/aireacion/pc249');
const pc250controlerFMARC = require('./controllers/maricultura/aireacion/pc250');
const pc251controlerFMARC = require('./controllers/maricultura/aireacion/pc251');
const pc252controlerFMARC = require('./controllers/maricultura/aireacion/pc252');
const pc258controlerFMARC = require('./controllers/maricultura/aireacion/pc258');
const pc259controlerFMARC = require('./controllers/maricultura/aireacion/pc259');
const pc260controlerFMARC = require('./controllers/maricultura/aireacion/pc260');
const ps51controlerFMARC = require('./controllers/maricultura/aireacion/ps51');
const ps52controlerFMARC = require('./controllers/maricultura/aireacion/ps52');
const ps53controlerFMARC = require('./controllers/maricultura/aireacion/ps53');
const ps54controlerFMARC = require('./controllers/maricultura/aireacion/ps54');
const ps55controlerFMARC = require('./controllers/maricultura/aireacion/ps55');
const ps57controlerFMARC = require('./controllers/maricultura/aireacion/ps57');
const ps58controlerFMARC = require('./controllers/maricultura/aireacion/ps58');
const ps59controlerFMARC = require('./controllers/maricultura/aireacion/ps59');
const ps60controlerFMARC = require('./controllers/maricultura/aireacion/ps60');
const ps61controlerFMARC = require('./controllers/maricultura/aireacion/ps61');
const ps62controlerFMARC = require('./controllers/maricultura/aireacion/ps62');
const ps63AcontrolerFMARC = require('./controllers/maricultura/aireacion/ps63A');
const ps63BcontrolerFMARC = require('./controllers/maricultura/aireacion/ps63B');
const ps64AcontrolerFMARC = require('./controllers/maricultura/aireacion/ps64A');
const ps64BcontrolerFMARC = require('./controllers/maricultura/aireacion/ps64B');
const ps65controlerFMARC = require('./controllers/maricultura/aireacion/ps65');
const ps65AcontrolerFMARC = require('./controllers/maricultura/aireacion/ps65A');
const ps65BcontrolerFMARC = require('./controllers/maricultura/aireacion/ps65B');
const ps66AcontrolerFMARC = require('./controllers/maricultura/aireacion/ps66A');
const ps66BcontrolerFMARC = require('./controllers/maricultura/aireacion/ps66B');
const ps67controlerFMARC = require('./controllers/maricultura/aireacion/ps67');
const ps68controlerFMARC = require('./controllers/maricultura/aireacion/ps68');
const ps69controlerFMARC = require('./controllers/maricultura/aireacion/ps69');
const ps70controlerFMARC = require('./controllers/maricultura/aireacion/ps70');
const ps71controlerFMARC = require('./controllers/maricultura/aireacion/ps71');
const ps72controlerFMARC = require('./controllers/maricultura/aireacion/ps72');
const ps73controlerFMARC = require('./controllers/maricultura/aireacion/ps73');
const ps75controlerFMARC = require('./controllers/maricultura/aireacion/ps75');
const ps76AcontrolerFMARC = require('./controllers/maricultura/aireacion/ps76A');
const ps76BcontrolerFMARC = require('./controllers/maricultura/aireacion/ps76B');
const ps77AcontrolerFMARC = require('./controllers/maricultura/aireacion/ps77A');
const ps77BcontrolerFMARC = require('./controllers/maricultura/aireacion/ps77B');
const ps78controlerFMARC = require('./controllers/maricultura/aireacion/ps78');
const ps79controlerFMARC = require('./controllers/maricultura/aireacion/ps79');
const ps80controlerFMARC = require('./controllers/maricultura/aireacion/ps80');
const ps81controlerFMARC = require('./controllers/maricultura/aireacion/ps81');
const ps82controlerFMARC = require('./controllers/maricultura/aireacion/ps82');
const ps83controlerFMARC = require('./controllers/maricultura/aireacion/ps83');
const ps84controlerFMARC = require('./controllers/maricultura/aireacion/ps84');
const ps85controlerFMARC = require('./controllers/maricultura/aireacion/ps85');
const ps86controlerFMARC = require('./controllers/maricultura/aireacion/ps86');
const ps87controlerFMARC = require('./controllers/maricultura/aireacion/ps87');
const ps88controlerFMARC = require('./controllers/maricultura/aireacion/ps88');
const antenasFMARCcontroler = require('./controllers/maricultura/aireacion/antenas');
const infoGeneralPSFMARCcontroler = require('./controllers/maricultura/aireacion/infoGeneralPS');
const ebFMARCcontroler = require('./controllers/maricultura/bombeo/ebMaricultura');



const pc202controlerFNTS = require('./controllers/naturisa/aireacion/pc202');
const pc206controlerFNTS = require('./controllers/naturisa/aireacion/pc206');
const pc207controlerFNTS = require('./controllers/naturisa/aireacion/pc207');
const pc208controlerFNTS = require('./controllers/naturisa/aireacion/pc208');
const pc209controlerFNTS = require('./controllers/naturisa/aireacion/pc209');
const pc210controlerFNTS = require('./controllers/naturisa/aireacion/pc210');
const pc211controlerFNTS = require('./controllers/naturisa/aireacion/pc211');
const pc212controlerFNTS = require('./controllers/naturisa/aireacion/pc212');
const pc214controlerFNTS = require('./controllers/naturisa/aireacion/pc214');
const pc215controlerFNTS = require('./controllers/naturisa/aireacion/pc215');
const pc216controlerFNTS = require('./controllers/naturisa/aireacion/pc216');
const pc217controlerFNTS = require('./controllers/naturisa/aireacion/pc217');
const pc218controlerFNTS = require('./controllers/naturisa/aireacion/pc218');
const ps01controlerFNTS = require('./controllers/naturisa/aireacion/ps01');
const ps02controlerFNTS = require('./controllers/naturisa/aireacion/ps02');
const ps03controlerFNTS = require('./controllers/naturisa/aireacion/ps03');
const ps04controlerFNTS = require('./controllers/naturisa/aireacion/ps04');
const ps05controlerFNTS = require('./controllers/naturisa/aireacion/ps05');
const ps06controlerFNTS = require('./controllers/naturisa/aireacion/ps06');
const ps07controlerFNTS = require('./controllers/naturisa/aireacion/ps07');
const ps08controlerFNTS = require('./controllers/naturisa/aireacion/ps08');
const ps09controlerFNTS = require('./controllers/naturisa/aireacion/ps09');
const ps10controlerFNTS = require('./controllers/naturisa/aireacion/ps10');
const ps11controlerFNTS = require('./controllers/naturisa/aireacion/ps11');
const ps12AcontrolerFNTS = require('./controllers/naturisa/aireacion/ps12A');
const ps12BcontrolerFNTS = require('./controllers/naturisa/aireacion/ps12B');
const ps13AcontrolerFNTS = require('./controllers/naturisa/aireacion/ps13A');
const ps13BcontrolerFNTS = require('./controllers/naturisa/aireacion/ps13B');
const ps14controlerFNTS = require('./controllers/naturisa/aireacion/ps14');
const ps15controlerFNTS = require('./controllers/naturisa/aireacion/ps15');
const ps16AcontrolerFNTS = require('./controllers/naturisa/aireacion/ps16A');
const ps16BcontrolerFNTS = require('./controllers/naturisa/aireacion/ps16B');
const ps17controlerFNTS = require('./controllers/naturisa/aireacion/ps17');
const ps18controlerFNTS = require('./controllers/naturisa/aireacion/ps18');
const ps19controlerFNTS = require('./controllers/naturisa/aireacion/ps19');
const ps20controlerFNTS = require('./controllers/naturisa/aireacion/ps20');
const ps21controlerFNTS = require('./controllers/naturisa/aireacion/ps21');
const ps22AcontrolerFNTS = require('./controllers/naturisa/aireacion/ps22A');
const ps22BcontrolerFNTS = require('./controllers/naturisa/aireacion/ps22B');
const ps23controlerFNTS = require('./controllers/naturisa/aireacion/ps23');
const ps25controlerFNTS = require('./controllers/naturisa/aireacion/ps25');
const ps26controlerFNTS = require('./controllers/naturisa/aireacion/ps26');
const ps27controlerFNTS = require('./controllers/naturisa/aireacion/ps27');
const ps28controlerFNTS = require('./controllers/naturisa/aireacion/ps28');
const ps29controlerFNTS = require('./controllers/naturisa/aireacion/ps29');
const ps30controlerFNTS = require('./controllers/naturisa/aireacion/ps30');
const ps31controlerFNTS = require('./controllers/naturisa/aireacion/ps31');
const ps32controlerFNTS = require('./controllers/naturisa/aireacion/ps32');
const antenasFNTScontroler = require('./controllers/naturisa/aireacion/antenas');
const infoGeneralPSFNTScontroler = require('./controllers/naturisa/aireacion/infoGeneralPS');


const pc219controlerFPSJ = require('./controllers/pesjolla/pc219');
const pc220controlerFPSJ = require('./controllers/pesjolla/pc220-221');
const pc222controlerFPSJ = require('./controllers/pesjolla/pc222-223');
const pc224controlerFPSJ = require('./controllers/pesjolla/pc224');
const pc225controlerFPSJ = require('./controllers/pesjolla/pc225');
const pc226controlerFPSJ = require('./controllers/pesjolla/pc226-227');
const pc228controlerFPSJ = require('./controllers/pesjolla/pc228-229');
const pc230controlerFPSJ = require('./controllers/pesjolla/pc230-231-232');
const ps33controlerFPSJ = require('./controllers/pesjolla/ps33');
const ps34AcontrolerFPSJ = require('./controllers/pesjolla/ps34A');
const ps34BcontrolerFPSJ = require('./controllers/pesjolla/ps34B');
const ps35AcontrolerFPSJ = require('./controllers/pesjolla/ps35A');
const ps35BcontrolerFPSJ = require('./controllers/pesjolla/ps35B');
const ps36controlerFPSJ = require('./controllers/pesjolla/ps36');
const ps37AcontrolerFPSJ = require('./controllers/pesjolla/ps37A');
const ps37BcontrolerFPSJ = require('./controllers/pesjolla/ps37B');
const ps38controlerFPSJ = require('./controllers/pesjolla/ps38');
const ps39controlerFPSJ = require('./controllers/pesjolla/ps39');
const ps40controlerFPSJ = require('./controllers/pesjolla/ps40');
const ps41controlerFPSJ = require('./controllers/pesjolla/ps41');
const ps42AcontrolerFPSJ = require('./controllers/pesjolla/ps42A');
const ps42BcontrolerFPSJ = require('./controllers/pesjolla/ps42B');
const ps43AcontrolerFPSJ = require('./controllers/pesjolla/ps43A');
const ps43BcontrolerFPSJ = require('./controllers/pesjolla/ps43B');
const ps44controlerFPSJ = require('./controllers/pesjolla/ps44');
const ps45controlerFPSJ = require('./controllers/pesjolla/ps45');
const ps46controlerFPSJ = require('./controllers/pesjolla/ps46');
const ps47AcontrolerFPSJ = require('./controllers/pesjolla/ps47A');
const ps47BcontrolerFPSJ = require('./controllers/pesjolla/ps47B');
const ps48controlerFPSJ = require('./controllers/pesjolla/ps48');
const ps49controlerFPSJ = require('./controllers/pesjolla/ps49');
const ps50controlerFPSJ = require('./controllers/pesjolla/ps50');
const antenasFPSJcontroler = require('./controllers/pesjolla/antenas');
const infoGeneralPSFPSJcontroler = require('./controllers/pesjolla/infoGeneralPS');


const pc108controlerFRNL = require('./controllers/rioNilo/aireacion/pc108');
const pc109controlerFRNL = require('./controllers/rioNilo/aireacion/pc109');
const pc110controlerFRNL = require('./controllers/rioNilo/aireacion/pc110');
const pc111controlerFRNL = require('./controllers/rioNilo/aireacion/pc111');
const pc112controlerFRNL = require('./controllers/rioNilo/aireacion/pc112');
const pc113controlerFRNL = require('./controllers/rioNilo/aireacion/pc113');
const pc114controlerFRNL = require('./controllers/rioNilo/aireacion/pc114');
const pc118controlerFRNL = require('./controllers/rioNilo/aireacion/pc118');
const pc119controlerFRNL = require('./controllers/rioNilo/aireacion/pc119');
const pc120controlerFRNL = require('./controllers/rioNilo/aireacion/pc120');
const pc121controlerFRNL = require('./controllers/rioNilo/aireacion/pc121');
const pc122controlerFRNL = require('./controllers/rioNilo/aireacion/pc122');
const pc123controlerFRNL = require('./controllers/rioNilo/aireacion/pc123');
const pc124controlerFRNL = require('./controllers/rioNilo/aireacion/pc124');
const pc125controlerFRNL = require('./controllers/rioNilo/aireacion/pc125');
const pc126controlerFRNL = require('./controllers/rioNilo/aireacion/pc126');
const pc127controlerFRNL = require('./controllers/rioNilo/aireacion/pc127');
const pc141controlerFRNL = require('./controllers/rioNilo/aireacion/pc141');
const pc144controlerFRNL = require('./controllers/rioNilo/aireacion/pc144');
const ps23controlerFRNL = require('./controllers/rioNilo/aireacion/ps23');
const ps24controlerFRNL = require('./controllers/rioNilo/aireacion/ps24');
const ps25controlerFRNL = require('./controllers/rioNilo/aireacion/ps25');
const ps26controlerFRNL = require('./controllers/rioNilo/aireacion/ps26');
const ps27controlerFRNL = require('./controllers/rioNilo/aireacion/ps27');
const ps28controlerFRNL = require('./controllers/rioNilo/aireacion/ps28');
const ps29controlerFRNL = require('./controllers/rioNilo/aireacion/ps29');
const ps30controlerFRNL = require('./controllers/rioNilo/aireacion/ps30');
const ps31controlerFRNL = require('./controllers/rioNilo/aireacion/ps31');
const ps32controlerFRNL = require('./controllers/rioNilo/aireacion/ps32');
const ps33controlerFRNL = require('./controllers/rioNilo/aireacion/ps33');
const ps34controlerFRNL = require('./controllers/rioNilo/aireacion/ps34');
const ps35controlerFRNL = require('./controllers/rioNilo/aireacion/ps35');
const ps36controlerFRNL = require('./controllers/rioNilo/aireacion/ps36');
const ps37controlerFRNL = require('./controllers/rioNilo/aireacion/ps37');
const ps38controlerFRNL = require('./controllers/rioNilo/aireacion/ps38');
const ps39controlerFRNL = require('./controllers/rioNilo/aireacion/ps39');
const ps40controlerFRNL = require('./controllers/rioNilo/aireacion/ps40');
const ps41controlerFRNL = require('./controllers/rioNilo/aireacion/ps41');
const ps42controlerFRNL = require('./controllers/rioNilo/aireacion/ps42');
const ps43controlerFRNL = require('./controllers/rioNilo/aireacion/ps43');
const ps44controlerFRNL = require('./controllers/rioNilo/aireacion/ps44');
const ps45controlerFRNL = require('./controllers/rioNilo/aireacion/ps45');
const ps55controlerFRNL = require('./controllers/rioNilo/aireacion/ps55');
const ps56controlerFRNL = require('./controllers/rioNilo/aireacion/ps56');
const pc101controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/pc101');
const pc102controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/pc102');
const pc103controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/pc103');
const pc104controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/pc104');
const pc105controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/pc105');
const pc106controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/pc106');
const pc107controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/pc107');
const pc128controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/pc128');
const pc129controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/pc129');
const pc130controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/pc130');
const pc131controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/pc131');
const pc132controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/pc132');
const pc133controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/pc133');
const pc134controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/pc134');
const pc135controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/pc135');
const pc136controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/pc136');
const pc137controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/pc137');
const pc138controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/pc138');
const pc139controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/pc139');
const pc140controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/pc140');
const pc142controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/pc142');
const pc143controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/pc143');
const ps01controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps01');
const ps02controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps02');
const ps03controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps03');
const ps04controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps04');
const ps05controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps05');
const ps06controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps06');
const ps07controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps07');
const ps08controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps08');
const ps09controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps09');
const ps10controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps10');
const ps11controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps11');
const ps12controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps12');
const ps12bcontrolerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps12b');
const ps13controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps13');
const ps14controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps14');
const ps15controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps15');
const ps16controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps16');
const ps17controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps17');
const ps18controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps18');
const ps19controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps19');
const ps20controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps20');
const ps21controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps21');
const ps22controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps22');
const ps46controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps46');
const ps47controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps47');
const ps48controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps48');
const ps49controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps49');
const ps50controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps50');
const ps51controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps51');
const ps53controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps53');
const ps54controlerFRNLS = require('./controllers/rioNilo/aireacion/sur/ps54');
const ebFRNLcontroler = require('./controllers/rioNilo/bombeo/ebRioNiloNorte');
const ebFRNLScontroler = require('./controllers/rioNilo/bombeo/ebRioNiloSur');
const antenasFRNLcontroler = require('./controllers/rioNilo/aireacion/antenas');
const infoGeneralPSFRNLcontroler = require('./controllers/rioNilo/aireacion/infoGeneralPS');



const pc103controlerFCAM = require('./controllers/camaron/aireacion/pc103');
const pc104controlerFCAM = require('./controllers/camaron/aireacion/pc104');
const pc105controlerFCAM = require('./controllers/camaron/aireacion/pc105');
const pc106controlerFCAM = require('./controllers/camaron/aireacion/pc106');
const pc107controlerFCAM = require('./controllers/camaron/aireacion/pc107');
const pc109controlerFCAM = require('./controllers/camaron/aireacion/pc109');
const pc110controlerFCAM = require('./controllers/camaron/aireacion/pc110');
const pc111controlerFCAM = require('./controllers/camaron/aireacion/pc111');
const pc112controlerFCAM = require('./controllers/camaron/aireacion/pc112');
const pc113controlerFCAM = require('./controllers/camaron/aireacion/pc113');
const ps01controlerFCAM = require('./controllers/camaron/aireacion/ps01');
const ps02controlerFCAM = require('./controllers/camaron/aireacion/ps02');
const ps03controlerFCAM = require('./controllers/camaron/aireacion/ps03');
const ps04controlerFCAM = require('./controllers/camaron/aireacion/ps04');
const ps05AcontrolerFCAM = require('./controllers/camaron/aireacion/ps05A');
const ps05BcontrolerFCAM = require('./controllers/camaron/aireacion/ps05B');
const ps06controlerFCAM = require('./controllers/camaron/aireacion/ps06');
const ps07AcontrolerFCAM = require('./controllers/camaron/aireacion/ps07A');
const ps07BcontrolerFCAM = require('./controllers/camaron/aireacion/ps07B');
const ps08controlerFCAM = require('./controllers/camaron/aireacion/ps08');
const ps09controlerFCAM = require('./controllers/camaron/aireacion/ps09');
const ps10controlerFCAM = require('./controllers/camaron/aireacion/ps10');
const ps11controlerFCAM = require('./controllers/camaron/aireacion/ps11');
const ps12controlerFCAM = require('./controllers/camaron/aireacion/ps12');
const ps13controlerFCAM = require('./controllers/camaron/aireacion/ps13');
const ps14controlerFCAM = require('./controllers/camaron/aireacion/ps14');
const ps15controlerFCAM = require('./controllers/camaron/aireacion/ps15');
const ps16AcontrolerFCAM = require('./controllers/camaron/aireacion/ps16A');
const ps16BcontrolerFCAM = require('./controllers/camaron/aireacion/ps16B');
const ps17controlerFCAM = require('./controllers/camaron/aireacion/ps17');
const ps18controlerFCAM = require('./controllers/camaron/aireacion/ps18');
const ps19controlerFCAM = require('./controllers/camaron/aireacion/ps19');
const ps20controlerFCAM = require('./controllers/camaron/aireacion/ps20');
const antenasFCAMcontroler = require('./controllers/camaron/aireacion/antenas');
const infoGeneralPSFCAMcontroler = require('./controllers/camaron/aireacion/infoGeneralPS');
const ebFCAMcontroler = require('./controllers/camaron/bombeo/ebCamaron');



const ps01controlerGRANM = require('./controllers/granmar/aireacion/ps01');
const ps02controlerGRANM = require('./controllers/granmar/aireacion/ps02');
const ps03controlerGRANM = require('./controllers/granmar/aireacion/ps03');
const ps04controlerGRANM = require('./controllers/granmar/aireacion/ps04');
const ps05controlerGRANM = require('./controllers/granmar/aireacion/ps05');
const ps09controlerGRANM = require('./controllers/granmar/aireacion/ps09');
const ps10controlerGRANM = require('./controllers/granmar/aireacion/ps10');
const ps11controlerGRANM = require('./controllers/granmar/aireacion/ps11');
const ps12controlerGRANM = require('./controllers/granmar/aireacion/ps12');
const ps14controlerGRANM = require('./controllers/granmar/aireacion/ps14');
const ps24controlerGRANM = require('./controllers/granmar/aireacion/ps24');
const ps25controlerGRANM = require('./controllers/granmar/aireacion/ps25');
const ps26controlerGRANM = require('./controllers/granmar/aireacion/ps26');
const ps27controlerGRANM = require('./controllers/granmar/aireacion/ps27');
const ps28controlerGRANM = require('./controllers/granmar/aireacion/ps28');
const ps29controlerGRANM = require('./controllers/granmar/aireacion/ps29');
const ps30controlerGRANM = require('./controllers/granmar/aireacion/ps30');
const ps31controlerGRANM = require('./controllers/granmar/aireacion/ps31');
const ps32controlerGRANM = require('./controllers/granmar/aireacion/ps32');
const ebCONSUcontroler = require('./controllers/granmar/bombeo/ebConsumisa');
const ebGRANMcontroler = require('./controllers/granmar/bombeo/ebGranmar');
const antenasGRANMcontroler = require('./controllers/granmar/aireacion/antenas');
const infoGeneralPSGRANMcontroler = require('./controllers/granmar/aireacion/infoGeneralPS');


wss.on('connection', (ws) => {
    /* clientSubscriptions.set(ws, false) */
    ws.on('message', (message) => {
        console.log(`Mensaje recibido: ${message}`)

        /******************** Finca Josefina *******************/
        
        if (message.toString().includes('FJOSPS01')) {
            ps01controler.handleSubscriptionPS01(ws, message)
        } else if (message.toString().includes('FJOSPS02')) {
            ps02controler.handleSubscriptionPS02(ws, message)
        } else if (message.toString().includes('FJOSPS03')) {
            ps03controler.handleSubscriptionPS03(ws, message)
        } else if (message.toString().includes('FJOSPS04')) {
            ps04controler.handleSubscriptionPS04(ws, message)
        } else if (message.toString().includes('FJOSPS05')) {
            ps05controler.handleSubscriptionPS05(ws, message)
        } else if (message.toString().includes('FJOSPS06')) {
            ps06controler.handleSubscriptionPS06(ws, message)
        } else if (message.toString().includes('FJOSPS07')) {
            ps07controler.handleSubscriptionPS07(ws, message)
        } else if (message.toString().includes('FJOSPS08')) {
            ps08controler.handleSubscriptionPS08(ws, message)
        } else if (message.toString().includes('FJOSPS09')) {
            ps09controler.handleSubscriptionPS09(ws, message)
        } else if (message.toString().includes('FJOSPS10')) {
            ps10controler.handleSubscriptionPS10(ws, message)
        } else if (message.toString().includes('FJOSPS11')) {
            ps11controler.handleSubscriptionPS11(ws, message)
        } else if (message.toString().includes('FJOSPS13')) {
            ps13controler.handleSubscriptionPS13(ws, message)
        } else if (message.toString().includes('FJOSPS14')) {
            ps14controler.handleSubscriptionPS14(ws, message)
        } else if (message.toString().includes('FJOSPS15')) {
            ps15controler.handleSubscriptionPS15(ws, message)
        } else if (message.toString().includes('FJOSPS16')) {
            ps16controler.handleSubscriptionPS16(ws, message)
        } else if (message.toString().includes('FJOSPS17')) {
            ps17controler.handleSubscriptionPS17(ws, message)
        } else if (message.toString().includes('FJOSPS18')) {
            ps18controler.handleSubscriptionPS18(ws, message)
        } else if (message.toString().includes('FJOSPS19')) {
            ps19controler.handleSubscriptionPS19(ws, message)
        } else if (message.toString().includes('FJOSPS21')) {
            ps21controler.handleSubscriptionPS21(ws, message)
        } else if (message.toString().includes('FJOSPS22')) {
            ps22controler.handleSubscriptionPS22(ws, message)
        } else if (message.toString().includes('FJOSPS23')) {
            ps23controler.handleSubscriptionPS23(ws, message)
        } else if (message.toString().includes('FJOSPS24')) {
            ps24controler.handleSubscriptionPS24(ws, message)
        } else if (message.toString().includes('FJOSPS25')) {
            ps25controler.handleSubscriptionPS25(ws, message)
        } else if (message.toString().includes('FJOSPS26')) {
            ps26controler.handleSubscriptionPS26(ws, message)
        } else if (message.toString().includes('FJOSPS27')) {
            ps27controler.handleSubscriptionPS27(ws, message)
        } else if (message.toString().includes('FJOSPS28')) {
            ps28controler.handleSubscriptionPS28(ws, message)
        } else if (message.toString().includes('FJOSPS29')) {
            ps29controler.handleSubscriptionPS29(ws, message)
        } else if (message.toString().includes('FJOSPS30')) {
            ps30controler.handleSubscriptionPS30(ws, message)
        } else if (message.toString().includes('FJOSPS31')) {
            ps31controler.handleSubscriptionPS31(ws, message)
        } else if (message.toString().includes('FJOSPS32')) {
            ps32controler.handleSubscriptionPS32(ws, message)
        } else if (message.toString().includes('FJOSPS33')) {
            ps33controler.handleSubscriptionPS33(ws, message)
        } else if (message.toString().includes('FJOSPS34')) {
            ps34controler.handleSubscriptionPS34(ws, message)
        } else if (message.toString().includes('FJOSPS35')) {
            ps35controler.handleSubscriptionPS35(ws, message)
        } else if (message.toString().includes('FJOSPS36')) {
            ps36controler.handleSubscriptionPS36(ws, message)
        } else if (message.toString().includes('FJOSPS37')) {
            ps37controler.handleSubscriptionPS37(ws, message)
        } else if (message.toString().includes('FJOSPS38')) {
            ps38controler.handleSubscriptionPS38(ws, message)
        } else if (message.toString().includes('FJOSPS39')) {
            ps39controler.handleSubscriptionPS39(ws, message)
        } else if (message.toString().includes('FJOSPS40')) {
            ps40controler.handleSubscriptionPS40(ws, message)
        } else if (message.toString().includes('FJOSPS41')) {
            ps41controler.handleSubscriptionPS41(ws, message)
        } else if (message.toString().includes('FJOSPS42')) {
            ps42controler.handleSubscriptionPS42(ws, message)
        } else if (message.toString().includes('FJOSPS43')) {
            ps43controler.handleSubscriptionPS43(ws, message)
        } else if (message.toString().includes('FJOSPS44')) {
            ps44controler.handleSubscriptionPS44(ws, message)
        } else if (message.toString().includes('FJOSPS45')) {
            ps45controler.handleSubscriptionPS45(ws, message)
        } else if (message.toString().includes('FJOSPS46')) {
            ps46controler.handleSubscriptionPS46(ws, message)
        } else if (message.toString().includes('FJOSPS47')) {
            console.log('Cliente 3')
            ps47controler.handleSubscriptionPS47(ws, message)
        } else if (message.toString().includes('FJOSPS47-2')) {
            
            ps47Bcontroler.handleSubscriptionPS47B(ws, message)
        } else if (message.toString().includes('FJOSPS48')) {
            ps48controler.handleSubscriptionPS48(ws, message)
        } else if (message.toString().includes('FJOSPS49')) {
            ps49controler.handleSubscriptionPS49(ws, message)
        } else if (message.toString().includes('FJOSPS50')) {
            ps50controler.handleSubscriptionPS50(ws, message)
        } else if (message.toString().includes('FJOSPS51')) {
            ps51controler.handleSubscriptionPS51(ws, message)
        } else if (message.toString().includes('FJOSPS52')) {
            ps52controler.handleSubscriptionPS52(ws, message)
        } else if (message.toString().includes('FJOSPS53')) {
            ps53controler.handleSubscriptionPS53(ws, message)
        } else if (message.toString().includes('FJOSPS54')) {
            ps54controler.handleSubscriptionPS54(ws, message)
        } else if (message.toString().includes('FJOSPS55')) {
            ps55controler.handleSubscriptionPS55(ws, message)
        } else if (message.toString().includes('FJOSPS56')) {
            ps56controler.handleSubscriptionPS56(ws, message)
        } else if (message.toString().includes('FJOSPS57')) {
            ps57controler.handleSubscriptionPS57(ws, message)
        } else if (message.toString().includes('FJOSPS58')) {
            ps58controler.handleSubscriptionPS58(ws, message)
        } else if (message.toString().includes('FJOSPC20')) {
            pc20controler.handleSubscriptionPC20(ws, message)
        } else if (message.toString().includes('FJOSPC101')) {
            pc101controler.handleSubscriptionPC101(ws, message)
        } else if (message.toString().includes('FJOSPC102')) {
            pc102controler.handleSubscriptionPC102(ws, message)
        } else if (message.toString().includes('FJOSPC103')) {
            pc103controler.handleSubscriptionPC103(ws, message)
        } else if (message.toString().includes('FJOSPC104')) {
            pc104controler.handleSubscriptionPC104(ws, message)
        } else if (message.toString().includes('FJOSPC106')) {
            pc106controler.handleSubscriptionPC106(ws, message)
        } else if (message.toString().includes('FJOSPC107')) {
            pc107controler.handleSubscriptionPC107(ws, message)
        } else if (message.toString().includes('FJOSPC108')) {
            pc108controler.handleSubscriptionPC108(ws, message)
        } else if (message.toString().includes('FJOSPC111')) {
            pc111controler.handleSubscriptionPC111(ws, message)
        } else if (message.toString().includes('FJOSPC113')) {
            pc113controler.handleSubscriptionPC113(ws, message)
        } else if (message.toString().includes('FJOSPC114')) {
            pc114controler.handleSubscriptionPC114(ws, message)
        } else if (message.toString().includes('FJOSPC115')) {
            pc115controler.handleSubscriptionPC115(ws, message)
        } else if (message.toString().includes('FJOSPC116')) {
            pc116controler.handleSubscriptionPC116(ws, message)
        } else if (message.toString().includes('FJOSPC117')) {
            pc117controler.handleSubscriptionPC117(ws, message)
        } else if (message.toString().includes('FJOSEB')) {
            ebFJOScontroler.handleSubscriptionEBJosefina(ws, message)
        } else if (message.toString().includes('FJOSAntenas')) {
            antenasFJOScontroler.handleSubscriptionAntenasAllJosefina(ws, message)
        } else if (message.toString().includes('FJOSInfoGeneralPS')) {
            infoGeneralPSFJOScontroler.handleSubscriptionInfoGeneralPSFJOS(ws, message)
        }


        /******************** Finca Maricultura *******************/
        else if (message.toString().includes('FMARCPC56')) {
            pc56controlerFMARC.handleSubscriptionPC56(ws, message)
        } else if (message.toString().includes('FMARCPC107A')) {
            pc107AcontrolerFMARC.handleSubscriptionPC107A(ws, message)
        } else if (message.toString().includes('FMARCPC107B')) {
            pc107BcontrolerFMARC.handleSubscriptionPC107B(ws, message)
        } else if (message.toString().includes('FMARCPC249')) {
            pc249controlerFMARC.handleSubscriptionPC249(ws, message)
        } else if (message.toString().includes('FMARCPC250')) {
            pc250controlerFMARC.handleSubscriptionPC250(ws, message)
        } else if (message.toString().includes('FMARCPC251')) {
            pc251controlerFMARC.handleSubscriptionPC251(ws, message)
        } else if (message.toString().includes('FMARCPC252')) {
            pc252controlerFMARC.handleSubscriptionPC252(ws, message)
        } else if (message.toString().includes('FMARCPC258')) {
            pc258controlerFMARC.handleSubscriptionPC258(ws, message)
        } else if (message.toString().includes('FMARCPC259')) {
            pc259controlerFMARC.handleSubscriptionPC259(ws, message)
        } else if (message.toString().includes('FMARCPC260')) {
            pc260controlerFMARC.handleSubscriptionPC260(ws, message)
        } else if (message.toString().includes('FMARCPS51')) {
            ps51controlerFMARC.handleSubscriptionPS51(ws, message)
        } else if (message.toString().includes('FMARCPS52')) {
            ps52controlerFMARC.handleSubscriptionPS52(ws, message)
        } else if (message.toString().includes('FMARCPS53')) {
            ps53controlerFMARC.handleSubscriptionPS53(ws, message)
        } else if (message.toString().includes('FMARCPS54')) {
            ps54controlerFMARC.handleSubscriptionPS54(ws, message)
        } else if (message.toString().includes('FMARCPS55')) {
            ps55controlerFMARC.handleSubscriptionPS55(ws, message)
        } else if (message.toString().includes('FMARCPS57')) {
            ps57controlerFMARC.handleSubscriptionPS57(ws, message)
        } else if (message.toString().includes('FMARCPS58')) {
            ps58controlerFMARC.handleSubscriptionPS58(ws, message)
        } else if (message.toString().includes('FMARCPS59')) {
            ps59controlerFMARC.handleSubscriptionPS59(ws, message)
        } else if (message.toString().includes('FMARCPS60')) {
            ps60controlerFMARC.handleSubscriptionPS60(ws, message)
        } else if (message.toString().includes('FMARCPS60')) {
            ps60controlerFMARC.handleSubscriptionPS60(ws, message)
        } else if (message.toString().includes('FMARCPS61')) {
            ps61controlerFMARC.handleSubscriptionPS61(ws, message)
        } else if (message.toString().includes('FMARCPS62')) {
            ps62controlerFMARC.handleSubscriptionPS62(ws, message)
        } else if (message.toString().includes('FMARCPS63A')) {
            ps63AcontrolerFMARC.handleSubscriptionPS63A(ws, message)
        } else if (message.toString().includes('FMARCPS63B')) {
            ps63BcontrolerFMARC.handleSubscriptionPS63B(ws, message)
        } else if (message.toString().includes('FMARCPS64A')) {
            ps64AcontrolerFMARC.handleSubscriptionPS64A(ws, message)
        } else if (message.toString().includes('FMARCPS64B')) {
            ps64BcontrolerFMARC.handleSubscriptionPS64B(ws, message)
        } else if (message.toString().includes('FMARCPS65')) {
            ps65controlerFMARC.handleSubscriptionPS65(ws, message)
        } else if (message.toString().includes('FMARCPS6A5')) {  
            ps65AcontrolerFMARC.handleSubscriptionPS65A(ws, message)
        } else if (message.toString().includes('FMARCPS6B5')) {
            ps65BcontrolerFMARC.handleSubscriptionPS65B(ws, message)
        } else if (message.toString().includes('FMARCPS66A')) {
            ps66AcontrolerFMARC.handleSubscriptionPS66A(ws, message)
        } else if (message.toString().includes('FMARCPS66B')) {
            ps66BcontrolerFMARC.handleSubscriptionPS66B(ws, message)
        } else if (message.toString().includes('FMARCPS67')) {
            ps67controlerFMARC.handleSubscriptionPS67(ws, message)
        } else if (message.toString().includes('FMARCPS68')) {
            ps68controlerFMARC.handleSubscriptionPS68(ws, message)
        } else if (message.toString().includes('FMARCPS69')) {
            ps69controlerFMARC.handleSubscriptionPS69(ws, message)
        } else if (message.toString().includes('FMARCPS70')) {
            ps70controlerFMARC.handleSubscriptionPS70(ws, message)
        } else if (message.toString().includes('FMARCPS71')) {
            ps71controlerFMARC.handleSubscriptionPS71(ws, message)
        } else if (message.toString().includes('FMARCPS72')) {
            ps72controlerFMARC.handleSubscriptionPS72(ws, message)
        } else if (message.toString().includes('FMARCPS73')) {
            ps73controlerFMARC.handleSubscriptionPS73(ws, message)
        } else if (message.toString().includes('FMARCPS75')) {
            ps75controlerFMARC.handleSubscriptionPS75(ws, message)
        } else if (message.toString().includes('FMARCPS76A')) {
            ps76AcontrolerFMARC.handleSubscriptionPS76A(ws, message)
        } else if (message.toString().includes('FMARCPS76B')) {
            ps76BcontrolerFMARC.handleSubscriptionPS76B(ws, message)
        } else if (message.toString().includes('FMARCPS77A')) {
            ps77AcontrolerFMARC.handleSubscriptionPS77A(ws, message)
        } else if (message.toString().includes('FMARCPS77B')) {
            ps77BcontrolerFMARC.handleSubscriptionPS77B(ws, message)
        } else if (message.toString().includes('FMARCPS78')) {
            ps78controlerFMARC.handleSubscriptionPS78(ws, message)
        } else if (message.toString().includes('FMARCPS79')) {
            ps79controlerFMARC.handleSubscriptionPS79(ws, message)
        } else if (message.toString().includes('FMARCPS80')) {
            ps80controlerFMARC.handleSubscriptionPS80(ws, message)
        } else if (message.toString().includes('FMARCPS81')) {
            ps81controlerFMARC.handleSubscriptionPS81(ws, message)
        } else if (message.toString().includes('FMARCPS82')) {
            ps82controlerFMARC.handleSubscriptionPS82(ws, message)
        } else if (message.toString().includes('FMARCPS83')) {
            ps83controlerFMARC.handleSubscriptionPS83(ws, message)
        } else if (message.toString().includes('FMARCPS84')) {
            ps84controlerFMARC.handleSubscriptionPS84(ws, message)
        } else if (message.toString().includes('FMARCPS85')) {
            ps85controlerFMARC.handleSubscriptionPS85(ws, message)
        } else if (message.toString().includes('FMARCPS86')) {
            ps86controlerFMARC.handleSubscriptionPS86(ws, message)
        } else if (message.toString().includes('FMARCPS87')) {
            ps87controlerFMARC.handleSubscriptionPS87(ws, message)
        } else if (message.toString().includes('FMARCPS88')) {
            ps88controlerFMARC.handleSubscriptionPS88(ws, message)
        } else if (message.toString().includes('FMARCAntenas')) {
            antenasFMARCcontroler.handleSubscriptionAntenasAllMaricultura(ws, message)
        } else if (message.toString().includes('FMARCInfoGeneralPS')) {
            infoGeneralPSFMARCcontroler.handleSubscriptionInfoGeneralPSFMARC(ws, message)
        } else if (message.toString().includes('FMARCEB')) {
            ebFMARCcontroler.handleSubscriptionEBMaricultura(ws, message)
        }


        /******************** Finca Naturisa *******************/

        else if (message.toString().includes('FNTSPC202')) {
            pc202controlerFNTS.handleSubscriptionPC202(ws, message)
        } else if (message.toString().includes('FNTSPC206')) {
            pc206controlerFNTS.handleSubscriptionPC206(ws, message)
        } else if (message.toString().includes('FNTSPC207')) {
            pc207controlerFNTS.handleSubscriptionPC207(ws, message)
        } else if (message.toString().includes('FNTSPC208')) {
            pc208controlerFNTS.handleSubscriptionPC208(ws, message)
        } else if (message.toString().includes('FNTSPC209')) {
            pc209controlerFNTS.handleSubscriptionPC209(ws, message)
        } else if (message.toString().includes('FNTSPC210')) {
            pc210controlerFNTS.handleSubscriptionPC210(ws, message)
        } else if (message.toString().includes('FNTSPC211')) {
            pc211controlerFNTS.handleSubscriptionPC211(ws, message)
        } else if (message.toString().includes('FNTSPC212')) {
            pc212controlerFNTS.handleSubscriptionPC212(ws, message)
        } else if (message.toString().includes('FNTSPC214')) {
            pc214controlerFNTS.handleSubscriptionPC214(ws, message)
        } else if (message.toString().includes('FNTSPC215')) {
            pc215controlerFNTS.handleSubscriptionPC215(ws, message)
        } else if (message.toString().includes('FNTSPC216')) {
            pc216controlerFNTS.handleSubscriptionPC216(ws, message)
        } else if (message.toString().includes('FNTSPC217')) {
            pc217controlerFNTS.handleSubscriptionPC217(ws, message)
        } else if (message.toString().includes('FNTSPC218')) {
            pc218controlerFNTS.handleSubscriptionPC218(ws, message)
        } else if (message.toString().includes('FNTSPS01')) {
            ps01controlerFNTS.handleSubscriptionPS01(ws, message)
        } else if (message.toString().includes('FNTSPS02')) {
            ps02controlerFNTS.handleSubscriptionPS02(ws, message)
        } else if (message.toString().includes('FNTSPS03')) {
            ps03controlerFNTS.handleSubscriptionPS03(ws, message)
        } else if (message.toString().includes('FNTSPS04')) {
            ps04controlerFNTS.handleSubscriptionPS04(ws, message)
        } else if (message.toString().includes('FNTSPS05')) {
            ps05controlerFNTS.handleSubscriptionPS05(ws, message)
        } else if (message.toString().includes('FNTSPS06')) {
            ps06controlerFNTS.handleSubscriptionPS06(ws, message)
        } else if (message.toString().includes('FNTSPS07')) {
            ps07controlerFNTS.handleSubscriptionPS07(ws, message)
        } else if (message.toString().includes('FNTSPS08')) {
            ps08controlerFNTS.handleSubscriptionPS08(ws, message)
        } else if (message.toString().includes('FNTSPS09')) {
            ps09controlerFNTS.handleSubscriptionPS09(ws, message)
        } else if (message.toString().includes('FNTSPS10')) {
            ps10controlerFNTS.handleSubscriptionPS10(ws, message)
        } else if (message.toString().includes('FNTSPS11')) {
            ps11controlerFNTS.handleSubscriptionPS11(ws, message)
        } else if (message.toString().includes('FNTSPS12A')) {
            ps12AcontrolerFNTS.handleSubscriptionPS12A(ws, message)
        } else if (message.toString().includes('FNTSPS12B')) {
            ps12BcontrolerFNTS.handleSubscriptionPS12B(ws, message)
        } else if (message.toString().includes('FNTSPS13A')) {
            ps13AcontrolerFNTS.handleSubscriptionPS13A(ws, message)
        } else if (message.toString().includes('FNTSPS13B')) {
            ps13BcontrolerFNTS.handleSubscriptionPS13B(ws, message)
        } else if (message.toString().includes('FNTSPS14')) {
            ps14controlerFNTS.handleSubscriptionPS14(ws, message)
        } else if (message.toString().includes('FNTSPS15')) {
            ps15controlerFNTS.handleSubscriptionPS15(ws, message)
        } else if (message.toString().includes('FNTSPS16A')) {
            ps16AcontrolerFNTS.handleSubscriptionPS16A(ws, message)
        } else if (message.toString().includes('FNTSPS16B')) {
            ps16BcontrolerFNTS.handleSubscriptionPS16B(ws, message)
        } else if (message.toString().includes('FNTSPS17')) {
            ps17controlerFNTS.handleSubscriptionPS17(ws, message)
        } else if (message.toString().includes('FNTSPS18')) {
            ps18controlerFNTS.handleSubscriptionPS18(ws, message)
        } else if (message.toString().includes('FNTSPS19')) {
            ps19controlerFNTS.handleSubscriptionPS19(ws, message)
        } else if (message.toString().includes('FNTSPS20')) {
            ps20controlerFNTS.handleSubscriptionPS20(ws, message)
        } else if (message.toString().includes('FNTSPS21')) {
            ps21controlerFNTS.handleSubscriptionPS21(ws, message)
        } else if (message.toString().includes('FNTSPS22A')) {
            ps22AcontrolerFNTS.handleSubscriptionPS22A(ws, message)
        } else if (message.toString().includes('FNTSPS22B')) {
            ps22BcontrolerFNTS.handleSubscriptionPS22B(ws, message)
        } else if (message.toString().includes('FNTSPS23')) {
            ps23controlerFNTS.handleSubscriptionPS23(ws, message)
        } else if (message.toString().includes('FNTSPS25')) {
            ps25controlerFNTS.handleSubscriptionPS25(ws, message)
        } else if (message.toString().includes('FNTSPS26')) {
            ps26controlerFNTS.handleSubscriptionPS26(ws, message)
        } else if (message.toString().includes('FNTSPS27')) {
            ps27controlerFNTS.handleSubscriptionPS27(ws, message)
        } else if (message.toString().includes('FNTSPS28')) {
            ps28controlerFNTS.handleSubscriptionPS28(ws, message)
        } else if (message.toString().includes('FNTSPS29')) {
            ps29controlerFNTS.handleSubscriptionPS29(ws, message)
        } else if (message.toString().includes('FNTSPS30')) {
            ps30controlerFNTS.handleSubscriptionPS30(ws, message)
        } else if (message.toString().includes('FNTSPS31')) {
            ps31controlerFNTS.handleSubscriptionPS31(ws, message)
        } else if (message.toString().includes('FNTSPS32')) {
            ps32controlerFNTS.handleSubscriptionPS32(ws, message)
        } else if (message.toString().includes('FNTSAntenas')) {
            antenasFNTScontroler.handleSubscriptionAntenasAllNaturisa(ws, message)
        } else if (message.toString().includes('FNTSInfoGeneralPS')) {
            infoGeneralPSFNTScontroler.handleSubscriptionInfoGeneralPSFNTS(ws, message)
        } 



        /******************** Finca Pesjolla *******************/
        else if (message.toString().includes('FPSJPC219')) {
            pc219controlerFPSJ.handleSubscriptionPC219(ws, message)
        } else if (message.toString().includes('FPSJPC220')) {
            pc220controlerFPSJ.handleSubscriptionPC220(ws, message)
        } else if (message.toString().includes('FPSJPC222')) {
            pc222controlerFPSJ.handleSubscriptionPC222(ws, message)
        } else if (message.toString().includes('FPSJPC224')) {
            pc224controlerFPSJ.handleSubscriptionPC224(ws, message)
        } else if (message.toString().includes('FPSJPC225')) {
            pc225controlerFPSJ.handleSubscriptionPC225(ws, message)
        } else if (message.toString().includes('FPSJPC226')) {
            pc226controlerFPSJ.handleSubscriptionPC226(ws, message)
        } else if (message.toString().includes('FPSJPC228')) {
            pc228controlerFPSJ.handleSubscriptionPC228(ws, message)
        } else if (message.toString().includes('FPSJPC230')) {
            pc230controlerFPSJ.handleSubscriptionPC230(ws, message)
        } else if (message.toString().includes('FPSJPS33')) {
            ps33controlerFPSJ.handleSubscriptionPS33(ws, message)
        } else if (message.toString().includes('FPSJPS34A')) {
            ps34AcontrolerFPSJ.handleSubscriptionPS34A(ws, message)
        } else if (message.toString().includes('FPSJPS34B')) {
            ps34BcontrolerFPSJ.handleSubscriptionPS34B(ws, message)
        } else if (message.toString().includes('FPSJPS35A')) {
            ps35AcontrolerFPSJ.handleSubscriptionPS35A(ws, message)
        } else if (message.toString().includes('FPSJPS35B')) {
            ps35BcontrolerFPSJ.handleSubscriptionPS35B(ws, message)
        } else if (message.toString().includes('FPSJPS36')) {
            ps36controlerFPSJ.handleSubscriptionPS36(ws, message)
        } else if (message.toString().includes('FPSJPS37A')) {
            ps37AcontrolerFPSJ.handleSubscriptionPS37A(ws, message)
        } else if (message.toString().includes('FPSJPS37B')) {
            ps37BcontrolerFPSJ.handleSubscriptionPS37B(ws, message)
        } else if (message.toString().includes('FPSJPS38')) {
            ps38controlerFPSJ.handleSubscriptionPS38(ws, message)
        } else if (message.toString().includes('FPSJPS39')) {
            ps39controlerFPSJ.handleSubscriptionPS39(ws, message)
        } else if (message.toString().includes('FPSJPS40')) {
            ps40controlerFPSJ.handleSubscriptionPS40(ws, message)
        } else if (message.toString().includes('FPSJPS41')) {
            ps41controlerFPSJ.handleSubscriptionPS41(ws, message)
        } else if (message.toString().includes('FPSJPS42A')) {
            ps42AcontrolerFPSJ.handleSubscriptionPS42A(ws, message)
        } else if (message.toString().includes('FPSJPS42B')) {
            ps42BcontrolerFPSJ.handleSubscriptionPS42B(ws, message)
        } else if (message.toString().includes('FPSJPS43A')) {
            ps43AcontrolerFPSJ.handleSubscriptionPS43A(ws, message)
        } else if (message.toString().includes('FPSJPS43B')) {
            ps43BcontrolerFPSJ.handleSubscriptionPS43B(ws, message)
        } else if (message.toString().includes('FPSJPS44')) {
            ps44controlerFPSJ.handleSubscriptionPS44(ws, message)
        } else if (message.toString().includes('FPSJPS45')) {
            ps45controlerFPSJ.handleSubscriptionPS45(ws, message)
        } else if (message.toString().includes('FPSJPS46')) {
            ps46controlerFPSJ.handleSubscriptionPS46(ws, message)
        } else if (message.toString().includes('FPSJPS47A')) {
            ps47AcontrolerFPSJ.handleSubscriptionPS47A(ws, message)
        } else if (message.toString().includes('FPSJPS47B')) {
            ps47BcontrolerFPSJ.handleSubscriptionPS47B(ws, message)
        } else if (message.toString().includes('FPSJPS48')) {
            ps48controlerFPSJ.handleSubscriptionPS48(ws, message)
        } else if (message.toString().includes('FPSJPS49')) {
            ps49controlerFPSJ.handleSubscriptionPS49(ws, message)
        } else if (message.toString().includes('FPSJPS50')) {
            ps50controlerFPSJ.handleSubscriptionPS50(ws, message)
        } else if (message.toString().includes('FPSJAntenas')) {
            antenasFPSJcontroler.handleSubscriptionAntenasAllPesjolla(ws, message)
        } else if (message.toString().includes('FPSJInfoGeneralPS')) {
            infoGeneralPSFPSJcontroler.handleSubscriptionInfoGeneralPSFPSJ(ws, message)
        }



        /******************** Finca rioNilo *******************/
        else if (message.toString().includes('FRNLPC108')) {
            pc108controlerFRNL.handleSubscriptionPC108(ws, message)
        } else if (message.toString().includes('FRNLPC109')) {
            pc109controlerFRNL.handleSubscriptionPC109(ws, message)
        } else if (message.toString().includes('FRNLPC110')) {
            pc110controlerFRNL.handleSubscriptionPC110(ws, message)
        } else if (message.toString().includes('FRNLPC111')) {
            pc111controlerFRNL.handleSubscriptionPC111(ws, message)
        } else if (message.toString().includes('FRNLPC112')) {
            pc112controlerFRNL.handleSubscriptionPC112(ws, message)
        } else if (message.toString().includes('FRNLPC113')) {
            pc113controlerFRNL.handleSubscriptionPC113(ws, message)
        } else if (message.toString().includes('FRNLPC114')) {
            pc114controlerFRNL.handleSubscriptionPC114(ws, message)
        } else if (message.toString().includes('FRNLPC118')) {
            pc118controlerFRNL.handleSubscriptionPC118(ws, message)
        } else if (message.toString().includes('FRNLPC119')) {
            pc119controlerFRNL.handleSubscriptionPC119(ws, message)
        } else if (message.toString().includes('FRNLPC120')) {
            pc120controlerFRNL.handleSubscriptionPC120(ws, message)
        } else if (message.toString().includes('FRNLPC121')) {
            pc121controlerFRNL.handleSubscriptionPC121(ws, message)
        } else if (message.toString().includes('FRNLPC122')) {
            pc122controlerFRNL.handleSubscriptionPC122(ws, message)
        } else if (message.toString().includes('FRNLPC123')) {
            pc123controlerFRNL.handleSubscriptionPC123(ws, message)
        } else if (message.toString().includes('FRNLPC124')) {
            pc124controlerFRNL.handleSubscriptionPC124(ws, message)
        } else if (message.toString().includes('FRNLPC125')) {
            pc125controlerFRNL.handleSubscriptionPC125(ws, message)
        } else if (message.toString().includes('FRNLPC126')) {
            pc126controlerFRNL.handleSubscriptionPC126(ws, message)
        } else if (message.toString().includes('FRNLPC127')) {
            pc127controlerFRNL.handleSubscriptionPC127(ws, message)
        } else if (message.toString().includes('FRNLPC141')) {
            pc141controlerFRNL.handleSubscriptionPC141(ws, message)
        } else if (message.toString().includes('FRNLPC144')) {
            pc144controlerFRNL.handleSubscriptionPC144(ws, message)
        } else if (message.toString().includes('FRNLPS23')) {
            ps23controlerFRNL.handleSubscriptionPS23(ws, message)
        } else if (message.toString().includes('FRNLPS24')) {
            ps24controlerFRNL.handleSubscriptionPS24(ws, message)
        } else if (message.toString().includes('FRNLPS25')) {
            ps25controlerFRNL.handleSubscriptionPS25(ws, message)
        } else if (message.toString().includes('FRNLPS26')) {
            ps26controlerFRNL.handleSubscriptionPS26(ws, message)
        } else if (message.toString().includes('FRNLPS27')) {
            ps27controlerFRNL.handleSubscriptionPS27(ws, message)
        } else if (message.toString().includes('FRNLPS28')) {
            ps28controlerFRNL.handleSubscriptionPS28(ws, message)
        } else if (message.toString().includes('FRNLPS29')) {
            ps29controlerFRNL.handleSubscriptionPS29(ws, message)
        } else if (message.toString().includes('FRNLPS30')) {
            ps30controlerFRNL.handleSubscriptionPS30(ws, message)
        } else if (message.toString().includes('FRNLPS31')) {
            ps31controlerFRNL.handleSubscriptionPS31(ws, message)
        } else if (message.toString().includes('FRNLPS32')) {
            ps32controlerFRNL.handleSubscriptionPS32(ws, message)
        } else if (message.toString().includes('FRNLPS33')) {
            ps33controlerFRNL.handleSubscriptionPS33(ws, message)
        } else if (message.toString().includes('FRNLPS34')) {
            ps34controlerFRNL.handleSubscriptionPS34(ws, message)
        } else if (message.toString().includes('FRNLPS35')) {
            ps35controlerFRNL.handleSubscriptionPS35(ws, message)
        } else if (message.toString().includes('FRNLPS36')) {
            ps36controlerFRNL.handleSubscriptionPS36(ws, message)
        } else if (message.toString().includes('FRNLPS37')) {
            ps37controlerFRNL.handleSubscriptionPS37(ws, message)
        } else if (message.toString().includes('FRNLPS38')) {
            ps38controlerFRNL.handleSubscriptionPS38(ws, message)
        } else if (message.toString().includes('FRNLPS39')) {
            ps39controlerFRNL.handleSubscriptionPS39(ws, message)
        } else if (message.toString().includes('FRNLPS40')) {
            ps40controlerFRNL.handleSubscriptionPS40(ws, message)
        } else if (message.toString().includes('FRNLPS41')) {
            ps41controlerFRNL.handleSubscriptionPS41(ws, message)
        } else if (message.toString().includes('FRNLPS42')) {
            ps42controlerFRNL.handleSubscriptionPS42(ws, message)
        } else if (message.toString().includes('FRNLPS43')) {
            ps43controlerFRNL.handleSubscriptionPS43(ws, message)
        } else if (message.toString().includes('FRNLPS44')) {
            ps44controlerFRNL.handleSubscriptionPS44(ws, message)
        } else if (message.toString().includes('FRNLPS45')) {
            ps45controlerFRNL.handleSubscriptionPS45(ws, message)
        } else if (message.toString().includes('FRNLPS55')) {
            ps55controlerFRNL.handleSubscriptionPS55(ws, message)
        } else if (message.toString().includes('FRNLPS56')) {
            ps56controlerFRNL.handleSubscriptionPS56(ws, message)
        } else if (message.toString().includes('FRNLSPC101')) {
            pc101controlerFRNLS.handleSubscriptionPC101(ws, message)
        } else if (message.toString().includes('FRNLSPC102')) {
            pc102controlerFRNLS.handleSubscriptionPC102(ws, message)
        } else if (message.toString().includes('FRNLSPC103')) {
            pc103controlerFRNLS.handleSubscriptionPC103(ws, message)
        } else if (message.toString().includes('FRNLSPC104')) {
            pc104controlerFRNLS.handleSubscriptionPC104(ws, message)
        } else if (message.toString().includes('FRNLSPC105')) {
            pc105controlerFRNLS.handleSubscriptionPC105(ws, message)
        } else if (message.toString().includes('FRNLSPC106')) {
            pc106controlerFRNLS.handleSubscriptionPC106(ws, message)
        } else if (message.toString().includes('FRNLSPC107')) {
            pc107controlerFRNLS.handleSubscriptionPC107(ws, message)
        } else if (message.toString().includes('FRNLSPC128')) {
            pc128controlerFRNLS.handleSubscriptionPC128(ws, message)
        } else if (message.toString().includes('FRNLSPC129')) {
            pc129controlerFRNLS.handleSubscriptionPC129(ws, message)
        } else if (message.toString().includes('FRNLSPC130')) {
            pc130controlerFRNLS.handleSubscriptionPC130(ws, message)
        } else if (message.toString().includes('FRNLSPC131')) {
            pc131controlerFRNLS.handleSubscriptionPC131(ws, message)
        } else if (message.toString().includes('FRNLSPC132')) {
            pc132controlerFRNLS.handleSubscriptionPC132(ws, message)
        } else if (message.toString().includes('FRNLSPC133')) {
            pc133controlerFRNLS.handleSubscriptionPC133(ws, message)
        } else if (message.toString().includes('FRNLSPC134')) {
            pc134controlerFRNLS.handleSubscriptionPC134(ws, message)
        } else if (message.toString().includes('FRNLSPC135')) {
            pc135controlerFRNLS.handleSubscriptionPC135(ws, message)
        } else if (message.toString().includes('FRNLSPC136')) {
            pc136controlerFRNLS.handleSubscriptionPC136(ws, message)
        } else if (message.toString().includes('FRNLSPC137')) {
            pc137controlerFRNLS.handleSubscriptionPC137(ws, message)
        } else if (message.toString().includes('FRNLSPC138')) {
            pc138controlerFRNLS.handleSubscriptionPC138(ws, message)
        } else if (message.toString().includes('FRNLSPC139')) {
            pc139controlerFRNLS.handleSubscriptionPC139(ws, message)
        } else if (message.toString().includes('FRNLSPC140')) {
            pc140controlerFRNLS.handleSubscriptionPC140(ws, message)
        } else if (message.toString().includes('FRNLSPC142')) {
            pc142controlerFRNLS.handleSubscriptionPC142(ws, message)
        } else if (message.toString().includes('FRNLSPC143')) {
            pc143controlerFRNLS.handleSubscriptionPC143(ws, message)
        } else if (message.toString().includes('FRNLSPS01')) {
            ps01controlerFRNLS.handleSubscriptionPS01(ws, message)
        } else if (message.toString().includes('FRNLSPS02')) {
            ps02controlerFRNLS.handleSubscriptionPS02(ws, message)
        } else if (message.toString().includes('FRNLSPS03')) {
            ps03controlerFRNLS.handleSubscriptionPS03(ws, message)
        } else if (message.toString().includes('FRNLSPS04')) {
            ps04controlerFRNLS.handleSubscriptionPS04(ws, message)
        } else if (message.toString().includes('FRNLSPS05')) {
            ps05controlerFRNLS.handleSubscriptionPS05(ws, message)
        } else if (message.toString().includes('FRNLSPS06')) {
            ps06controlerFRNLS.handleSubscriptionPS06(ws, message)
        } else if (message.toString().includes('FRNLSPS07')) {
            ps07controlerFRNLS.handleSubscriptionPS07(ws, message)
        } else if (message.toString().includes('FRNLSPS08')) {
            ps08controlerFRNLS.handleSubscriptionPS08(ws, message)
        } else if (message.toString().includes('FRNLSPS09')) {
            ps09controlerFRNLS.handleSubscriptionPS09(ws, message)
        } else if (message.toString().includes('FRNLSPS10')) {
            ps10controlerFRNLS.handleSubscriptionPS10(ws, message)
        } else if (message.toString().includes('FRNLSPS11')) {
            ps11controlerFRNLS.handleSubscriptionPS11(ws, message)
        } else if (message.toString().includes('FRNLSPS12')) {
            ps12controlerFRNLS.handleSubscriptionPS12(ws, message)
        } else if (message.toString().includes('FRNLSPS1B2')) {
            ps12bcontrolerFRNLS.handleSubscriptionPS12B(ws, message)
        } else if (message.toString().includes('FRNLSPS13')) {
            ps13controlerFRNLS.handleSubscriptionPS13(ws, message)
        } else if (message.toString().includes('FRNLSPS14')) {
            ps14controlerFRNLS.handleSubscriptionPS14(ws, message)
        } else if (message.toString().includes('FRNLSPS15')) {
            ps15controlerFRNLS.handleSubscriptionPS15(ws, message)
        } else if (message.toString().includes('FRNLSPS16')) {
            ps16controlerFRNLS.handleSubscriptionPS16(ws, message)
        } else if (message.toString().includes('FRNLSPS17')) {
            ps17controlerFRNLS.handleSubscriptionPS17(ws, message)
        } else if (message.toString().includes('FRNLSPS18')) {
            ps18controlerFRNLS.handleSubscriptionPS18(ws, message)
        } else if (message.toString().includes('FRNLSPS19')) {
            ps19controlerFRNLS.handleSubscriptionPS19(ws, message)
        } else if (message.toString().includes('FRNLSPS20')) {
            ps20controlerFRNLS.handleSubscriptionPS20(ws, message)
        } else if (message.toString().includes('FRNLSPS21')) {
            ps21controlerFRNLS.handleSubscriptionPS21(ws, message)
        } else if (message.toString().includes('FRNLSPS22')) {
            ps22controlerFRNLS.handleSubscriptionPS22(ws, message)
        } else if (message.toString().includes('FRNLSPS46')) {
            ps46controlerFRNLS.handleSubscriptionPS46(ws, message)
        } else if (message.toString().includes('FRNLSPS47')) {
            ps47controlerFRNLS.handleSubscriptionPS47(ws, message)
        } else if (message.toString().includes('FRNLSPS48')) {
            ps48controlerFRNLS.handleSubscriptionPS48(ws, message)
        } else if (message.toString().includes('FRNLSPS49')) {
            ps49controlerFRNLS.handleSubscriptionPS49(ws, message)
        } else if (message.toString().includes('FRNLSPS50')) {
            ps50controlerFRNLS.handleSubscriptionPS50(ws, message)
        } else if (message.toString().includes('FRNLSPS51')) {
            ps51controlerFRNLS.handleSubscriptionPS51(ws, message)
        } else if (message.toString().includes('FRNLSPS53')) {
            ps53controlerFRNLS.handleSubscriptionPS53(ws, message)
        } else if (message.toString().includes('FRNLSPS54')) {
            ps54controlerFRNLS.handleSubscriptionPS54(ws, message)
        } else if (message.toString().includes('FRNLEB')) {
            ebFRNLcontroler.handleSubscriptionEBRioNiloNorte(ws, message)
        } else if (message.toString().includes('FRNLSEB')) {
            ebFRNLScontroler.handleSubscriptionEBRioNiloSur(ws, message)
        } else if (message.toString().includes('FRNLAntenas')) {
            antenasFRNLcontroler.handleSubscriptionAntenasAllRioNilo(ws, message)
        } else if (message.toString().includes('FRNLInfoGeneralPS')) {
            infoGeneralPSFRNLcontroler.handleSubscriptionInfoGeneralPSFRNL(ws, message)
        }


        /******************** Finca Camaron *******************/
        else if (message.toString().includes('FCAMPC103')) {
            pc103controlerFCAM.handleSubscriptionPC103(ws, message)
        } else if (message.toString().includes('FCAMPC104')) {
            pc104controlerFCAM.handleSubscriptionPC104(ws, message)
        } else if (message.toString().includes('FCAMPC105')) {
            pc105controlerFCAM.handleSubscriptionPC105(ws, message)
        } else if (message.toString().includes('FCAMPC106')) {
            pc106controlerFCAM.handleSubscriptionPC106(ws, message)
        } else if (message.toString().includes('FCAMPC107')) {
            pc107controlerFCAM.handleSubscriptionPC107(ws, message)
        } else if (message.toString().includes('FCAMPC109')) {
            pc109controlerFCAM.handleSubscriptionPC109(ws, message)
        } else if (message.toString().includes('FCAMPC110')) {
            pc110controlerFCAM.handleSubscriptionPC110(ws, message)
        } else if (message.toString().includes('FCAMPC111')) {
            pc111controlerFCAM.handleSubscriptionPC111(ws, message)
        } else if (message.toString().includes('FCAMPC112')) {
            pc112controlerFCAM.handleSubscriptionPC112(ws, message)
        } else if (message.toString().includes('FCAMPC113')) {
            pc113controlerFCAM.handleSubscriptionPC113(ws, message)
        } else if (message.toString().includes('FCAMPS01')) {
            ps01controlerFCAM.handleSubscriptionPS01(ws, message)
        } else if (message.toString().includes('FCAMPS02')) {
            ps02controlerFCAM.handleSubscriptionPS02(ws, message)
        } else if (message.toString().includes('FCAMPS03')) {
            ps03controlerFCAM.handleSubscriptionPS03(ws, message)
        } else if (message.toString().includes('FCAMPS04')) {
            ps04controlerFCAM.handleSubscriptionPS04(ws, message)
        } else if (message.toString().includes('FCAMPS05A')) {
            ps05AcontrolerFCAM.handleSubscriptionPS05A(ws, message)
        } else if (message.toString().includes('FCAMPS05B')) {
            ps05BcontrolerFCAM.handleSubscriptionPS05B(ws, message)
        } else if (message.toString().includes('FCAMPS06')) {
            ps06controlerFCAM.handleSubscriptionPS06(ws, message)
        } else if (message.toString().includes('FCAMPS07A')) {
            ps07AcontrolerFCAM.handleSubscriptionPS07A(ws, message)
        } else if (message.toString().includes('FCAMPS07B')) {
            ps07BcontrolerFCAM.handleSubscriptionPS07B(ws, message)
        } else if (message.toString().includes('FCAMPS08')) {
            ps08controlerFCAM.handleSubscriptionPS08(ws, message)
        } else if (message.toString().includes('FCAMPS09')) {
            ps09controlerFCAM.handleSubscriptionPS09(ws, message)
        } else if (message.toString().includes('FCAMPS10')) {
            ps10controlerFCAM.handleSubscriptionPS10(ws, message)
        } else if (message.toString().includes('FCAMPS11')) {
            ps11controlerFCAM.handleSubscriptionPS11(ws, message)
        } else if (message.toString().includes('FCAMPS12')) {
            ps12controlerFCAM.handleSubscriptionPS12(ws, message)
        } else if (message.toString().includes('FCAMPS13')) {
            ps13controlerFCAM.handleSubscriptionPS13(ws, message)
        } else if (message.toString().includes('FCAMPS14')) {
            ps14controlerFCAM.handleSubscriptionPS14(ws, message)
        } else if (message.toString().includes('FCAMPS15')) {
            ps15controlerFCAM.handleSubscriptionPS15(ws, message)
        } else if (message.toString().includes('FCAMPS16A')) {
            ps16AcontrolerFCAM.handleSubscriptionPS16A(ws, message)
        } else if (message.toString().includes('FCAMPS16B')) {
            ps16BcontrolerFCAM.handleSubscriptionPS16B(ws, message)
        } else if (message.toString().includes('FCAMPS17')) {
            ps17controlerFCAM.handleSubscriptionPS17(ws, message)
        } else if (message.toString().includes('FCAMPS18')) {
            ps18controlerFCAM.handleSubscriptionPS18(ws, message)
        } else if (message.toString().includes('FCAMPS19')) {
            ps19controlerFCAM.handleSubscriptionPS19(ws, message)
        } else if (message.toString().includes('FCAMPS20')) {
            ps20controlerFCAM.handleSubscriptionPS20(ws, message)
        } else if (message.toString().includes('FCAMAntenas')) {
            antenasFCAMcontroler.handleSubscriptionAntenasAllCamaron(ws, message)
        } else if (message.toString().includes('FCAMInfoGeneralPS')) {
            infoGeneralPSFCAMcontroler.handleSubscriptionInfoGeneralPSFCAM(ws, message)
        } else if (message.toString().includes('FCAMEB')) {
            ebFCAMcontroler.handleSubscriptionEBCamaron(ws, message)
        }


        /******************** Granmar *******************/
        else if (message.toString().includes('GRANMPS01')) {
            ps01controlerGRANM.handleSubscriptionPS01(ws, message)
        } else if (message.toString().includes('GRANMPS02')) {
            ps02controlerGRANM.handleSubscriptionPS02(ws, message)
        } else if (message.toString().includes('GRANMPS03')) {
            ps03controlerGRANM.handleSubscriptionPS03(ws, message)
        } else if (message.toString().includes('GRANMPS04')) {
            ps04controlerGRANM.handleSubscriptionPS04(ws, message)
        } else if (message.toString().includes('GRANMPS05')) {
            ps05controlerGRANM.handleSubscriptionPS05(ws, message)
        } else if (message.toString().includes('GRANMPS09')) {
            ps09controlerGRANM.handleSubscriptionPS09(ws, message)
        } else if (message.toString().includes('GRANMPS10')) {
            ps10controlerGRANM.handleSubscriptionPS10(ws, message)
        } else if (message.toString().includes('GRANMPS11')) {
            ps11controlerGRANM.handleSubscriptionPS11(ws, message)
        } else if (message.toString().includes('GRANMPS12')) {
            ps12controlerGRANM.handleSubscriptionPS12(ws, message)
        } else if (message.toString().includes('GRANMPS14')) {
            ps14controlerGRANM.handleSubscriptionPS14(ws, message)
        } else if (message.toString().includes('GRANMPS24')) {
            ps24controlerGRANM.handleSubscriptionPS24(ws, message)
        } else if (message.toString().includes('GRANMPS25')) {
            ps25controlerGRANM.handleSubscriptionPS25(ws, message)
        } else if (message.toString().includes('GRANMPS26')) {
            ps26controlerGRANM.handleSubscriptionPS26(ws, message)
        } else if (message.toString().includes('GRANMPS27')) {
            ps27controlerGRANM.handleSubscriptionPS27(ws, message)
        } else if (message.toString().includes('GRANMPS28')) {
            ps28controlerGRANM.handleSubscriptionPS28(ws, message)
        } else if (message.toString().includes('GRANMPS29')) {
            ps29controlerGRANM.handleSubscriptionPS29(ws, message)
        } else if (message.toString().includes('GRANMPS30')) {
            ps30controlerGRANM.handleSubscriptionPS30(ws, message)
        } else if (message.toString().includes('GRANMPS31')) {
            ps31controlerGRANM.handleSubscriptionPS31(ws, message)
        } else if (message.toString().includes('GRANMPS32')) {
            ps32controlerGRANM.handleSubscriptionPS32(ws, message)
        } else if (message.toString().includes('CONSUEB')) {
            ebCONSUcontroler.handleSubscriptionEBConsumisa(ws, message)
        } else if (message.toString().includes('GRANMEB')) {
            ebGRANMcontroler.handleSubscriptionEBGranmar(ws, message)
        } else if (message.toString().includes('GRANMAntenas')) {
            antenasGRANMcontroler.handleSubscriptionAntenasAllGranmar(ws, message)
        } else if (message.toString().includes('GRANMInfoGeneralPS')) {
            infoGeneralPSGRANMcontroler.handleSubscriptionInfoGeneralPSGRANM(ws, message)
        }


    })

    ws.on('close', () => {
        /* clientSubscriptions.delete(ws); */
        console.log('Cliente desconectado')
       /*  if ([...clientSubscriptions.values()].every(subscribed => !subscribed)) {
            clearInterval(interval)
            interval = null
        } */
    });

    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });
});


connectionDB();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth/auth'));
//app.use('/api/santapriscila/california/eb', require('./routes/santapriscila/california/eb'));
//app.use('/api/santapriscila/chanduy/eb', require('./routes/santapriscila/chanduy/eb'));

//wss.setMaxListeners(20)


server.listen(process.env.PORT, () => {
    console.log(`Servidor ejecutandose en puerto ${process.env.PORT}`)
});