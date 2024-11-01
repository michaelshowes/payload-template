'use client';

import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useTransition } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { loginAction } from '@/actions/login.action';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export type LoginSchemaType = z.infer<typeof loginSchema>;

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, 'No password entered').max(256)
});

export default function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = (values: LoginSchemaType) => {
    startTransition(() => {
      loginAction(values).then((data) => {
        if (data.success) {
          toast.success(data.success, {
            position: 'top-center'
          });

          setTimeout(() => {
            redirect('/admin');
          }, 2000);
        }
        if (data.error) {
          toast.error(data.error, {
            position: 'top-center'
          });
        }
      });
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        // action={action}
        method='POST'
      >
        <FormField
          name={'email'}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type={'email'}
                  placeholder={'Enter your email'}
                />
              </FormControl>
              <FormMessage {...field} />
            </FormItem>
          )}
        />
        <FormField
          name={'password'}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  type={'password'}
                  placeholder={'Enter your password'}
                />
              </FormControl>
              <FormMessage {...field} />
            </FormItem>
          )}
        />
        <div>
          <Link href='/admin/forgot'>Forgot Password?</Link>
          <Button
            type={'submit'}
            // disabled={}
            className={'rounded-lg'}
          >
            Login
          </Button>
        </div>
      </form>
    </Form>
  );
}
