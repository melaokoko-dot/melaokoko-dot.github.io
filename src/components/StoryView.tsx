import { Project } from '../data';

interface StoryViewProps {
  key?: string | number;
  story: Project;
  focusedImageIndex: number | null;
  onSelectImage: (index: number) => void;
  onNextImage: () => void;
  onPrevImage: () => void;
}

export default function StoryView({
  story,
  focusedImageIndex,
  onSelectImage,
  onNextImage,
}: StoryViewProps) {
  // If an image is selected, render full-blown within the media column
  if (focusedImageIndex !== null && story.images[focusedImageIndex]) {
    const currentSrc = story.images[focusedImageIndex];
    return (
      <div id="full-blown-image-view" className="w-full flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] select-none">
        <div className="w-full flex items-center justify-center">
          <img
            src={currentSrc}
            alt={`${story.title} photograph ${focusedImageIndex + 1}`}
            className="max-h-[calc(100vh-6rem)] md:max-h-[calc(100vh-8rem)] w-auto max-w-full object-contain block cursor-pointer"
            onClick={onNextImage}
            title="Click to view next photograph"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Story Title & Description — maintaining consistent 14px typography */}
      <header className="mb-12 md:mb-16 max-w-2xl">
        <h1 className="text-[14px] font-normal text-neutral-950 mb-3">
          {story.title}
        </h1>
        {story.description && (
          <p className="text-[14px] text-neutral-500 leading-relaxed">
            {story.description}
          </p>
        )}
      </header>

      {/* Image-first masonry feed — 3-column collage style with tight 6px gaps */}
      <div className="columns-2 sm:columns-3 gap-[6px] w-full">
        {story.images.map((imgSrc, idx) => (
          <div
            key={`${imgSrc}-${idx}`}
            className="break-inside-avoid block w-full mb-[6px] leading-none cursor-pointer"
            onClick={() => onSelectImage(idx)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectImage(idx);
              }
            }}
            aria-label={`View photograph ${idx + 1} full-blown`}
          >
            <img
              src={imgSrc}
              alt={`${story.title} photograph ${idx + 1}`}
              loading={idx < 4 ? 'eager' : 'lazy'}
              decoding="async"
              className="w-full h-auto block select-none hover:opacity-95 transition-opacity"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
