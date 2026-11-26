import Link from 'next/link';
import { RiArrowRightUpLine, RiDownloadLine } from '@remixicon/react';
import { buttonVariants } from '@/components/ui/button';
import { Wordmark } from '@/components/wordmark';

const repo = 'https://github.com/whoavidwivedi/frames';
const guides = [
  { title: 'Getting started', detail: 'Open your first film and add a folder to your library.', href: '/docs' },
  { title: 'Installation & updates', detail: 'Install Frames and keep your copy up to date.', href: '/docs/install' },
  { title: 'Playback & tracks', detail: 'Seek, switch soundtracks and choose subtitles.', href: '/docs/playback' },
];

export default function Home() {
  return <main className="site-shell">
    <header className="site-bar"><Link href="/" aria-label="Frames home"><Wordmark/></Link>
      <nav aria-label="Main navigation"><Link href="/docs">Documentation</Link><a href={repo}>GitHub ↗</a></nav></header>
    <section className="product">
      <div><h1>Frames for Mac</h1><p>A native video player for Apple Silicon. Browse your library, switch audio tracks, and step through a film one frame at a time.</p>
        <div className="downloads"><a className={buttonVariants({size:'lg'})} href={repo+'/releases/download/v2.0.8/Frames-v2.0.8-macOS.zip'}><RiDownloadLine/>Download for Mac</a>
        <Link className={buttonVariants({variant:'secondary',size:'lg'})} href="/docs/install">Install guide</Link></div>
      </div>
      <dl className="specs">{[['Stable release','2.0.8'],['System','macOS 14 or later'],['Processor','Apple Silicon']].map(([key,value])=><div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}</dl>
    </section>
    <section className="manual"><h2>Documentation</h2><div>{guides.map(g=><Link key={g.href} href={g.href} className="guide-row"><div><h3>{g.title}</h3><p>{g.detail}</p></div><span aria-hidden="true">→</span></Link>)}</div></section>
    <footer className="site-bar"><Wordmark/><a href={repo+'/releases'}>Release notes <RiArrowRightUpLine size={15}/></a></footer>
  </main>;
}
