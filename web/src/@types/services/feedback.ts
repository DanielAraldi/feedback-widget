import { FeedbackTypeKey } from '..';

export interface FeedbackProps {
  type: FeedbackTypeKey;
  comment: string;
  screenshot: string | null;
}

export interface FeedbackServiceProps {
  send(feedback: FeedbackProps): Promise<boolean>;
}
