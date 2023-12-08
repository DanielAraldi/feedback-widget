type FeedbackType = 'BUG' | 'IDEA' | 'OTHER';

export interface FeedbackCreateData {
  type: FeedbackType;
  comment: string;
  screenshot?: string;
}

export interface FeedbacksRepository {
  create(data: FeedbackCreateData): Promise<void>;
}
