import express, { Request, Response } from 'express';
import apiRoutes from './routes/api.routes';

const app = express();

// Configuración de middleware, rutas, etc.

app.use('/api', apiRoutes);

export default app;
