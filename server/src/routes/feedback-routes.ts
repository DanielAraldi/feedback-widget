import { Express } from 'express';
import { prisma } from '../prisma';

export function setupRoutes(app: Express): void {
  app.post('/feedbacks', async (request, response): Promise<void> => {
    const { type, comment, screenshot } = request.body;

    const { id } = await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
        createdAt: new Date(),
      },
    });

    response.status(201).json({ id });
  });
}
