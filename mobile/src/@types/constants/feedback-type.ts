export type FeedbackKeyType = 'BUG' | 'IDEA' | 'OTHER';

export interface FeedbackDataProps {
  title: string;
  image: any;
}

export type FeedbackTypeProps = {
  [key in FeedbackKeyType]: FeedbackDataProps;
};
