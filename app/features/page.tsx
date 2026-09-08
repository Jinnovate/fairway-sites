'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, CalendarDays, Check, ChevronLeft, ChevronRight, Languages, LockKeyhole, MessageCircle, Minus, Palette, Plus, ShoppingBag, Sparkles, Type, WandSparkles } from 'lucide-react';

const testimonials = [
  ['“It finally feels like our business.”', 'Maya — Studio owner'],
  ['“Customers know exactly what to do next.”', 'Alex — Independent retailer'],
  ['“Simple, fast and unmistakably ours.”', 'Sam — Founder'],
];

export default function FeaturesPage() {
  const [pages, setPages] = useState(5);
  const [shop, setShop] = useState(0);
  const [language, setLanguage] = useState<'EN' | 'FR'>('EN');
  const [testimonial, setTestimonial] = useState(0);
  const [largeText, setLargeText] = useState(false);
  const [member, setMember] = useState(false);
  const [accent, setAccent] = useState('blue');
  const [booking, setBooking] = useState('');
  const price = 395 + pages * 75;

  return (
    <main className={`features-page accent-${accent}${largeText ? ' feature-large-text' : ''}`}>
      <header className="detail-header">
        <a className="logo" href="/"><b>DF</b><span>DREAM FIRST<small>WEBSITES + APPS BY JOEL</small></span></a>
        <a className="back-link" href="/"><ArrowLeft size={16} /> Back home</a>
        <a className="nav-cta" href="/#contact">Start your dream <ArrowRight size={16} /></a>
      </header>

      <section className="features-hero">
        <p className="label">Ideas you can try</p>
        <h1>See what your site<br /><em>could become.</em></h1>
        <p>Ten small examples of how a website can do more than sit there. Tap, change and explore them.</p>
      </section>

      <section className="demo-grid" aria-label="Interactive website feature examples">
        <article className="feature-demo feature-wide">
          <div className="demo-heading"><span>01</span><MessageCircle /><div><h2>Website chat</h2><p>Answer common questions while people browse.</p></div></div>
          <button className="demo-action" type="button" onClick={() => document.querySelector<HTMLButtonElement>('.chat-tab')?.click()}>Open the live demo <ArrowRight /></button>
        </article>

        <article className="feature-demo">
          <div className="demo-heading"><span>02</span><Palette /><div><h2>Make it yours</h2><p>Let customers personalise an experience.</p></div></div>
          <div className="accent-picker" aria-label="Choose example accent colour">
            {['blue','pink','green','orange'].map(colour => <button key={colour} className={colour} aria-label={`Use ${colour}`} aria-pressed={accent === colour} onClick={() => setAccent(colour)} />)}
          </div>
          <div className="mini-brand">YOUR BRAND<br /><em>your way.</em></div>
        </article>

        <article className="feature-demo">
          <div className="demo-heading"><span>03</span><CalendarDays /><div><h2>Online booking</h2><p>Turn availability into appointments.</p></div></div>
          <div className="slot-list">{['Tue 10:30','Wed 14:00','Fri 09:00'].map(slot => <button className={booking === slot ? 'selected' : ''} key={slot} onClick={() => setBooking(slot)}>{booking === slot && <Check />} {slot}</button>)}</div>
          <small>{booking ? `${booking} selected — ready to confirm` : 'Choose an available time'}</small>
        </article>

        <article className="feature-demo">
          <div className="demo-heading"><span>04</span><WandSparkles /><div><h2>Instant quote</h2><p>Give people a useful starting price.</p></div></div>
          <label className="page-control">Pages <span><button onClick={() => setPages(Math.max(1, pages - 1))} aria-label="Remove a page"><Minus /></button><b>{pages}</b><button onClick={() => setPages(Math.min(20, pages + 1))} aria-label="Add a page"><Plus /></button></span></label>
          <strong className="quote-price">About £{price.toLocaleString()}</strong>
        </article>

        <article className="feature-demo">
          <div className="demo-heading"><span>05</span><ShoppingBag /><div><h2>Online shop</h2><p>Show products and make buying easy.</p></div></div>
          <div className="demo-product"><div>DF</div><span><b>Launch notebook</b><small>£18</small></span></div>
          <button className="demo-action" onClick={() => setShop(shop + 1)}>Add to basket <span>{shop}</span></button>
        </article>

        <article className="feature-demo">
          <div className="demo-heading"><span>06</span><LockKeyhole /><div><h2>Member area</h2><p>Private spaces for clients or communities.</p></div></div>
          <div className={`member-card ${member ? 'unlocked' : ''}`}><LockKeyhole /><b>{member ? 'Welcome back, Joel' : 'Members only'}</b><small>{member ? 'Your dashboard is ready.' : 'Sign in to see private content.'}</small></div>
          <button className="demo-action" onClick={() => setMember(!member)}>{member ? 'Lock demo' : 'Demo sign in'}</button>
        </article>

        <article className="feature-demo">
          <div className="demo-heading"><span>07</span><Languages /><div><h2>Multiple languages</h2><p>Speak clearly to a wider audience.</p></div></div>
          <div className="language-toggle"><button className={language === 'EN' ? 'selected' : ''} onClick={() => setLanguage('EN')}>EN</button><button className={language === 'FR' ? 'selected' : ''} onClick={() => setLanguage('FR')}>FR</button></div>
          <blockquote>{language === 'EN' ? 'Bring your idea to life.' : 'Donnez vie à votre idée.'}</blockquote>
        </article>

        <article className="feature-demo">
          <div className="demo-heading"><span>08</span><Sparkles /><div><h2>Customer stories</h2><p>Build trust with social proof.</p></div></div>
          <div className="testimonial-demo"><blockquote>{testimonials[testimonial][0]}</blockquote><small>{testimonials[testimonial][1]}</small><div><button aria-label="Previous story" onClick={() => setTestimonial((testimonial + 2) % 3)}><ChevronLeft /></button><span>{testimonial + 1} / 3</span><button aria-label="Next story" onClick={() => setTestimonial((testimonial + 1) % 3)}><ChevronRight /></button></div></div>
        </article>

        <article className="feature-demo">
          <div className="demo-heading"><span>09</span><Type /><div><h2>Accessibility tools</h2><p>Help more people use the site comfortably.</p></div></div>
          <p className="reading-sample">Clear words, comfortable reading and controls that work for everyone.</p>
          <button className="demo-action" aria-pressed={largeText} onClick={() => setLargeText(!largeText)}>{largeText ? 'Use standard text' : 'Make text larger'}</button>
        </article>

        <article className="feature-demo feature-wide">
          <div className="demo-heading"><span>10</span><ArrowRight /><div><h2>Before and after</h2><p>Make the value of a transformation obvious.</p></div></div>
          <div className="comparison"><div><small>BEFORE</small><b>Generic.</b><p>Too much noise. No clear next step.</p></div><ArrowRight /><div><small>AFTER</small><b>Distinctive.</b><p>Focused, memorable and built to convert.</p></div></div>
        </article>
      </section>

      <section className="possibility-cta">
        <p className="label">And this is only ten</p>
        <h2>Open your mind.<br /><em>Find out what’s possible.</em></h2>
        <p>Your idea doesn’t have to fit a template. If it helps your customers—or makes your business run better—we can explore it.</p>
        <a className="button" href="/#contact">Bring me your idea <ArrowRight /></a>
      </section>
    </main>
  );
}

