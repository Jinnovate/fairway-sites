'use client';

import { FormEvent, useRef, useState } from 'react';
import { ArrowUp, MessageCircle, X } from 'lucide-react';

type Message = { from: 'visitor' | 'assistant'; text: string };

const quickPrompts = ['Can I sell online?', 'Can customers book?', 'What does a site cost?'];

function replyTo(message: string) {
  const text = message.toLowerCase();
  if (/sell|shop|product|payment|cart/.test(text)) return 'Yes. I can build product pages, baskets and secure checkout using tools such as Shopify or Stripe.';
  if (/book|calendar|appointment|reserve/.test(text)) return 'Yes. Your site can show availability, take bookings and send confirmations automatically.';
  if (/price|cost|charge|budget/.test(text)) return 'Website projects currently start from £695. The final price depends on the pages and features you need.';
  if (/login|member|account|dashboard|app/.test(text)) return 'I can build private accounts, member areas, dashboards and full web-app experiences.';
  if (/chat|message|contact/.test(text)) return 'Chat can answer common questions, collect leads or connect visitors to a real person.';
  return 'That sounds buildable. Tell me the outcome you want and I can shape the right website or app around it.';
}

export default function DemoChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { from: 'assistant', text: 'Hi — try asking what I can add to a website.' },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  const send = (event?: FormEvent) => {
    event?.preventDefault();
    const message = input.trim();
    if (!message) return;
    setMessages((current) => [...current, { from: 'visitor', text: message }, { from: 'assistant', text: replyTo(message) }]);
    setInput('');
  };

  const usePrompt = (prompt: string) => {
    setMessages((current) => [...current, { from: 'visitor', text: prompt }, { from: 'assistant', text: replyTo(prompt) }]);
    inputRef.current?.focus();
  };

  return (
    <>
      <button className="chat-tab" type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="demo-chat"><MessageCircle size={17} /> Try the chat</button>
      {open && <section className="demo-chat" id="demo-chat" role="dialog" aria-label="Website chat demonstration">
        <header className="chat-header"><div><span className="chat-status" /><div><strong>Website assistant</strong><small>Interactive demo</small></div></div><button type="button" onClick={() => setOpen(false)} aria-label="Close chat"><X size={19} /></button></header>
        <div className="chat-messages" aria-live="polite">{messages.map((message, index) => <p className={message.from} key={`${message.text}-${index}`}>{message.text}</p>)}</div>
        {messages.length === 1 && <div className="chat-prompts">{quickPrompts.map((prompt) => <button type="button" key={prompt} onClick={() => usePrompt(prompt)}>{prompt}</button>)}</div>}
        <form className="chat-form" onSubmit={send}><input ref={inputRef} value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about a feature…" aria-label="Chat message" /><button type="submit" aria-label="Send message" disabled={!input.trim()}><ArrowUp size={18} /></button></form>
        <small className="chat-note">Demo only — messages stay in this browser.</small>
      </section>}
    </>
  );
}

