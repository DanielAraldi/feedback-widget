import { MailAdapter } from '../../adapters';
import { FeedbacksRepository } from '../../repositories';
import { SubmitFeedback, SubmitFeedbackUseCaseRequest } from '../@types';

export class SubmitFeedbackUseCase implements SubmitFeedback {
  constructor(
    private readonly feedbacksRepository: FeedbacksRepository,
    private readonly mailAdapter: MailAdapter
  ) {}

  async execute(request: SubmitFeedbackUseCaseRequest): Promise<void> {
    const { type, comment } = request;

    await this.feedbacksRepository.create(request);
    await this.mailAdapter.sendMail({
      subject: 'Novo feedback',
      body: [
        '<div style="font-family: sans-serif; font-size: 16px; color: #111;">',
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        '</div>',
      ].join('\n'),
    });
  }
}
