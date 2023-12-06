import { useState } from 'react';
import { FeedbackTypeKey } from '../../@types';
import {
  FeedbackContentStep,
  FeedbackSuccessStep,
  FeedbackTypeStep,
} from './Steps';

export function WidgetForm() {
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false);
  const [feedbackType, setFeedbackType] = useState<FeedbackTypeKey | null>(
    null
  );

  const renderProgressSteps: JSX.Element = (
    <>
      {feedbackType ? (
        <FeedbackContentStep
          feedbackType={feedbackType}
          onFeedbackSent={() => setFeedbackSent(true)}
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <FeedbackTypeStep onFeedbackTypeChanged={key => setFeedbackType(key)} />
      )}
    </>
  );

  function handleRestartFeedback(): void {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        renderProgressSteps
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
