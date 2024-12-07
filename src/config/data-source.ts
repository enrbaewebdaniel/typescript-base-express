import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../models/user.model";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    synchronize: true, // ¡Cuidado! Solo en desarrollo. En producción usa migraciones.
    logging: true,
    entities: [User], // Entidades a usar
    migrations: ["./migrations/**/*.ts"], // Ruta de migraciones
    subscribers: [],
});
