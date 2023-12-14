import { MailAdapter } from '../../adapters';
import { FeedbacksRepository } from '../../repositories';
import { SubmitFeedback, SubmitFeedbackUseCaseRequest } from '../@types';

export class SubmitFeedbackUseCase implements SubmitFeedback {
  constructor(
    private readonly feedbacksRepository: FeedbacksRepository,
    private readonly mailAdapter: MailAdapter
  ) {}

  async execute(request: SubmitFeedbackUseCaseRequest): Promise<void> {
    const { type, comment, screenshot } = request;

    if (!type) throw new Error('Type is required.');
    if (!comment) throw new Error('Comment is required.');

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format.');
    }

    await this.feedbacksRepository.create(request);
    await this.mailAdapter.sendMail({
      subject: 'Novo feedback',
      body: [
        '<div style="font-family: sans-serif; font-size: 16px; color: #111;">',
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot ? `<img src="${screenshot}" />` : null,
        '</div>',
      ].join('\n'),
    });
  }
}
