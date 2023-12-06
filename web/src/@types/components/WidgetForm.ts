import { FeedbackTypeKey } from '..';

export interface FeedbackTypeStepProps {
  onFeedbackTypeChanged(key: FeedbackTypeKey): void;
}

export interface FeedbackContentStepProps {
  feedbackType: FeedbackTypeKey;
  onFeedbackRestartRequested(): void;
}
