import { Wordmark } from '@/components/wordmark';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
export function baseOptions(): BaseLayoutProps {
  return { nav: { title: <Wordmark/> }, githubUrl: 'https://github.com/whoavidwivedi/frames' };
}
