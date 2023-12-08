import express, { Express } from 'express';
import { feedbackRoutes } from './feedback-routes';

export function setupRoutes(app: Express): void {
  const router = express.Router();
  feedbackRoutes(router);
  app.use(router);
}
