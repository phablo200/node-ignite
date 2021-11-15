import express, { Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';
import 'express-async-errors';

import './database';
import './shared/container';

import { router } from './routes';
import swaggerFile from './swagger.json';

import { AppError } from './errors/AppError';

const app = express();

// Parse JSON
app.use(express.json());

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

// Tratando errors
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`
  });
});

app.listen(3334, () => {
  console.log('BACKEND running on port 3334');
});