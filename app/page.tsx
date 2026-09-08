'use client';
import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, Copy, Menu, Sparkles, X } from 'lucide-react';

const work = [
  { type: 'Home services', name: 'North & Pine', note: 'Quote-led service site', className: 'work-one' },
  { type: 'Hospitality', name: 'After Hours', note: 'Bookings without the faff', className: 'work-two' },
  { type: 'Independent retail', name: 'Field Notes', note: 'A focused online shop', className: 'work-three' },
];
const faqs = [
  ['Why are you less expensive?', 'Because the process is focused. We agree what the site needs to achieve, cut the bloated agency overhead and build only what helps the business sell.'],
  ['Do you take 1% of everything?', 'Only on the partnership plan, only on sales the website can reliably track, and only for the agreed term. The cap and end date are written into the proposal.'],
  ['What running costs will I pay?', 'You pay hosting, domain and any third-party services directly at cost. I do not add a hidden monthly markup.'],
  ['What happens after launch?', 'You own the finished site. Choose a care plan if you want ongoing improvements, or take it away with a clean handover.'],
];
const method = [
  ['01', 'Find the friction', 'We identify the one thing stopping more people from buying, booking or getting in touch.'],
  ['02', 'Make the path obvious', 'Every page, line and button earns its place by moving the right customer forward.'],
  ['03', 'Put it in the world', 'No endless reveal cycle. We launch a sharp first version, then improve it with real evidence.'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [plan, setPlan] = useState('Straightforward build');
  const [copied, setCopied] = useState(false);
  const choose = (value:string) => { setPlan(value); document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'}); };
  const copyBrief = async () => { await navigator.clipboard.writeText(`Website enquiry — ${plan}\n\nBusiness:\nWhat I sell:\nMy main goal:\nIdeal launch date:`); setCopied(true); setTimeout(() => setCopied(false), 1800); };

  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Fairway Sites home"><span className="brand-mark">JG</span><span>FAIRWAY<small>BY JOEL GILBERT</small></span></a>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation"><a href="#work" onClick={()=>setMenuOpen(false)}>Work</a><a href="#approach" onClick={()=>setMenuOpen(false)}>How it works</a><a href="#pricing" onClick={()=>setMenuOpen(false)}>Pricing</a></nav>
      <a className="header-cta" href="#contact">Start a project <ArrowRight size={16}/></a>
      <button className="menu-button" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen?<X/>:<Menu/>}</button>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow"><Sparkles size={14}/> Bring the idea. I&apos;ll bring it to life.</p><h1>That idea in your head?<br/><em>Let&apos;s put it in the world.</em></h1><p className="hero-lede">You don&apos;t need a perfect brief. Bring the scribble, the voice note or the “what if?”—I&apos;ll turn it into a sharp website people can understand, trust and buy from.</p><div className="hero-actions"><a className="button primary" href="#contact">Bring me your idea <ArrowRight size={17}/></a><a className="text-link" href="#pricing">See the honest pricing</a></div><div className="proof-line"><span><Check size={15}/> You own the site</span><span><Check size={15}/> No hosting markup</span><span><Check size={15}/> Clear scope, clear price</span></div></div>
      <div className="hero-art" aria-label="A preview of a modern website project"><div className="retro-sun"/><div className="orbit orbit-one"/><div className="orbit orbit-two"/><span className="edition-stamp">WEB<br/>EDITION<br/><b>№ 01</b></span><div className="browser-card"><div className="browser-bar"><i/><i/><i/><span>yourbusiness.co.uk</span></div><div className="mock-nav"><b>STUDIO</b><span>Work &nbsp; About &nbsp; Contact</span></div><div className="mock-body"><small>BUILDING BETTER SPACES</small><strong>Make room<br/>for <i>living.</i></strong><button>Explore projects ↗</button></div><div className="result-pill"><b>+38%</b><span>more enquiries</span></div></div><span className="scribble">Built to convert, not just sit there.</span></div>
    </section>

    <div className="ticker" aria-label="Fairway principles"><div>BUILT TO SELL <b>✦</b> PRICED TO BE FAIR <b>✦</b> NO AGENCY NONSENSE <b>✦</b> YOUR SITE, YOUR BUSINESS <b>✦</b> BUILT TO SELL <b>✦</b> PRICED TO BE FAIR <b>✦</b> NO AGENCY NONSENSE <b>✦</b></div></div>

    <section className="manifesto" id="approach"><span className="rubber-stamp">THE FAIR DEAL</span><p className="section-kicker">A better deal</p><h2>Your website should make money.<br/>The pricing should make sense.</h2><div className="manifesto-grid"><p>Traditional agencies load the price with meetings, offices and layers of account management. I keep the work close, the process lean and the outcome commercially focused.</p><div className="principles"><span><b>01</b> Start with the sale</span><span><b>02</b> Design with a reason</span><span><b>03</b> Launch, learn, improve</span></div></div></section>

    <section className="founder-section">
      <div className="founder-mark" aria-hidden="true"><span>JG</span><i>Built by the person<br/>you actually speak to.</i></div>
      <div className="founder-copy"><p className="section-kicker">A note from Joel</p><h2>Built beside you.<br/><em>Never sold at you.</em></h2><p>I started Fairway because a good business shouldn&apos;t need an agency-sized budget to look the part online. You deal directly with me—from the first rough idea to the day we press publish.</p><blockquote>“If it doesn&apos;t help the customer decide, it doesn&apos;t make the page.”<cite>— My rule for every build</cite></blockquote></div>
    </section>

    <section className="idea-section">
      <div className="idea-intro"><p className="section-kicker">Start before it&apos;s perfect</p><h2>You bring the<br/><span>“what if?”</span></h2><p>A business name on a napkin. A service you know people need. A shop that only exists in your notes app. That&apos;s enough to begin.</p><a className="button idea-button" href="#contact">Make it real <ArrowRight size={17}/></a></div>
      <div className="idea-machine" aria-label="An idea becoming a live website">
        <article className="idea-card rough"><small>01 / THE SPARK</small><strong>“What if I<br/>could sell this?”</strong><span>✎ rough is welcome</span></article>
        <div className="idea-arrow"><span>→</span><small>JOEL MAKES<br/>IT CLICK</small></div>
        <article className="idea-card live"><small>03 / OUT IN THE WORLD</small><div className="mini-site"><b>YOUR THING™</b><p>A clear reason to care.</p><i>Buy / Book / Begin →</i></div><span className="live-light">● LIVE</span></article>
      </div>
    </section>

    <section className="method-section"><div className="method-heading"><p className="section-kicker">The Fairway Method™</p><h2>Three moves.<br/>No theatre.</h2><span className="method-seal">CLEAR<br/>QUICK<br/>FAIR</span></div><div className="method-list">{method.map(([number,title,copy])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section className="work-section" id="work"><div className="section-heading"><div><p className="section-kicker">Selected directions</p><h2>Small sites.<br/>Serious presence.</h2></div><p>Three examples of how a focused website can give a business its own unmistakable character.</p></div><div className="work-grid">{work.map((item,index)=><article className={`work-card ${item.className}`} key={item.name}><div className="work-top"><span>0{index+1}</span><span>{item.type}</span></div><div className="work-visual"><span className="sample-logo">{item.name}</span><i className="shape"/></div><div className="work-caption"><h3>{item.name}</h3><p>{item.note}</p></div></article>)}</div></section>

    <section className="pricing" id="pricing"><div className="pricing-intro"><p className="section-kicker">Ways to work together</p><h2>Pick the deal that fits.</h2><p>No mystery quotes. No compulsory retainer. Just two sensible ways to get a high-quality site live.</p></div><div className="pricing-grid">
      <article className="price-card light"><div><span className="plan-label">Straightforward build</span><h3>Pay once.<br/>Own it outright.</h3></div><p className="price"><small>from</small> £695</p><ul><li><Check/>Focused strategy session</li><li><Check/>Bespoke, mobile-first design</li><li><Check/>Build, launch and handover</li><li><Check/>No commission on sales</li></ul><button onClick={()=>choose('Straightforward build')}>Choose fixed price <ArrowRight/></button></article>
      <article className="price-card dark-card"><div><span className="plan-label">Growth partnership</span><h3>Pay less now.<br/>Grow together.</h3></div><div className="split-price"><p className="price"><small>from</small> £195</p><span>+ 1% of tracked online sales</span></div><ul><li><Check/>Everything in the fixed build</li><li><Check/>12-month partnership</li><li><Check/>Monthly conversion improvements</li><li><Check/>Agreed revenue cap in writing</li></ul><button onClick={()=>choose('Growth partnership')}>Explore partnership <ArrowRight/></button><p className="fine-print">Commission applies only to attributable online sales, with a clear cap and end date.</p></article>
    </div><div className="cost-note"><b>Running costs stay transparent.</b><span>Your domain, hosting and paid tools are billed to you directly. I don’t make money by marking them up.</span></div></section>

    <section className="faq-section"><div><p className="section-kicker">Good questions</p><h2>Nothing hidden<br/>in the small print.</h2></div><div className="faqs">{faqs.map(([q,a],i)=><div className="faq" key={q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}><span>{q}</span><ChevronDown className={openFaq===i?'rotate':''}/></button>{openFaq===i&&<p>{a}</p>}</div>)}</div></section>

    <section className="contact" id="contact"><span className="contact-burst">LET&apos;S<br/>MAKE<br/>IT REAL</span><p className="section-kicker">Your idea starts here</p><h2>Bring me the thought.<br/><em>We&apos;ll build the thing.</em></h2><p>No polished brief required. Tell me what you want to put into the world, who it is for and what you want to happen next.</p><div className="contact-actions"><button className="button lime" onClick={copyBrief}>{copied?<><Check/> Idea brief copied</>:<><Copy/> Copy an idea starter</>}</button><span>Selected: <b>{plan}</b></span></div></section>
    <footer><a className="brand" href="#top"><span className="brand-mark">JG</span><span>FAIRWAY<small>BY JOEL GILBERT</small></span></a><p>Personally designed. Fairly priced. Properly yours.</p><a href="#top">Back to top ↑</a></footer>
  </main>;
}
