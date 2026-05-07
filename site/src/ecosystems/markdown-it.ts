// Stub: uncomment when packages/markdown-it is added to the monorepo.
//
// import markdownIt from 'markdown-it';
// import { gptVisMarkdownItPlugin } from '@antv/gpt-vis-markdown-it';
// import type { EcosystemAdapter } from './types';
//
// const md = markdownIt().use(gptVisMarkdownItPlugin);
//
// export const markdownItAdapter: EcosystemAdapter = {
//   id: 'markdown-it',
//   label: 'markdown-it',
//   description: 'markdown-it + gpt-vis plugin',
//   process(markdown: string): string {
//     return md.render(markdown);
//   },
// };