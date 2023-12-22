import { useState } from 'react';
import { Camera, Trash } from 'phosphor-react';
import html2canvas from 'html2canvas';

import { Loading } from '..';
import { ScreenshotButtonProps } from '../../@types';

export function ScreenshotButton(props: ScreenshotButtonProps) {
  const { onScreenshotTook, screenshot, disabled } = props;

  const [isTakingScreenshot, setIsTakingScreenshot] = useState<boolean>(false);

  async function handleTakeScreenshot(): Promise<void> {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64Image = canvas.toDataURL('image/png');
    onScreenshotTook(base64Image);

    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        disabled={disabled}
        type='button'
        className='p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors'
        style={{ backgroundImage: `url(${screenshot})` }}
        onClick={() => onScreenshotTook('')}
      >
        <Trash weight='fill' />
      </button>
    );
  }

  return (
    <button
      type='button'
      className='p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-zinc-800'
      onClick={handleTakeScreenshot}
      disabled={isTakingScreenshot || disabled}
    >
      {isTakingScreenshot ? <Loading /> : <Camera className='w-6 h-6' />}
    </button>
  );
}
