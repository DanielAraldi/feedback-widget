import { FeedbackTypeProps } from '../@types';
import { BUG_IMAGE, IDEA_IMAGE, THOUGHT_IMAGE } from '../config';

export const FEEDBACK_TYPES: FeedbackTypeProps = {
  BUG: {
    title: 'Problema',
    image: BUG_IMAGE,
  },
  IDEA: {
    title: 'Ideia',
    image: IDEA_IMAGE,
  },
  OTHER: {
    title: 'Outro',
    image: THOUGHT_IMAGE,
  },
};
