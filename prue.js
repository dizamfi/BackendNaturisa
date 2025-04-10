const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Inicializa Firebase Admin SDK
const serviceAccount = require('./firebase-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Middleware
app.use(bodyParser.json());

// Endpoint para enviar notificación
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
    console.log('✅ Notificación enviada:', response);
    res.json({ success: true, response });
  } catch (error) {
    console.error('❌ Error al enviar notificación:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  //console.log(🚀 Servidor corriendo en http://localhost:${PORT});
});