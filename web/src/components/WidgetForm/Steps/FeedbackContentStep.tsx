import { useState, FormEvent } from 'react';
import { ArrowLeft } from 'phosphor-react';
import { CloseButton, ScreenshotButton } from '../..';
import { FeedbackContentStepProps } from '../../../@types';
import { FEEDBACK_TYPES } from '../../../constants';

export function FeedbackContentStep(props: FeedbackContentStepProps) {
  const { feedbackType, onFeedbackSent, onFeedbackRestartRequested } = props;

  const [comment, setComment] = useState<string>('');
  const [screenshot, setScreenshot] = useState<string>('');

  const { title, image } = FEEDBACK_TYPES[feedbackType];

  function handleSubmitFeedback(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          type='button'
          className='top-5 left-5 absolute text-zinc-400 hover:text-zinc-100'
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight='bold' className='w-4 h-4' />
        </button>

        <span className='text-xl leading-6 flex items-center gap-2'>
          <img src={image.source} alt={image.alt} className='w-6 h-6' />

          {title}
        </span>

        <CloseButton />
      </header>

      <form className='my-4 w-full' onSubmit={handleSubmitFeedback}>
        <textarea
          className='min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'
          placeholder='Conte com detalhes o que está acontecendo...'
          onChange={event => setComment(event.target.value)}
        />

        <footer className='flex gap-2 mt-2'>
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type='submit'
            disabled={comment.length === 0}
            className='p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500'
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
