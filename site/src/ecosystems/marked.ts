// Stub: uncomment when packages/marked is added to the monorepo.
//
// import { marked } from 'marked';
// import { gptVisMarkedExtension } from '@antv/gpt-vis-marked';
// import type { EcosystemAdapter } from './types';
//
// marked.use(gptVisMarkedExtension);
//
// export const markedAdapter: EcosystemAdapter = {
//   id: 'marked',
//   label: 'Marked',
//   description: 'marked + gpt-vis extension',
//   process(markdown: string): Promise<string> {
//     return marked.parse(markdown);
//   },
// };