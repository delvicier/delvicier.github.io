"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
process.loadEnvFile();
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: "postgres",
                host: process.env.HOST,
                port: Number(process.env.PORT),
                username: process.env.USER,
                password: process.env.PASSWORD,
                database: process.env.NAMEDB,
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.providers.js.map