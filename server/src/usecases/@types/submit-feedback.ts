type SubmitFeedbackType = 'BUG' | 'IDEA' | 'OTHER';

export interface SubmitFeedbackUseCaseRequest {
  type: SubmitFeedbackType;
  comment: string;
  screenshot?: string;
}

export interface SubmitFeedback {
  execute(request: SubmitFeedbackUseCaseRequest): Promise<void>;
}
