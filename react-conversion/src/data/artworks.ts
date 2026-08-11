export interface Artwork {
  id: number;
  title: string;
  image: string;
  alt: string;
}

// Drop your image files into /public/images/ using these filenames
// (or edit the `image` paths below to match whatever you name them).
export const artworks: Artwork[] = [
  { id: 1, title: 'Customized Gift', image: '/images/art8.jpg', alt: 'Mandala Artwork 1'},
  { id: 2, title: 'MoonLit Lanterns', image: '/images/art2.jpg', alt: 'Mandala Artwork 2' },
  { id: 3, title: 'Scared Harmony', image: '/images/art3.jpg', alt: 'Mandala Artwork 3' },
  { id: 4, title: 'Blooming Mandala', image: '/images/art4.jpg', alt: 'Mandala Artwork 4' },
  { id: 5, title: 'Bird in MoonLit Garden', image: '/images/art5.jpg', alt: 'Mandala Artwork 5' },
  { id: 6, title: 'Floral Mandala', image: '/images/art6.jpg', alt: 'Mandala Artwork 6' },
  { id: 7, title: 'Ornamental Mandala', image: '/images/art7.jpg', alt: 'Mandala Artwork 7' },
];
