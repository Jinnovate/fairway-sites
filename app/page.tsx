'use client';

import { useState } from 'react';
import { ArrowRight, Check, Copy, Menu, X } from 'lucide-react';

const services = [
  { number: '01', name: 'Business websites', line: 'Generate enquiries.', href: '/services/business-websites' },
  { number: '02', name: 'Online shops', line: 'Sell products.', href: '/services/online-shops' },
  { number: '03', name: 'Idea launches', line: 'Start something new.', href: '/services/idea-launches' },
];

const projects = [
  { name: 'Motion Only', type: 'Private web app', style: 'project-motion', href: '/work/motion-only', image: 'https://raw.githubusercontent.com/Jinnovate/MotionOnly/main/public/motion-only-logo-original.png', alt: 'Motion Only rising arrow mark' },
  { name: 'Lené', type: 'E-commerce', style: 'project-lene', href: '/work/lene', image: 'https://lene-active-everyday.realworldjoel.chatgpt.site/og.png', alt: 'Lené activewear campaign identity' },
  { name: 'Transport by AC', type: 'Transport', style: 'project-ac', href: '/work/ac-transport', image: 'https://transport-by-ac.realworldjoel.chatgpt.site/og.png', alt: 'Transport by AC vehicle transport campaign' },
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [plan, setPlan] = useState('Fixed price');
  const [copied, setCopied] = useState(false);

  const closeMenu = () => setMenu(false);
  const choose = (value: string) => {
    setPlan(value);
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const copyIdea = async () => {
    await navigator.clipboard.writeText(`Website idea — ${plan}\n\nBusiness:\nAudience:\nMain goal:\nLaunch date:`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main id="top">
      <header>
        <a className="logo" href="#top" onClick={closeMenu}><b>DF</b><span>DREAM FIRST<small>WEBSITES + APPS BY JOEL</small></span></a>
        <nav className={menu ? 'open' : ''} aria-label="Main navigation">
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#pricing" onClick={closeMenu}>Pricing</a>
          <a href="#process" onClick={closeMenu}>Process</a>
        </nav>
        <a className="nav-cta" href="#contact">Start your dream <ArrowRight size={16} /></a>
        <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle navigation" aria-expanded={menu}>{menu ? <X /> : <Menu />}</button>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="label">Websites + apps by Joel</p>
          <h1>Your dream<br /><em>deserves a start.</em></h1>
          <p className="lead">Clear, professional websites and apps built to generate sales, bookings and enquiries—without the agency price.</p>
          <div className="actions"><a className="button primary" href="#contact">Start your dream <ArrowRight size={17} /></a><a className="plain-link" href="#pricing">From £695</a></div>
          <div className="assurances"><span><Check /> You own it</span><span><Check /> No hosting markup</span></div>
        </div>
        <div className="hero-example">
          <span className="corner-label">RECENT DIRECTION / 01</span>
          <div className="site-window">
            <div className="window-bar"><i /><i /><i /><span>yourbusiness.co.uk</span></div>
            <div className="window-page"><small>INDEPENDENT INTERIORS</small><strong>Made for<br /><em>living.</em></strong><a href="#contact">Book a consultation →</a></div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-intro"><p className="label">Services</p><h2>Designed to do a job.</h2></div>
        <div className="service-list">{services.map((service) => <a className="service-card" href={service.href} key={service.name}><b>{service.number}</b><h3>{service.name}</h3><p>{service.line}</p><span>See what’s included <ArrowRight size={16} /></span></a>)}</div>
      </section>

      <section className="work" id="work">
        <div className="section-intro row"><div><p className="label">Selected work</p><h2>Three businesses.<br />Three personalities.</h2></div><p>Every build is shaped around the business, the audience and the person behind it.</p></div>
        <div className="project-grid">{projects.map((project, i) => <a className={`project ${project.style}`} href={project.href} key={project.name}><div className="project-meta"><span>0{i + 1}</span><span>{project.type}</span></div><div className="project-art"><img src={project.image} alt={project.alt} loading="lazy" /></div><div className="project-copy"><h3>{project.name}</h3><span>View project ↗</span></div></a>)}</div>
      </section>

      <section className="pricing" id="pricing">
        <div className="section-intro"><p className="label">Pricing</p><h2>Simple and transparent.</h2></div>
        <div className="price-grid">
          <article className="price-card"><p className="plan">Fixed price</p><h3>Pay once.<br />Own it.</h3><div className="amount"><small>from</small> £695</div><ul><li><Check />Strategy</li><li><Check />Design and build</li><li><Check />Launch and handover</li></ul><button type="button" onClick={() => choose('Fixed price')}>Choose fixed price <ArrowRight /></button></article>
          <article className="price-card inverse"><p className="plan">Growth partnership</p><h3>Lower cost.<br />Shared upside.</h3><div className="amount"><small>from</small> £195 <i>+ 1%</i></div><ul><li><Check />Full website</li><li><Check />12 months of improvements</li><li><Check />Agreed fee cap</li></ul><button type="button" onClick={() => choose('Growth partnership')}>Explore partnership <ArrowRight /></button></article>
        </div>
      </section>

      <section className="process" id="process"><div className="process-title"><p className="label">Process</p><h2>Dream to launch.</h2></div><div className="steps"><article><b>01</b><div><h3>Plan</h3><p>Goal, audience and offer.</p></div></article><article><b>02</b><div><h3>Build</h3><p>Design, content and development.</p></div></article><article><b>03</b><div><h3>Launch</h3><p>Go live and improve.</p></div></article></div></section>

      <section className="contact" id="contact">
        <div className="contact-heading"><p className="label">Start here</p><h2>What are you dreaming up?</h2><p>Tell me the essentials. I’ll reply with a clear next step.</p></div>
        <form className="enquiry-form" name="project-enquiry" method="POST" action="/thanks" data-netlify="true">
          <input type="hidden" name="form-name" value="project-enquiry" />
          <label>Your name<input name="name" type="text" autoComplete="name" required /></label>
          <label>Email<input name="email" type="email" autoComplete="email" required /></label>
          <label>What do you need?<select name="project-type" value={plan} onChange={(event) => setPlan(event.target.value)}><option>Fixed price</option><option>Growth partnership</option><option>Not sure yet</option></select></label>
          <label>Business or idea<input name="business" type="text" required /></label>
          <label className="full">A few details<textarea name="brief" rows={5} placeholder="What do you sell, who is it for, and what should the website help them do?" required /></label>
          <div className="form-actions full"><button className="button submit-button" type="submit">Send project enquiry <ArrowRight size={17} /></button><button className="idea-button" type="button" onClick={copyIdea}>{copied ? <><Check /> Copied</> : <><Copy /> Copy idea starter</>}</button><span className="sr-status" aria-live="polite">{copied ? 'Idea starter copied' : ''}</span></div>
        </form>
      </section>

      <footer><a className="logo" href="#top"><b>DF</b><span>DREAM FIRST<small>WEBSITES + APPS BY JOEL</small></span></a><p>Dream first. Build smart.</p><div className="footer-links"><a href="#services">Services</a><a href="#pricing">Pricing</a><a href="#contact">Enquire</a><a href="#top">Top ↑</a></div></footer>
    </main>
  );
}

