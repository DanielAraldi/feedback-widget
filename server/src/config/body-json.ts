import express, { Express } from 'express';

export function bodyJson(app: Express): void {
  app.use(express.json());
}
