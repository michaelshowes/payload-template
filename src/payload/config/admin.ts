import path from 'path';
import { Config } from 'payload';
import { fileURLToPath } from 'url';

import { Users } from '../collections/Users';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const admin: Config['admin'] = {
  components: {
    // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
    // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
    beforeLogin: ['@/components/BeforeLogin'],
    // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
    // Feel free to delete this at any time. Simply remove the line below and the import `BeforeDashboard` statement on line 15.
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
  }
};
