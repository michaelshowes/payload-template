import path from 'path';
import { Config } from 'payload';
import { fileURLToPath } from 'url';

import { Users } from '../collections/Users';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const admin: Config['admin'] = {
  components: {
    beforeLogin: ['@/components/BeforeLogin'],
    beforeDashboard: ['@/components/BeforeDashboard']
  },
  importMap: {
    baseDir: path.resolve(dirname)
  },
  user: Users.slug,
  livePreview: {
    breakpoints: [
      {
        label: 'Mobile',
        name: 'mobile',
        width: 375,
        height: 667
      },
      {
        label: 'Tablet',
        name: 'tablet',
        width: 768,
        height: 1024
      },
      {
        label: 'Desktop',
        name: 'desktop',
        width: 1440,
        height: 900
      }
    ]
  },
  autoLogin:
    process.env.NEXT_PUBLIC_ENABLE_AUTOLOGIN === 'true'
      ? {
          email: 'michael.showes@gmail.com',
          password: 'admin',
          prefillOnly: true
        }
      : false
};
