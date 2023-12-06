import { FeedbackTypeKey, FeedbackTypeProps } from '../@types';
import { BUG_IMAGE, IDEA_IMAGE, THOUGHT_IMAGE } from '../config';

export const FEEDBACK_TYPES: Record<FeedbackTypeKey, FeedbackTypeProps> = {
  BUG: {
    title: 'Problema',
    image: {
      source: BUG_IMAGE,
      alt: 'Imagem de um inseto',
    },
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: IDEA_IMAGE,
      alt: 'Imagem de uma lâmpada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: THOUGHT_IMAGE,
      alt: 'Imagem de um balão de pensamento',
    },
  },
};
