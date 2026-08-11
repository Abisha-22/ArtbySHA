import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <Reveal className="portrait">
          <img
            src="/images/sha-portrait.jpg"
            alt="Portrait of SHA"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Reveal>

        <Reveal className="about-copy">
          <p className="eyebrow">
            <span className="palette-dots">
              <span></span><span></span><span></span>
            </span>
            About
          </p>
          <h2 style={{ fontSize: 'clamp(28px,3.6vw,40px)', marginBottom: '22px' }}>Hi, I'm SHA.</h2>
          <p>
            I've been creating art professionally for eight years, beginning with simple sketches and gradually discovering my love for intricate patterns, mandalas, and detailed linework.
          </p>
          <p>
            Today, I create hand-drawn mandala artworks that blend traditional patterns with flowers, leaves, birds, paisleys, and other elements inspired by nature. Each piece is drawn patiently, one line and one detail at a time, creating artwork that feels personal and meaningful.
          </p>
          <p>
            My work is primarily created with fine-liner pens and traditional drawing techniques, with every mandala designed and illustrated by hand. No prints, no shortcuts — just time, patience, and a love for detail.
          </p>
          <div className="pull-quote">
            "I want every piece to feel like more than a pattern — I want it to tell a story and give the viewer a moment of calm."
          </div>
          <div className="tags">
            <span>Mandala art</span>
            <span>Intricate LineWork</span>
            <span>Custom Design</span>
            <span>Floral Mandalas</span>
            <span>Original Artwork</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}