const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  user: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  nombre: {
    type: String,
    required: true
  },

  apellido: {
    type: String,
    required: true
  },
  
  celular: {
    type: String,
    required: true
  },

  cargo: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true, // Hace que el campo sea obligatorio
    unique: true,   // Asegura que el correo no se repita en la base de datos
    trim: true,     // Elimina espacios en blanco antes y después del correo
    lowercase: true,// Convierte el correo a minúsculas
    match: [        // Valida el formato de correo electrónico
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "Por favor ingresa un correo electrónico válido"
    ]
  },

  foto: {
    type: String,
    required: false
  },

  unique_id: {
    type: String,
    required: true
  },

  estado: {
    type: String,
    required: true
  },

  ultconexion: {
    type: String,
    required: true
  }

});

module.exports = model('Usuario', UserSchema);