import React from 'react';

import RichText from '@/payload/components/RichText';

import { Width } from '../Width';

export const Message: React.FC = ({
  message
}: {
  message: Record<string, any>;
}) => {
  return (
    <Width
      className='my-12'
      width='100'
    >
      {message && <RichText content={message} />}
    </Width>
  );
};
