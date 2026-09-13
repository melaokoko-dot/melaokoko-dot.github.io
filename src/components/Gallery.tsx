import { useEffect, useRef, useState } from 'react';
import { Project } from '../data';

interface GalleryProps {
  project: Project;
}

export default function Gallery({ project }: GalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Reset to top whenever the project changes
  useEffect(() => {
    setActiveImageIndex(0);
    setShowThumbnails(false);
    containerRef.current?.scrollTo({ top: 0 });
  }, [project.id]);

  // Track which image is in view to drive the counter
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-idx'));
            setActiveImageIndex(idx);
          }
        });
      },
      { root, threshold: 0.6 }
    );

    imageRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [project]);

  const scrollToImage = (idx: number) => {
    imageRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setShowThumbnails(false);
  };

  return (
    <div className="relative h-full w-full">
      <div ref={containerRef} className="h-full w-full overflow-y-auto">
        <div className="max-w-3xl mx-auto px-6 md:px-12 pt-24 pb-40">
          <div className="mb-16">
            {project.client && <p className="opacity-40 text-[10px] mb-2">{project.client}</p>}
            <h1 className="font-bold text-lg md:text-xl tracking-[0.2em] mb-4">{project.title}</h1>
            <p className="opacity-60 text-xs md:text-sm leading-relaxed max-w-lg">{project.description}</p>
            <p className="opacity-30 text-[10px] mt-4">{project.category}</p>
          </div>

          <div className="space-y-10">
            {project.images.map((img, idx) => (
              <div
                key={img + idx}
                ref={(el) => {
                  imageRefs.current[idx] = el;
                }}
                data-idx={idx}
              >
                <img
                  src={img}
                  alt={`${project.title} ${idx + 1}`}
                  loading={idx < 2 ? 'eager' : 'lazy'}
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar: pagination + thumbnails toggle */}
      <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-sm border-t border-black/10 px-6 py-3 flex items-center justify-between text-[10px] font-bold">
        <span className="opacity-50">
          {activeImageIndex + 1} / {project.images.length}
        </span>
        <button onClick={() => setShowThumbnails((v) => !v)} className="opacity-50 hover:opacity-100 transition-opacity">
          {showThumbnails ? 'HIDE THUMBNAILS' : 'SHOW THUMBNAILS'}
        </button>
      </div>

      {/* Thumbnails overlay */}
      {showThumbnails && (
        <div className="absolute inset-0 bg-white z-10 overflow-y-auto p-6 pt-8">
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
            {project.images.map((img, idx) => (
              <button
                key={img + idx}
                onClick={() => scrollToImage(idx)}
                className={`aspect-square overflow-hidden ${idx === activeImageIndex ? 'ring-2 ring-black' : ''}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
