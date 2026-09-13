import { useMemo } from 'react';
import { Project, LANDING_PAGE_IMAGES } from '../data';

interface OverviewProps {
  stories: Project[];
  onSelectStory: (storyId: string) => void;
}

interface SelectedPhoto {
  src: string;
  storyId: string;
  storyTitle: string;
}

export default function Overview({ stories, onSelectStory }: OverviewProps) {
  // Curated select list of images for the landing page defined in data.ts
  const overviewPhotos = useMemo<SelectedPhoto[]>(() => {
    // If a curated list of images is defined in LANDING_PAGE_IMAGES, use it
    if (LANDING_PAGE_IMAGES && LANDING_PAGE_IMAGES.length > 0) {
      return LANDING_PAGE_IMAGES.map((src) => {
        const parentStory = stories.find((s) => s.images.includes(src));
        return {
          src,
          storyId: parentStory ? parentStory.id : (stories[0]?.id ?? ''),
          storyTitle: parentStory ? parentStory.title : '',
        };
      });
    }

    // Fallback dynamic selection if list is empty
    const selected: SelectedPhoto[] = [];
    const seenSrcs = new Set<string>();

    stories.forEach((story) => {
      const pool = [...story.images];
      for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
      }

      let count = 0;
      for (const imgPath of pool) {
        if (!seenSrcs.has(imgPath)) {
          seenSrcs.add(imgPath);
          selected.push({
            src: imgPath,
            storyId: story.id,
            storyTitle: story.title,
          });
          count++;
          if (count >= 3) break;
        }
      }
    });

    for (let i = selected.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [selected[i], selected[j]] = [selected[j], selected[i]];
    }

    return selected;
  }, [stories]);

  return (
    <div id="overview-collage" className="w-full">
      {/* Editorial masonry 3-column feed with exact 6px horizontal & 6px vertical gaps */}
      <div className="columns-2 sm:columns-3 gap-[6px]">
        {overviewPhotos.map((photo, idx) => (
          <div
            key={`${photo.src}-${idx}`}
            className="break-inside-avoid block w-full mb-[6px] leading-none cursor-pointer"
            onClick={() => onSelectStory(photo.storyId)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onSelectStory(photo.storyId);
              }
            }}
          >
            <img
              src={photo.src}
              alt=""
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

