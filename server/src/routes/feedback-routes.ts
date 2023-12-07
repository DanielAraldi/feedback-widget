import { Express } from 'express';
import { createTransport } from 'nodemailer';
import { prisma } from '../prisma';
import { envs } from '../config';

const { toMail, hostMail, passwordMail, portMail, userMail } = envs;

const transport = createTransport({
  host: hostMail,
  port: portMail,
  auth: {
    user: userMail,
    pass: passwordMail,
  },
});

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

    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: `Daniel Sansão Araldi <${toMail}>`,
      subject: 'Novo feedback',
      html: [
        '<div style="font-family: sans-serif; font-size: 16px; color: #111;">',
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        '</div>',
      ].join('\n'),
    });

    response.status(201).json({ id });
  });
}
