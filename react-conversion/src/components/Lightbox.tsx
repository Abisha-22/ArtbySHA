import { useEffect } from 'react';
import type { Artwork } from '../data/artworks';

interface LightboxProps {
  artwork: Artwork | null;
  onClose: () => void;
}

export default function Lightbox({ artwork, onClose }: LightboxProps) {
  // Lock body scroll while open + close on Escape (same as the original script)
  useEffect(() => {
    if (!artwork) return;

    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [artwork, onClose]);

  return (
    <div
      className={`lightbox ${artwork ? 'open' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {artwork && (
        <div className="lightbox-inner">
          <button className="lightbox-close" onClick={onClose} aria-label="Close">
            ✕
          </button>
          <img src={artwork.image} alt={artwork.alt} />
          <div className="lightbox-cap">
            <span>{artwork.title}</span>
            <span>Handcrafted Mandala Artwork</span>
          </div>
        </div>
      )}
    </div>
  );
}
