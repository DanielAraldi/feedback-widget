import { FeedbackTypeKey } from '..';

export interface FeedbackTypeStepProps {
  onFeedbackTypeChanged(key: FeedbackTypeKey): void;
}

export interface FeedbackContentStepProps {
  feedbackType: FeedbackTypeKey;
  onFeedbackSent(): void;
  onFeedbackRestartRequested(): void;
}

export interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested(): void;
}
