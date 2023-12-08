import { Router } from 'express';
import { createTransport } from 'nodemailer';
import { envs } from '../config';
import { SubmitFeedbackUseCase } from '../usecases';
import { PrismaFeedbacksRepository } from '../repositories';
import { NodemailerAdapter } from '../adapters';

const { toMail, hostMail, passwordMail, portMail, userMail } = envs;

const transport = createTransport({
  host: hostMail,
  port: portMail,
  auth: {
    user: userMail,
    pass: passwordMail,
  },
});

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

    // await transport.sendMail({
    //   from: 'Equipe Feedget <oi@feedget.com>',
    //   to: `Daniel Sansão Araldi <${toMail}>`,
    //   subject: 'Novo feedback',
    //   html: [
    //     '<div style="font-family: sans-serif; font-size: 16px; color: #111;">',
    //     `<p>Tipo do feedback: ${type}</p>`,
    //     `<p>Comentário: ${comment}</p>`,
    //     '</div>',
    //   ].join('\n'),
    // });
  });
}
