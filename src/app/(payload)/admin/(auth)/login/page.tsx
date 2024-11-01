import { redirect } from 'next/navigation';

import { getCurrentUser } from '@/db/queries/users';

import LoginForm from '../components/LoginForm';

export default async function LoginPage() {
  const user = await getCurrentUser();

  console.log(user);

  if (user) {
    return redirect('/admin');
  }

  return (
    <div className='flex w-full items-center justify-center lg:w-1/2'>
      <LoginForm />
    </div>
  );
}
