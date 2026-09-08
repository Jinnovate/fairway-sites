import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

type DetailPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  accent: 'blue' | 'orange' | 'lime';
  sections: { title: string; body: string }[];
  included: string[];
  note?: string;
  image?: string;
  imageAlt?: string;
  liveUrl?: string;
};

export default function DetailPage({ eyebrow, title, intro, accent, sections, included, note, image, imageAlt, liveUrl }: DetailPageProps) {
  return (
    <main className={`detail-page detail-${accent}`}>
      <header className="detail-header">
        <a className="logo" href="/"><b>DF</b><span>DREAM FIRST<small>WEBSITES + APPS BY JOEL</small></span></a>
        <a className="back-link" href="/"><ArrowLeft size={16} /> Back to Dream First</a>
      </header>
      <section className={`detail-hero${image ? ' with-visual' : ''}`}>
        <div className="detail-hero-copy"><p className="label">{eyebrow}</p><h1>{title}</h1><p>{intro}</p><div className="detail-actions"><a className="button primary" href="/#contact">Start your project <ArrowRight size={17} /></a>{liveUrl && <a className="detail-live-link" href={liveUrl} target="_blank" rel="noreferrer">Visit website ↗</a>}</div></div>
        {image && <div className="detail-visual"><img src={image} alt={imageAlt || ''} /></div>}
      </section>
      <section className="detail-body">
        <div className="detail-sections">{sections.map((section, index) => <article key={section.title}><b>0{index + 1}</b><div><h2>{section.title}</h2><p>{section.body}</p></div></article>)}</div>
        <aside><p className="label">Included</p><ul>{included.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul>{note && <p className="detail-note">{note}</p>}</aside>
      </section>
      <section className="detail-cta"><p className="label">Your business should feel like yours</p><h2>What should yours say?</h2><a className="button" href="/#contact">Tell me about it <ArrowRight size={17} /></a></section>
    </main>
  );
}

