import { FeedbackKeyType } from '../constants';

export interface FeedbackProps {
  type: FeedbackKeyType;
  comment: string;
  screenshot: string | null;
}

export interface FeedbackServiceProps {
  send(feedback: FeedbackProps): Promise<boolean>;
}
