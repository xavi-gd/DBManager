const User = require('../models/User');
const Game = require('../models/Game');

/**
 * Elimina registros de una tabla.
 * @param {string} modelName - Nombre del modelo ("User" o "Game").
 * @param {Object} condition - Condición para filtrar los registros a eliminar.
 */
async function deleteData(modelName, condition = {}) {
  try {
    const Model = modelName === 'User' ? User : Game;
    const result = await Model.destroy({ where: condition });
    console.log(`Registros eliminados de ${modelName}:`, result);
  } catch (error) {
    console.error(`Error al eliminar datos de ${modelName}:`, error);
  }
}

// Ejemplo de uso
(async () => {
  console.log('Eliminando usuarios con nombre "Juan Pérez"...');
  await deleteData('User', { nombre: 'Juan Pérez' }); // Elimina usuarios con nombre 'Juan Pérez'

  console.log('Eliminando todos los juegos...');
  await deleteData('Game'); // Elimina todos los juegos
})();
