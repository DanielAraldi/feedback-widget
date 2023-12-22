import { FeedbackServiceProps, FeedbackProps } from '../@types';
import { api } from '../config';

export const FeedbackService: FeedbackServiceProps = {
  async send(feedback: FeedbackProps): Promise<boolean> {
    try {
      await api.post('/feedbacks', feedback);
      return true;
    } catch (error) {
      return false;
    }
  },
};
