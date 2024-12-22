"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
process.loadEnvFile();
async function createDatabase() {
    try {
        const name_datebase = process.env.NAMEDB;
        const connection = await (0, typeorm_1.createConnection)({
            type: "postgres",
            host: process.env.HOST,
            port: Number(process.env.PORT),
            username: process.env.USER,
            password: process.env.PASSWORD,
            entities: ["dist/**/*.entity{.ts,.js}"],
            synchronize: false
        });
        const databaseExists = await connection.query(`SELECT 1 FROM pg_database WHERE datname = '${name_datebase}'`);
        if (databaseExists.length === 0) {
            await connection.query(`CREATE DATABASE ${name_datebase}`);
            console.log(`Base de datos '${name_datebase}' creada`);
        }
        else {
            console.log(`La base de datos '${name_datebase}' ya existe`);
        }
        await connection.close();
    }
    catch (error) {
        console.error('Error al crear la base de datos:', error);
    }
}
createDatabase();
//# sourceMappingURL=create-database.js.map