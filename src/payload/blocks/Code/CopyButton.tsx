'use client';

import { useState } from 'react';

import { CopyIcon } from '@payloadcms/ui';

import { Button } from '@/payload/components/ui/button';

export function CopyButton({ code }: { code: string }) {
  const [text, setText] = useState('Copy');

  function updateCopyStatus() {
    if (text === 'Copy') {
      setText(() => 'Copied!');
      setTimeout(() => {
        setText(() => 'Copy');
      }, 1000);
    }
  }

  return (
    <div className='flex justify-end align-middle'>
      <Button
        className='flex gap-1'
        variant={'secondary'}
        onClick={async () => {
          await navigator.clipboard.writeText(code);
          updateCopyStatus();
        }}
      >
        <p>{text}</p>

        <div className='w-6 h-6 dark:invert'>
          <CopyIcon />
        </div>
      </Button>
    </div>
  );
}
