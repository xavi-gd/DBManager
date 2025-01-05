require('dotenv').config(); // Cargar variables de entorno
const fs = require('fs'); // Para leer archivos del sistema
const User = require('../models/User'); // Modelo User
const Game = require('../models/Game'); // Modelo Game

/**
 * Inserta o actualiza datos desde un archivo JSON en la tabla especificada.
 * @param {string} modelName - Nombre del modelo (e.g., "User", "Game").
 * @param {string} filePath - Ruta al archivo JSON.
 * @param {Array<string>} fieldsToUpdate - Campos a actualizar si el registro ya existe.
 */
async function insertData(modelName, filePath, fieldsToUpdate) {
  try {
    // Verificar si el archivo existe
    if (!fs.existsSync(filePath)) {
      console.error(`El archivo ${filePath} no existe.`);
      return;
    }

    // Leer el archivo JSON
    const jsonData = fs.readFileSync(filePath, 'utf-8');

    // Verificar si el archivo está vacío
    if (!jsonData.trim()) {
      console.error(`El archivo ${filePath} está vacío. No se insertarán datos.`);
      return;
    }

    const data = JSON.parse(jsonData);

    // Verificar si el contenido del JSON es un array válido
    if (!Array.isArray(data) || data.length === 0) {
      console.error(`El archivo ${filePath} no contiene datos válidos. No se insertarán datos.`);
      return;
    }

    // Determinar el modelo
    const Model = modelName === 'User' ? User : Game;

    // Insertar o actualizar los datos en la base de datos
    await Model.bulkCreate(data, {
      updateOnDuplicate: fieldsToUpdate, // Campos que se actualizarán si hay un duplicado
      validate: true,
    });

    console.log(`${data.length} registros insertados o actualizados exitosamente en la tabla ${modelName}.`);
  } catch (error) {
    console.error(`Error al insertar datos en ${modelName} desde ${filePath}:`, error);
  }
}

// Rutas a los archivos JSON desde el archivo .env o rutas predeterminadas
const usersFilePath = process.env.USERS_JSON_PATH || './users.json';
const gamesFilePath = process.env.GAMES_JSON_PATH || './games.json';

// Ejecución
(async () => {
  console.log('Insertando datos desde JSON...');

  // Insertar usuarios
  if (usersFilePath) {
    await insertData('User', usersFilePath, ['nombre', 'email', 'password']);
  } else {
    console.error('La variable de entorno USERS_JSON_PATH no está configurada.');
  }

  // Insertar juegos
  if (gamesFilePath) {
    await insertData('Game', gamesFilePath, ['complejidad']);
  } else {
    console.error('La variable de entorno GAMES_JSON_PATH no está configurada.');
  }
})();
