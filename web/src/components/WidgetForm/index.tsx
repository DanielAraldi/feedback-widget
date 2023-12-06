import { useState } from 'react';
import { FeedbackTypeKey } from '../../@types';
import { FeedbackContentStep, FeedbackTypeStep } from './Steps';

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackTypeKey | null>(
    null
  );

  function handleRestartFeedback(): void {
    setFeedbackType(null);
  }

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      {feedbackType ? (
        <FeedbackContentStep
          feedbackType={feedbackType}
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <FeedbackTypeStep onFeedbackTypeChanged={key => setFeedbackType(key)} />
      )}

      <footer className='text-xs text-neutral-400'>
        Feito com ♥ pela{' '}
        <a
          className='underline underline-offset-2'
          href='https://rocketseat.com.br'
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
