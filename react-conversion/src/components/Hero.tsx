export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow glow-1"></div>
      <div className="hero-glow glow-2"></div>

      <div className="wrap">
        <div className="hero-copy reveal in">
          <p className="eyebrow">
            <span className="palette-dots">
              <span></span><span></span><span></span>
            </span>
            Mandala art 
          </p>
          <h1>
            Art that holds
            <br />
            <em>a little bit</em> of your story.
          </h1>
          <p className="sub">
            I'm SHA, creating handcrafted mandala artworks inspired by creativity, symmetry, and intricate
            detail. Every piece is drawn with patience and a personal touch, making each artwork unique. From
            original mandalas to personalized commissions, my goal is to create artwork that feels meaningful to
            you. Discover my art. Share your idea. Let's create something unique together.
          </p>
          <div className="hero-actions">
            <a href="#gallery" className="btn btn-outline">View Gallery</a>
            <a href="#custom-art" className="btn btn-primary">Commission a Piece</a>
          </div>
          <div className="hero-stats">
            <div>
              <strong>8</strong>
              <span>Years of Technical Mastery</span>
            </div>
            <div>
              <strong>2–4wk</strong>
              <span>Typical Turnaround</span>
            </div>
          </div>
        </div>

        <div className="hero-pins">
          <div className="pin pin-1">
            <img src="/images/art9.jpg" alt="Mandala Artwork 1" />
            <span>Flight of Mind, 2026</span>
          </div>
          <div className="pin pin-2">
            <img src="/images/art4.jpg" alt="Mandala Artwork 2" />
            <span>Blooming Mandala, 2026</span>
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        <span className="line"></span>
        Scroll to explore
      </div>
    </section>
  );
}
