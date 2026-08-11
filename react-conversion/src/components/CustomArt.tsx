import Reveal from './Reveal';

const STEPS = [
  { num: '01', title: 'Consult', desc: 'We discuss your vision, the story or meaning behind it, sizing, and where the piece will find its home.' },
  { num: '02', title: 'Sketch', desc: 'I develop a preliminary layout outlining the mandalas structure and key elements, sent for your review before any linework begins.' },
  { num: '03', title: 'Create', desc: 'Every detail is hand-drawn with precision, line by line, pattern by pattern — with a progress update shared along the way.' },
  { num: '04', title: 'Deliver', desc: 'Your finished original is carefully packaged and shipped, or made available for local pickup.' },
];

const TIERS = [
  {
    label: 'Simple Design',
    title: 'Mini Mandala',
    price: '$40-70',
    items: ['5×7in, Single Mandala', 'Fine-Liner Ink on Paper', '3–5 day turnaround'],
    featured: false,
  },
  {
    label: 'Most Popular',
    title: 'Custom Mandala',
    price: '$120-230',
    items: ['11×14in, Personalized elements (Flowers, Birds, Initials...)', 'Framing available', '2–3 week turnaround'],
    featured: true,
  },
  {
    label: 'Full Commission',
    title: 'Statement Piece',
    price: 'From $300',
    items: ['18×24in,', 'Fully custom composition', '4–6 week turnaround'],
    featured: false,
  },
];

export default function CustomArt() {
  return (
    <section id="custom-art" className="on-dark">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">
            <span className="palette-dots">
              <span></span><span></span><span></span>
            </span>
            Custom Art
          </p>
          <h2>"A Mandala made just for you."</h2>
          <p>"Every commission follows the same four steps, whether it's a small personalized mandala or a large detailed piece."</p>
        </Reveal>

        <Reveal className="process">
          {STEPS.map((s) => (
            <div className="step" key={s.num}>
              <span className="step-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </Reveal>

        <Reveal className="tiers">
          {TIERS.map((t) => (
            <div className={`tier ${t.featured ? 'featured' : ''}`} key={t.title}>
              <span className="tier-label">{t.label}</span>
              <h3>{t.title}</h3>
              <div className="price">{t.price}</div>
              <ul>
                {t.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${t.featured ? 'btn-primary' : 'btn-outline'}`}>
                Start a Commission
              </a>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
