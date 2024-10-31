'use client';

import Link from 'next/link';
import { useActionState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@payloadcms/ui';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { loginAction } from '@/actions/login.action';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'No password entered').max(256)
});

export default function LoginForm() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const [state, action, isPending] = useActionState(loginAction, null);

  console.log(state);

  return (
    <form
      action={action}
      method='POST'
    >
      <div>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          required
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          required
        />
      </div>
      {state?.error && <p>{state.error}</p>}
      <Link href='/admin/forgot'>Forgot Password?</Link>
      <Button
        type={'submit'}
        disabled={isPending}
      >
        Login
      </Button>
    </form>
  );
}
