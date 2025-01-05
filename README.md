# DBManager

DBManager es una herramienta para gestionar la creación, actualización y llenado de tablas en una base de datos MySQL utilizando Sequelize. Este proyecto incluye scripts para sincronizar modelos, insertar datos de ejemplo, revisar y formatear el código, y más.

## Requisitos Previos

1. **Node.js**: Instala Node.js desde [https://nodejs.org](https://nodejs.org).
2. **MySQL**: Asegúrate de tener un servidor MySQL activo.
3. **Dependencias del Proyecto**:
   - Instala las dependencias con:
     ```bash
     npm install
     ```

## Configuración

1. **Configurar variables de entorno**:
   - Renombra el archivo `.env.example` a `.env`.
   - Configura las credenciales de tu base de datos MySQL:
     ```env
     DB_NAME=dbmanager
     DB_USER=root
     DB_PASSWORD=tu_contraseña
     DB_HOST=localhost
     DB_PORT=3306
     ```

2. **Crear la base de datos**:
   - Usa tu cliente MySQL para crear la base de datos:
     ```sql
     CREATE DATABASE dbmanager;
     ```

## Scripts Disponibles

### Sincronización y datos
- `npm start`: Sincroniza las tablas en la base de datos (alias de `npm run syncTables`).
- `npm run syncTables`: Sincroniza las tablas de los modelos definidos en el proyecto.
- `npm run insertData`: Inserta datos de ejemplo en las tablas `User` y `Game`.
- `npm run deleteData`: Elimina datos de las tablas según condiciones predefinidas.

### Linting y Formateo
- `npm run eslint`: Revisa el código con ESLint para detectar problemas de sintaxis o estilo.
- `npm run eslint:fix`: Intenta corregir automáticamente los problemas detectados por ESLint.
- `npm run prettier`: Formatea el código usando Prettier para mantener un estilo consistente.

### Pruebas
- `npm test`: Placeholder para agregar pruebas automatizadas más adelante.

## Estructura del Proyecto

```
DBManager/
├── config/
│   └── database.js      # Configuración de Sequelize y conexión a MySQL.
├── models/
│   ├── User.js          # Modelo de la tabla User.
│   ├── Game.js          # Modelo de la tabla Game.
│   └── index.js         # Importa y exporta todos los modelos.
├── scripts/
│   ├── syncTables.js    # Sincroniza las tablas con la base de datos.
│   ├── insertData.js    # Inserta datos de ejemplo en las tablas.
│   ├── deleteData.js    # Elimina datos de las tablas.
├── .env                 # Variables de entorno.
├── .gitignore           # Archivos ignorados por git.
├── package.json         # Configuración de dependencias y scripts npm.
└── README.md            # Documentación del proyecto.
```

## Créditos

Desarrollado para la gestión eficiente de bases de datos utilizando Node.js y Sequelize.
