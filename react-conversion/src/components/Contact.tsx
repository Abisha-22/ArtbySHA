import { useRef, useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Reveal from './Reveal';

const ART_TYPES = [
  'Mandala Artwork',
  'Personalized Mandala',
  'Customized Mandala',
  'Wall Art',
  'Customized Gift',
  'Other',
];

// Pulled from .env — see setup steps above
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    const name = (data.get('name') as string)?.trim();
    const email = (data.get('email') as string)?.trim();
    const size = (data.get('size') as string)?.trim();

    if (!name || !email || !size) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form, { publicKey: PUBLIC_KEY })
      .then(() => {
        setStatus('sent');
        form.reset();
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setStatus('error');
      });
  };

  return (
    <section id="contact">
      <div className="wrap contact-grid">
        <Reveal className="contact-info">
          <div className="stamp">
            HAND
            <br />
            CRAFTED
          </div>
          <p className="eyebrow">
            <span className="palette-dots">
              <span></span>
              <span></span>
              <span></span>
            </span>
            Contact
          </p>
          <h2 style={{ fontSize: 'clamp(26px,3.4vw,36px)', marginBottom: '20px' }}>
            Tell me about your idea.
          </h2>
          <a className="email" href="mailto:artbysha26@gmail.com">
            artbysha26@gmail.com
          </a>
          <p className="loc">
            Call / WhatsApp:{' '}
            <a href="tel:+916385308467" style={{ borderBottom: '1px solid var(--line-dark)' }}>
              +91 63853 08467
            </a>
          </p>
          <p className="loc">Based in India — Shipping available</p>
          <div className="social">
            <a
              className="instagram"
              href="https://www.instagram.com/_.art._.sy._?utm_source=qr&igsh=eWtyMHNvcXB1d2dp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              className="pinterest"
              href="http://www.artbysha.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pinterest
            </a>
          </div>
        </Reveal>

        <Reveal>
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Your Name</label>
                <input id="name" name="name" type="text" placeholder="Jane Doe" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" placeholder="jane@email.com" required />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="size">Size You Need</label>
                <input id="size" name="size" type="text" placeholder="e.g. 11×14in" required />
              </div>
              <div className="field">
                <label htmlFor="artType">Type of Art</label>
                <select id="artType" name="artType" defaultValue={ART_TYPES[0]}>
                  {ART_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">Tell me more (optional)</label>
              <textarea
                id="message"
                name="message"
                placeholder="Colors, occasion, inspiration, deadline..."
              />
            </div>

            <div className="form-foot">
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Inquiry'}
              </button>
              <span className="form-msg">
                {status === 'sent' &&
                  "Thanks! Your inquiry has been sent — I'll get back to you soon."}
                {status === 'error' &&
                  'Please fill in your name, email, and size — or check your EmailJS setup.'}
              </span>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
