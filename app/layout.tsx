import '@fontsource-variable/inter';
import './globals.css';
import { Provider } from '@/components/provider';

export const metadata = { title: 'Frames for Mac', description: 'Download Frames, the native video player for Apple Silicon, and read the playback guide.' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning><body><Provider>{children}</Provider></body></html>;
}
