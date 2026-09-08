'use client';
import { useState } from 'react';
import { ArrowRight, Check, Copy, Menu, X } from 'lucide-react';

const projects = [
  ['North & Pine', 'Services', 'project-a'],
  ['After Hours', 'Hospitality', 'project-b'],
  ['Field Notes', 'E-commerce', 'project-c'],
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [plan, setPlan] = useState('Fixed price');
  const [copied, setCopied] = useState(false);
  const choose = (value:string) => { setPlan(value); document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'}); };
  const copyIdea = async () => { await navigator.clipboard.writeText(`Website idea — ${plan}\n\nBusiness:\nAudience:\nMain goal:\nLaunch date:`); setCopied(true); setTimeout(()=>setCopied(false),1800); };

  return <main id="top">
    <header>
      <a className="logo" href="#top"><b>JG</b><span>FAIRWAY<small>WEBSITES BY JOEL</small></span></a>
      <nav className={menu?'open':''}><a href="#services">Services</a><a href="#work">Work</a><a href="#pricing">Pricing</a></nav>
      <a className="nav-cta" href="#contact">Start a project <ArrowRight size={16}/></a>
      <button className="menu" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">{menu?<X/>:<Menu/>}</button>
    </header>

    <section className="hero">
      <div className="hero-copy">
        <p className="label">Websites for small businesses</p>
        <h1>Bring your idea<br/><em>to life.</em></h1>
        <p className="lead">Clear, professional websites designed to generate sales, bookings and enquiries—without the agency price.</p>
        <div className="actions"><a className="button primary" href="#contact">Start a project <ArrowRight size={17}/></a><a className="plain-link" href="#pricing">From £695</a></div>
        <div className="assurances"><span><Check/> You own it</span><span><Check/> No hosting markup</span></div>
      </div>
      <div className="hero-example"><span className="corner-label">RECENT DIRECTION / 01</span><div className="site-window"><div className="window-bar"><i/><i/><i/><span>yourbusiness.co.uk</span></div><div className="window-page"><small>INDEPENDENT INTERIORS</small><strong>Made for<br/><em>living.</em></strong><button>Book a consultation →</button></div></div></div>
    </section>

    <section className="services" id="services">
      <div className="section-intro"><p className="label">Services</p><h2>Designed to do a job.</h2></div>
      <div className="service-list"><article><b>01</b><h3>Business websites</h3><p>Generate enquiries.</p></article><article><b>02</b><h3>Online shops</h3><p>Sell products.</p></article><article><b>03</b><h3>Idea launches</h3><p>Start something new.</p></article></div>
    </section>

    <section className="work" id="work"><div className="section-intro row"><div><p className="label">Selected work</p><h2>Built for the business.</h2></div></div><div className="project-grid">{projects.map(([name,type,style],i)=><article className={`project ${style}`} key={name}><div className="project-meta"><span>0{i+1}</span><span>{type}</span></div><div className="project-art"><strong>{name}</strong><i/></div><div className="project-copy"><h3>{name}</h3><span>View direction ↗</span></div></article>)}</div></section>

    <section className="pricing" id="pricing"><div className="section-intro"><p className="label">Pricing</p><h2>Simple and transparent.</h2></div><div className="price-grid">
      <article className="price-card"><p className="plan">Fixed price</p><h3>Pay once.<br/>Own it.</h3><div className="amount"><small>from</small> £695</div><ul><li><Check/>Strategy</li><li><Check/>Design and build</li><li><Check/>Launch and handover</li></ul><button onClick={()=>choose('Fixed price')}>Choose fixed price <ArrowRight/></button></article>
      <article className="price-card inverse"><p className="plan">Growth partnership</p><h3>Lower cost.<br/>Shared upside.</h3><div className="amount"><small>from</small> £195 <i>+ 1%</i></div><ul><li><Check/>Full website</li><li><Check/>12 months of improvements</li><li><Check/>Agreed fee cap</li></ul><button onClick={()=>choose('Growth partnership')}>Explore partnership <ArrowRight/></button></article>
    </div></section>

    <section className="process" id="process"><div className="process-title"><p className="label">Process</p><h2>Idea to live site.</h2></div><div className="steps"><article><b>01</b><div><h3>Plan</h3><p>Goal, audience and offer.</p></div></article><article><b>02</b><div><h3>Build</h3><p>Design, content and development.</p></div></article><article><b>03</b><div><h3>Launch</h3><p>Go live and improve.</p></div></article></div></section>

    <section className="contact" id="contact"><p className="label">Start here</p><h2>What are we building?</h2><p>Bring the idea. I’ll help shape the rest.</p><div className="contact-actions"><button className="button contact-button" onClick={copyIdea}>{copied?<><Check/> Copied</>:<><Copy/> Copy idea starter</>}</button><span>{plan}</span></div></section>
    <footer><a className="logo" href="#top"><b>JG</b><span>FAIRWAY<small>WEBSITES BY JOEL</small></span></a><p>Clear websites. Fair prices.</p><a href="#top">Top ↑</a></footer>
  </main>;
}
