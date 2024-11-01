import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Media, SampleBlock } from '@/payload-types';

type Props = SampleBlock & {
  className?: string;
};

export default function SampleBlock({
  title,
  image,
  description,
  className
}: Props) {
  const { url, alt, width, height } = image as Media;

  return (
    <section className={cn('max-w-[400px]', className)}>
      <div>
        <Image
          src={url!}
          alt={alt}
          width={width!}
          height={height!}
        />
      </div>
      <h2 className={'text-2xl font-bold uppercase'}>{title}</h2>
      <p>{description}</p>
      <Button>Button</Button>
    </section>
  );
}
