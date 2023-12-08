import { SubmitFeedbackUseCase } from './submit-feedback';
import { SubmitFeedbackType } from '../@types';

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const makeSut = (): SubmitFeedbackUseCase =>
  new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
  );

describe('Submit feedback', () => {
  it('should to able to submit a feedback', async () => {
    await expect(
      makeSut().execute({
        comment: 'any_comment',
        type: 'OTHER',
        screenshot: 'data:image/png;base64,any_screenshot',
      })
    ).resolves.not.toThrow();
    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit a feedback without type', async () => {
    await expect(
      makeSut().execute({
        type: '' as SubmitFeedbackType,
        comment: 'any_comment',
        screenshot: 'data:image/png;base64,any_screenshot',
      })
    ).rejects.toThrow();
  });

  it('should not be able to submit a feedback without comment', async () => {
    await expect(
      makeSut().execute({
        type: 'OTHER',
        comment: '',
        screenshot: 'data:image/png;base64,any_screenshot',
      })
    ).rejects.toThrow();
  });

  it('should not be able to submit a feedback with an invalid screenshot', async () => {
    await expect(
      makeSut().execute({
        type: 'OTHER',
        comment: 'any_comment',
        screenshot: 'any_screenshot.png',
      })
    ).rejects.toThrow();
  });
});
