import { Router } from 'express';
import { SubmitFeedbackUseCase } from '../usecases';
import { PrismaFeedbacksRepository } from '../repositories';
import { NodemailerAdapter } from '../adapters';

export function feedbackRoutes(router: Router): void {
  router.post('/feedbacks', async (request, response): Promise<void> => {
    try {
      const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
      const nodemailerAdapter = new NodemailerAdapter();

      const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemailerAdapter
      );

      await submitFeedbackUseCase.execute(request.body);

      response.status(201).send();
    } catch (error) {
      response.status(500).json({ error });
    }
  });
}
