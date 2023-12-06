export type FeedbackTypeKey = 'BUG' | 'IDEA' | 'OTHER';

interface FeedbackImageProps {
  source: string;
  alt: string;
}

export interface FeedbackTypeProps {
  title: string;
  image: FeedbackImageProps;
}
