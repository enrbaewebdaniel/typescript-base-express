import express from "express";
import routes from "./routes";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes - Descomentar cuando se creen las rutas
app.use("/api", routes);

export default app;
