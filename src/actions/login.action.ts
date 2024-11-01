'use server';

import { cookies as cookieStore } from 'next/headers';

import payloadConfig from '@payload-config';
import { getPayloadHMR } from '@payloadcms/next/utilities';

import { LoginSchemaType } from '@/app/(payload)/admin/(auth)/components/LoginForm';

export async function loginAction(values: LoginSchemaType) {
  try {
    const payload = await getPayloadHMR({ config: payloadConfig });
    const { email, password } = values;
    const cookies = await cookieStore();

    const res = await payload.login({
      collection: 'users',
      data: {
        email,
        password
      }
    });

    const token = res.token;
    cookies.set('payload-token', token!);

    return {
      success: 'Logged in successfully',
      status: 200
    };
  } catch (error) {
    return {
      error: error.message,
      status: 500
    };
  }
}
