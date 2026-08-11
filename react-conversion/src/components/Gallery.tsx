import { useState, useRef } from 'react';
import Reveal from './Reveal';
import Lightbox from './Lightbox';
import { artworks, type Artwork } from '../data/artworks';

export default function Gallery() {
  const [active, setActive] = useState<Artwork | null>(null);
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goTo = (index: number) => {
    if (index < 0) index = artworks.length - 1;
    if (index >= artworks.length) index = 0;
    setCurrent(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // minimum swipe distance in px

    if (diff > threshold) {
      goTo(current + 1); // swiped left -> next
    } else if (diff < -threshold) {
      goTo(current - 1); // swiped right -> previous
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const art = artworks[current];

  return (
    <section id="gallery">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">
            <span className="palette-dots">
              <span></span><span></span><span></span>
            </span>
            Gallery — 2022–2026
          </p>
          <h2>Curated Collections</h2>
          <p>A collection of original art and custom orders. Swipe to explore.</p>
        </Reveal>

        <div className="gallery-carousel">
          <button
            className="carousel-arrow left"
            onClick={() => goTo(current - 1)}
            aria-label="Previous artwork"
          >
            ‹
          </button>

          <Reveal
            as="figure"
            className="art-card single"
            key={art.id}
          >
            <div
              className="frame"
              onClick={() => setActive(art)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img src={art.image} alt={art.alt} />
            </div>
            <figcaption>
              <span className="title">{art.title}</span>
              <span className="meta">
                Handcrafted Mandala
                <br />
                Artwork
              </span>
            </figcaption>
          </Reveal>

          <button
            className="carousel-arrow right"
            onClick={() => goTo(current + 1)}
            aria-label="Next artwork"
          >
            ›
          </button>
        </div>

        <div className="carousel-dots">
          {artworks.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === current ? 'active' : ''}`}
              onClick={() => goTo(index)}
              aria-label={`Go to artwork ${index + 1}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      <Lightbox artwork={active} onClose={() => setActive(null)} />
    </section>
  );
}