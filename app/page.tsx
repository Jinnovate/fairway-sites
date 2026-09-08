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

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [plan, setPlan] = useState('Straightforward build');
  const [copied, setCopied] = useState(false);
  const choose = (value:string) => { setPlan(value); document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'}); };
  const copyBrief = async () => { await navigator.clipboard.writeText(`Website enquiry — ${plan}\n\nBusiness:\nWhat I sell:\nMy main goal:\nIdeal launch date:`); setCopied(true); setTimeout(() => setCopied(false), 1800); };

  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Fairway Sites home"><span className="brand-mark">F/</span> FAIRWAY</a>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation"><a href="#work" onClick={()=>setMenuOpen(false)}>Work</a><a href="#approach" onClick={()=>setMenuOpen(false)}>How it works</a><a href="#pricing" onClick={()=>setMenuOpen(false)}>Pricing</a></nav>
      <a className="header-cta" href="#contact">Start a project <ArrowRight size={16}/></a>
      <button className="menu-button" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen?<X/>:<Menu/>}</button>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow"><Sparkles size={14}/> Websites for independent businesses</p><h1>Big-agency thinking.<br/><em>Without the big-agency bill.</em></h1><p className="hero-lede">Sharp, useful websites built to earn their keep. Pay a fair fixed price—or choose a lower start-up cost and let me win when you do.</p><div className="hero-actions"><a className="button primary" href="#pricing">See the honest pricing <ArrowRight size={17}/></a><a className="text-link" href="#work">View selected work</a></div><div className="proof-line"><span><Check size={15}/> You own the site</span><span><Check size={15}/> No hosting markup</span><span><Check size={15}/> Clear scope, clear price</span></div></div>
      <div className="hero-art" aria-label="A preview of a modern website project"><div className="retro-sun"/><div className="orbit orbit-one"/><div className="orbit orbit-two"/><span className="edition-stamp">WEB<br/>EDITION<br/><b>№ 01</b></span><div className="browser-card"><div className="browser-bar"><i/><i/><i/><span>yourbusiness.co.uk</span></div><div className="mock-nav"><b>STUDIO</b><span>Work &nbsp; About &nbsp; Contact</span></div><div className="mock-body"><small>BUILDING BETTER SPACES</small><strong>Make room<br/>for <i>living.</i></strong><button>Explore projects ↗</button></div><div className="result-pill"><b>+38%</b><span>more enquiries</span></div></div><span className="scribble">Built to convert, not just sit there.</span></div>
    </section>

    <div className="ticker" aria-label="Fairway principles"><div>BUILT TO SELL <b>✦</b> PRICED TO BE FAIR <b>✦</b> NO AGENCY NONSENSE <b>✦</b> YOUR SITE, YOUR BUSINESS <b>✦</b> BUILT TO SELL <b>✦</b> PRICED TO BE FAIR <b>✦</b> NO AGENCY NONSENSE <b>✦</b></div></div>

    <section className="manifesto" id="approach"><span className="rubber-stamp">THE FAIR DEAL</span><p className="section-kicker">A better deal</p><h2>Your website should make money.<br/>The pricing should make sense.</h2><div className="manifesto-grid"><p>Traditional agencies load the price with meetings, offices and layers of account management. I keep the work close, the process lean and the outcome commercially focused.</p><div className="principles"><span><b>01</b> Start with the sale</span><span><b>02</b> Design with a reason</span><span><b>03</b> Launch, learn, improve</span></div></div></section>

    <section className="work-section" id="work"><div className="section-heading"><div><p className="section-kicker">Selected directions</p><h2>Small sites.<br/>Serious presence.</h2></div><p>Three examples of how a focused website can give a business its own unmistakable character.</p></div><div className="work-grid">{work.map((item,index)=><article className={`work-card ${item.className}`} key={item.name}><div className="work-top"><span>0{index+1}</span><span>{item.type}</span></div><div className="work-visual"><span className="sample-logo">{item.name}</span><i className="shape"/></div><div className="work-caption"><h3>{item.name}</h3><p>{item.note}</p></div></article>)}</div></section>

    <section className="pricing" id="pricing"><div className="pricing-intro"><p className="section-kicker">Ways to work together</p><h2>Pick the deal that fits.</h2><p>No mystery quotes. No compulsory retainer. Just two sensible ways to get a high-quality site live.</p></div><div className="pricing-grid">
      <article className="price-card light"><div><span className="plan-label">Straightforward build</span><h3>Pay once.<br/>Own it outright.</h3></div><p className="price"><small>from</small> £695</p><ul><li><Check/>Focused strategy session</li><li><Check/>Bespoke, mobile-first design</li><li><Check/>Build, launch and handover</li><li><Check/>No commission on sales</li></ul><button onClick={()=>choose('Straightforward build')}>Choose fixed price <ArrowRight/></button></article>
      <article className="price-card dark-card"><div><span className="plan-label">Growth partnership</span><h3>Pay less now.<br/>Grow together.</h3></div><div className="split-price"><p className="price"><small>from</small> £195</p><span>+ 1% of tracked online sales</span></div><ul><li><Check/>Everything in the fixed build</li><li><Check/>12-month partnership</li><li><Check/>Monthly conversion improvements</li><li><Check/>Agreed revenue cap in writing</li></ul><button onClick={()=>choose('Growth partnership')}>Explore partnership <ArrowRight/></button><p className="fine-print">Commission applies only to attributable online sales, with a clear cap and end date.</p></article>
    </div><div className="cost-note"><b>Running costs stay transparent.</b><span>Your domain, hosting and paid tools are billed to you directly. I don’t make money by marking them up.</span></div></section>

    <section className="faq-section"><div><p className="section-kicker">Good questions</p><h2>Nothing hidden<br/>in the small print.</h2></div><div className="faqs">{faqs.map(([q,a],i)=><div className="faq" key={q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}><span>{q}</span><ChevronDown className={openFaq===i?'rotate':''}/></button>{openFaq===i&&<p>{a}</p>}</div>)}</div></section>

    <section className="contact" id="contact"><span className="contact-burst">LET&apos;S<br/>MAKE<br/>IT WORK</span><p className="section-kicker">Your move</p><h2>Tell me what the site<br/><em>needs to do.</em></h2><p>Not how many pages. Not which trendy animation. Start with the business goal and we’ll work out the smartest version together.</p><div className="contact-actions"><button className="button lime" onClick={copyBrief}>{copied?<><Check/> Brief copied</>:<><Copy/> Copy a project brief</>}</button><span>Selected: <b>{plan}</b></span></div></section>
    <footer><a className="brand" href="#top"><span className="brand-mark">F/</span> FAIRWAY</a><p>Websites with a fairer way to pay.</p><a href="#top">Back to top ↑</a></footer>
  </main>;
}
