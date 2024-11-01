import Image from 'next/image';

import { Toaster } from 'sonner';

import './login.scss';

type Args = {
  children: React.ReactNode;
};

export default function Layout({ children }: Args) {
  return (
    <>
      <Toaster />
      <main className='flex h-screen'>
        {/* Left side - Image */}
        <div className='relative hidden w-1/2 lg:block'>
          <Image
            alt='alt text'
            className='absolute inset-0 h-full w-full object-cover'
            src='/images/login-screen.jpg'
            width={1920}
            height={1280}
          />
          {/* <div className={'relative h-full'}>
          <video
            className={'w-full h-full object-cover'}
            autoPlay
            loop
            muted
          >
            <source
              src='/video/login-screen-ocean.mp4'
              type='video/mp4'
            />
          </video>
        </div> */}
        </div>

        {/* Right side - Form */}
        {children}
      </main>
    </>
  );
}
