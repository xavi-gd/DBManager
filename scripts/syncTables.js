const sequelize = require('../config/database');
const models = require('../models'); // Importa todos los modelos automáticamente

(async () => {
  try {
    await sequelize.authenticate(); // Verifica la conexión con la base de datos
    console.log('Database connection successful.');

    for (const modelName in models) {
      const model = models[modelName];
      await model.sync({ alter: true }); // Sincroniza cada modelo
      console.log(`Table for ${modelName} synchronized.`);
    }
  } catch (error) {
    console.error('Error while synchronizing tables:', error);
  } finally {
    await sequelize.close(); // Cierra la conexión con la base de datos
  }
})();
