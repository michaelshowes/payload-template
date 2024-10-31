import path from 'path';
import { Config } from 'payload';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export const typescript: Config['typescript'] = {
  outputFile: path.resolve(dirname, 'payload-types.ts')
};
