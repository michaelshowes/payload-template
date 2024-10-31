import type { Header } from '@/payload-types';
import { getCachedGlobal } from '@/payload/utilities/getGlobals';

import { HeaderClient } from './Component.client';

export async function Header() {
  const header: Header = await getCachedGlobal('header', 1)();

  return <HeaderClient header={header} />;
}
