import { redirect } from 'next/navigation';

import { getCurrentUser } from '@/db/queries/users';

import LoginForm from './components/LoginForm';

export default async function LoginPage() {
  const user = await getCurrentUser();

  if (user) {
    return redirect('/admin');
  }

  return <LoginForm />;
}
