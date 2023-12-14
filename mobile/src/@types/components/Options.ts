import { FeedbackKeyType } from '../constants';

export interface OptionsProps {
  onFeedbackTypeChanged(feedbackType: FeedbackKeyType): void;
}
