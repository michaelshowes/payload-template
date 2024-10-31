import { headers } from 'next/headers';

export async function getCurrentUser() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`,
    {
      credentials: 'include',
      headers: await headers()
    }
  );

  const data = await res.json();
  const { user } = data;

  return user;
}
