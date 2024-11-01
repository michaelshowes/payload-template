import { ArchiveBlock } from './ArchiveBlock/Component';
import { BannerBlock } from './Banner/Component';
import { Banner } from './Banner/config';
import { CallToActionBlock } from './CallToAction/Component';
import { CodeBlock } from './Code/Component';
import { Code } from './Code/config';
import { ContentBlock } from './Content/Component';
import { FormBlock } from './Form/Component';
import { MediaBlock as MediaBlockComponent } from './MediaBlock/Component';
import { MediaBlock } from './MediaBlock/config';

export const blocks = [Banner, Code, MediaBlock];

export const blockComponents = {
  code: CodeBlock,
  banner: BannerBlock,
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlockComponent
};
