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
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              _.art._.sy._
            </a>
            <a
              className="pinterest"
              href="https://www.pinterest.com/ArtbySHA/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
              ArtbySHA
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
