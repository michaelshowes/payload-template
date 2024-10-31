import React, { Fragment } from 'react';

import type { Page } from '@/payload-types';

import { blockComponents } from './blockRegistration';

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][];
}> = (props) => {
  const { blocks } = props;

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block;

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType];

            if (Block) {
              return (
                <div
                  id={`${blockType}-${index}`}
                  className='my-16'
                  key={index}
                >
                  {/* @ts-expect-error */}
                  <Block {...block} />
                </div>
              );
            }
          }
          return null;
        })}
      </Fragment>
    );
  }

  return null;
};
