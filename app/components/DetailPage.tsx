import { ArrowLeft, ArrowRight, Check } from 'lucide-react';

type DetailPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  accent: 'blue' | 'orange' | 'lime';
  sections: { title: string; body: string }[];
  included: string[];
  note?: string;
};

export default function DetailPage({ eyebrow, title, intro, accent, sections, included, note }: DetailPageProps) {
  return (
    <main className={`detail-page detail-${accent}`}>
      <header className="detail-header">
        <a className="logo" href="/"><b>JG</b><span>FAIRWAY<small>WEBSITES BY JOEL</small></span></a>
        <a className="back-link" href="/"><ArrowLeft size={16} /> Back to Fairway</a>
      </header>
      <section className="detail-hero">
        <p className="label">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        <a className="button primary" href="/#contact">Start a project <ArrowRight size={17} /></a>
      </section>
      <section className="detail-body">
        <div className="detail-sections">{sections.map((section, index) => <article key={section.title}><b>0{index + 1}</b><div><h2>{section.title}</h2><p>{section.body}</p></div></article>)}</div>
        <aside><p className="label">Included</p><ul>{included.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul>{note && <p className="detail-note">{note}</p>}</aside>
      </section>
      <section className="detail-cta"><p className="label">Have something in mind?</p><h2>Bring your idea to life.</h2><a className="button" href="/#contact">Tell me about it <ArrowRight size={17} /></a></section>
    </main>
  );
}
