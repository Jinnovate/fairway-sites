'use client';
import { useState } from 'react';
import { ArrowRight, Check, ChevronDown, Copy, Menu, X } from 'lucide-react';

const projects = [
  ['Service business', 'North & Pine', 'A clear route from first visit to quote request.', 'project-a'],
  ['Hospitality', 'After Hours', 'A confident home for bookings and events.', 'project-b'],
  ['Independent shop', 'Field Notes', 'A focused store that makes buying feel easy.', 'project-c'],
];
const faqs = [
  ['What kind of websites do you build?', 'Websites for small businesses that need to sell, take bookings, generate enquiries or explain a new idea clearly.'],
  ['Why does it cost less than an agency?', 'You work directly with me. There are no account managers, office overheads or unnecessary rounds of meetings in the price.'],
  ['How does the 1% option work?', 'It applies only to online sales the website can track, for 12 months, with a maximum total fee agreed before we start.'],
  ['Who owns the finished website?', 'You do. Hosting, the domain and paid services are also held in your name and billed to you directly.'],
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState<number | null>(0);
  const [plan, setPlan] = useState('Fixed-price website');
  const [copied, setCopied] = useState(false);
  const choose = (value:string) => { setPlan(value); document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'}); };
  const copyIdea = async () => { await navigator.clipboard.writeText(`Website idea — ${plan}\n\nMy business or idea:\nWho it is for:\nWhat I want visitors to do:\nIdeal launch date:`); setCopied(true); setTimeout(()=>setCopied(false),1800); };

  return <main id="top">
    <header>
      <a className="logo" href="#top"><b>JG</b><span>FAIRWAY<small>WEBSITES BY JOEL</small></span></a>
      <nav className={menu?'open':''}><a href="#services">Services</a><a href="#work">Work</a><a href="#pricing">Pricing</a><a href="#process">Process</a></nav>
      <a className="nav-cta" href="#contact">Discuss your website <ArrowRight size={16}/></a>
      <button className="menu" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">{menu?<X/>:<Menu/>}</button>
    </header>

    <section className="hero">
      <div className="hero-copy">
        <p className="label">Affordable websites for small businesses</p>
        <h1>I design websites that help small businesses <em>sell.</em></h1>
        <p className="lead">Bring me your business, service or half-formed idea. I’ll turn it into a professional website people can understand, trust and act on—without the agency-sized bill.</p>
        <div className="actions"><a className="button primary" href="#contact">Tell me your idea <ArrowRight size={17}/></a><a className="plain-link" href="#pricing">Websites from £695</a></div>
        <div className="assurances"><span><Check/> You own it</span><span><Check/> Mobile-ready</span><span><Check/> No hosting markup</span></div>
      </div>
      <div className="hero-example">
        <span className="corner-label">EXAMPLE BUILD / 01</span>
        <div className="site-window"><div className="window-bar"><i/><i/><i/><span>yourbusiness.co.uk</span></div><div className="window-page"><small>INDEPENDENT INTERIORS</small><strong>Rooms made<br/>for <em>living.</em></strong><p>Thoughtful spaces, designed around real life.</p><button>Book a consultation →</button></div></div>
        <span className="result"><b>+38%</b> more enquiries</span>
      </div>
    </section>

    <section className="services" id="services">
      <div className="section-intro"><p className="label">What I build</p><h2>A useful website,<br/>built around your goal.</h2></div>
      <div className="service-list"><article><b>01</b><h3>Business websites</h3><p>Give customers a clear reason to choose you and an easy way to get in touch.</p></article><article><b>02</b><h3>Online shops</h3><p>Present your products properly and make the route to checkout feel effortless.</p></article><article><b>03</b><h3>Idea launches</h3><p>Turn a new service or early-stage idea into something credible you can share and sell.</p></article></div>
    </section>

    <section className="work" id="work"><div className="section-intro row"><div><p className="label">Example directions</p><h2>Designed to fit<br/>the business.</h2></div><p>Not recycled templates with a different logo. Each direction starts with the customer and the action you want them to take.</p></div><div className="project-grid">{projects.map(([type,name,copy,style],i)=><article className={`project ${style}`} key={name}><div className="project-meta"><span>0{i+1}</span><span>{type}</span></div><div className="project-art"><strong>{name}</strong><i/></div><div className="project-copy"><h3>{name}</h3><p>{copy}</p></div></article>)}</div></section>

    <section className="pricing" id="pricing"><div className="section-intro"><p className="label">Simple, transparent pricing</p><h2>Two fair ways<br/>to get started.</h2><p>Choose certainty now, or a lower upfront price with a clearly capped share of the growth.</p></div><div className="price-grid">
      <article className="price-card"><p className="plan">Fixed-price website</p><h3>Pay once.<br/>Own it outright.</h3><div className="amount"><small>from</small> £695</div><ul><li><Check/>Strategy and content plan</li><li><Check/>Custom mobile-first design</li><li><Check/>Build, launch and handover</li><li><Check/>No commission</li></ul><button onClick={()=>choose('Fixed-price website')}>Choose fixed price <ArrowRight/></button></article>
      <article className="price-card inverse"><p className="plan">Growth partnership</p><h3>Pay less now.<br/>Grow together.</h3><div className="amount"><small>from</small> £195 <i>+ 1%</i></div><ul><li><Check/>Everything in the fixed build</li><li><Check/>12 months of improvements</li><li><Check/>Tracked online sales only</li><li><Check/>Maximum fee agreed upfront</li></ul><button onClick={()=>choose('Growth partnership')}>Explore partnership <ArrowRight/></button></article>
    </div></section>

    <section className="process" id="process"><div className="process-title"><p className="label">The Fairway process</p><h2>From idea<br/>to live site.</h2><p>You deal directly with me from the first conversation to launch.</p></div><div className="steps"><article><b>01</b><div><h3>Tell me the idea</h3><p>No polished brief needed. We clarify what you sell, who it is for and what the site must achieve.</p></div></article><article><b>02</b><div><h3>See it take shape</h3><p>I turn the plan into a clear visual direction, then build the working website.</p></div></article><article><b>03</b><div><h3>Put it to work</h3><p>We launch, measure what matters and improve it when there is evidence to act on.</p></div></article></div></section>

    <section className="founder"><div className="monogram">JG</div><div><p className="label">Built by Joel Gilbert</p><h2>One person.<br/>Start to finish.</h2><p>I created Fairway so a good small business can get a properly considered website without paying for layers of agency overhead. You speak to the person doing the thinking, designing and building.</p><blockquote>“If it doesn’t help your customer decide, it doesn’t make the page.”</blockquote></div></section>

    <section className="faq-section"><div><p className="label">Common questions</p><h2>Clear answers.<br/>No small print.</h2></div><div className="faqs">{faqs.map(([q,a],i)=><article key={q}><button onClick={()=>setFaq(faq===i?null:i)} aria-expanded={faq===i}>{q}<ChevronDown className={faq===i?'rotate':''}/></button>{faq===i&&<p>{a}</p>}</article>)}</div></section>

    <section className="contact" id="contact"><p className="label">Bring your idea to life</p><h2>What do you want<br/>to put into the world?</h2><p>Copy the short starter, fill in what you know and use it to begin the conversation. Rough ideas are welcome.</p><div className="contact-actions"><button className="button contact-button" onClick={copyIdea}>{copied?<><Check/> Starter copied</>:<><Copy/> Copy the idea starter</>}</button><span>Selected: <b>{plan}</b></span></div></section>
    <footer><a className="logo" href="#top"><b>JG</b><span>FAIRWAY<small>WEBSITES BY JOEL</small></span></a><p>Clear websites. Fair prices. Properly yours.</p><a href="#top">Back to top ↑</a></footer>
  </main>;
}
