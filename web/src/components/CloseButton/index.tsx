import { Popover } from '@headlessui/react';
import { X } from 'phosphor-react';

import { CloseButtonProps } from '../../@types';

export function CloseButton({ disabled }: CloseButtonProps) {
  return (
    <Popover.Button
      disabled={disabled}
      className='top-5 right-5 absolute text-zinc-400 hover:text-zinc-100 disabled:text-zinc-400'
      title='Fechar formulário de feedback'
    >
      <X weight='bold' className='w-4 h-4' />
    </Popover.Button>
  );
}
