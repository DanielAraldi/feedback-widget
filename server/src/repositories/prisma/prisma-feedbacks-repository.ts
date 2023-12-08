import { prisma } from '../../prisma';
import { FeedbackCreateData, FeedbacksRepository } from '../@types';

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create(data: FeedbackCreateData): Promise<void> {
    await prisma.feedback.create({
      data: {
        ...data,
        createdAt: new Date(),
      },
    });
  }
}
