import { FeedbackKeyType } from '../constants';

export interface FormProps {
  feedbackType: FeedbackKeyType;
  onFeedbackSent(): void;
  onFeedbackCancelled(): void;
}
