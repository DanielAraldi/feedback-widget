import { CloseButton } from '../..';
import { FeedbackSuccessStepProps } from '../../../@types';
import { SUCCESS_IMAGE } from '../../../config';

export function FeedbackSuccessStep({
  onFeedbackRestartRequested,
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className='flex flex-col items-center py-10 w-[304px]'>
        <img
          src={SUCCESS_IMAGE}
          alt='Imagem de sucesso ao enviar o formulário'
          className='w-10 h-10'
        />

        <span className='text-xl mt-2'>Agradecemos o feedback!</span>

        <button
          type='button'
          className='py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500'
          onClick={onFeedbackRestartRequested}
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
