import { Sequelize } from 'sequelize';
import { loadConfig } from '../config/config';

const config = loadConfig();
const database = config.database;
const sequelize = new Sequelize({
    host: database.host,
    username: database.username,
    password: database.password,
    database: database.database,
    dialect: 'mssql',
    dialectOptions: {
        compatibility: '120'
    }
});

export default sequelize;