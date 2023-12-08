import { Express } from 'express';
import cors from 'cors';

export function setupCors(app: Express): void {
  app.use(cors());
}
