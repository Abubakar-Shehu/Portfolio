const photos = [
  {
    src: '/personal-pics/travel/IMG_1413.jpg',
    alt: 'Mirror-still mountain lake at golden hour',
    caption: 'Quiet water, loud mountains'
  },
  {
    src: '/personal-pics/travel/IMG_2318.jpg',
    alt: 'Standing on a pier with mountains and a turquoise lake behind',
    caption: 'Banff, Canada'
  },
  {
    src: '/personal-pics/formal/IMG_0255.jpg',
    alt: 'Portrait in a navy hoodie',
    caption: 'A workday smile'
  },
  {
    src: '/personal-pics/faces/IMG_0360.jpg',
    alt: 'Casual portrait',
    caption: 'Off-duty'
  },
  {
    src: '/personal-pics/formal/IMG_0248.jpg',
    alt: 'Formal portrait',
    caption: 'Dressed up'
  },
  {
    src: '/personal-pics/faces/IMG_0358.jpg',
    alt: 'Portrait smiling',
    caption: 'Everyday'
  }
];

export default function Gallery() {
  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {photos.map((photo) => (
          <figure key={photo.src} className="gallery-item">
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
