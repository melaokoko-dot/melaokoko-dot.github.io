import { useState } from 'react';
import { Project, SITE_CONTENT } from '../data';

interface NavigationProps {
  stories: Project[];
  activeId: string; // 'overview' | 'about' | story.id
  onNavigate: (id: string) => void;
  activeStory?: Project;
  focusedImageIndex: number | null;
  onPrevImage: () => void;
  onNextImage: () => void;
  onCloseImageMode: () => void;
}

export default function Navigation({
  stories,
  activeId,
  onNavigate,
  activeStory,
  focusedImageIndex,
  onPrevImage,
  onNextImage,
  onCloseImageMode,
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSelect = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const isFocusedMode = focusedImageIndex !== null && !!activeStory;

  return (
    <>
      {/* Mobile compact top navigation */}
      <header className="md:hidden sticky top-0 left-0 w-full bg-white z-50 px-6 pt-6 pb-4 border-b border-neutral-100">
        {isFocusedMode ? (
          <div className="flex items-center justify-between">
            <button
              id="btn-mobile-back-to-story"
              onClick={onCloseImageMode}
              className="text-[14px] text-neutral-950 inline-flex items-center gap-1.5 cursor-pointer font-normal"
            >
              <span aria-hidden="true">←</span>
              <span>Back to story</span>
            </button>
            <div className="flex items-center gap-3 text-[13px] text-neutral-600">
              <span className="text-neutral-400 font-mono text-[12px]">
                {focusedImageIndex + 1}/{activeStory.images.length}
              </span>
              <button
                id="btn-mobile-prev-image"
                onClick={onPrevImage}
                className="px-1.5 py-0.5 hover:text-neutral-950 cursor-pointer"
                aria-label="Previous photograph"
              >
                Prev
              </button>
              <button
                id="btn-mobile-next-image"
                onClick={onNextImage}
                className="px-1.5 py-0.5 hover:text-neutral-950 cursor-pointer"
                aria-label="Next photograph"
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-baseline justify-between">
              <button
                onClick={() => handleSelect('overview')}
                className="text-[18px] font-normal tracking-tight text-neutral-950 text-left"
              >
                {SITE_CONTENT.name}
              </button>
              <button
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="text-[14px] text-neutral-500 hover:text-neutral-950 transition-colors p-1"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? 'Close' : 'Menu'}
              </button>
            </div>

            {mobileMenuOpen && (
              <nav className="pt-6 pb-4 space-y-3.5">
                <button
                  onClick={() => handleSelect('about')}
                  className={`block w-full text-left text-[14px] transition-colors ${
                    activeId === 'about' ? 'text-neutral-950 font-normal' : 'text-neutral-400 hover:text-neutral-950'
                  }`}
                >
                  About
                </button>
                {stories.map((story) => (
                  <button
                    key={story.id}
                    onClick={() => handleSelect(story.id)}
                    className={`block w-full text-left text-[14px] transition-colors ${
                      activeId === story.id ? 'text-neutral-950 font-normal' : 'text-neutral-400 hover:text-neutral-950'
                    }`}
                  >
                    {story.title}
                  </button>
                ))}
              </nav>
            )}
          </>
        )}
      </header>

      {/* Desktop sticky left sidebar */}
      <aside
        id="sidebar-navigation"
        className="hidden md:flex flex-col sticky top-0 h-screen w-[220px] lg:w-[250px] flex-shrink-0 p-10 lg:p-12 overflow-y-auto z-10 select-none"
      >
        <div>
          {/* Main Name — visibly larger than all other text */}
          <button
            id="nav-brand-title"
            onClick={() => handleSelect('overview')}
            className="block text-left text-[20px] lg:text-[22px] font-normal tracking-tight text-neutral-950 hover:opacity-60 transition-opacity mb-8 lg:mb-10 cursor-pointer"
          >
            {SITE_CONTENT.name}
          </button>

          {isFocusedMode ? (
            /* Full-blown photo mode controls on the text column */
            <div id="image-mode-controls" className="space-y-7">
              {/* Back to story button */}
              <div>
                <button
                  id="btn-back-to-story"
                  onClick={onCloseImageMode}
                  className="text-[14px] text-neutral-950 hover:opacity-60 transition-opacity inline-flex items-center gap-2 cursor-pointer font-normal"
                >
                  <span aria-hidden="true">←</span>
                  <span>Back to story</span>
                </button>
              </div>

              {/* Story Context & Photo Counter */}
              <div className="space-y-1">
                <p className="text-[13px] text-neutral-400 leading-snug">{activeStory.title}</p>
                <p className="text-[14px] text-neutral-950 font-mono">
                  {String(focusedImageIndex + 1).padStart(2, '0')} / {String(activeStory.images.length).padStart(2, '0')}
                </p>
              </div>

              {/* Next & Previous buttons */}
              <div className="flex items-center gap-3 text-[14px]">
                <button
                  id="btn-prev-image"
                  onClick={onPrevImage}
                  className="text-neutral-600 hover:text-neutral-950 transition-colors cursor-pointer"
                  aria-label="Previous photograph"
                >
                  Previous
                </button>
                <span className="text-neutral-300 select-none">/</span>
                <button
                  id="btn-next-image"
                  onClick={onNextImage}
                  className="text-neutral-600 hover:text-neutral-950 transition-colors cursor-pointer"
                  aria-label="Next photograph"
                >
                  Next
                </button>
              </div>

              {/* Underlying story navigation in quiet muted state */}
              <div className="pt-8 border-t border-neutral-100">
                <nav id="nav-links-list" className="space-y-3">
                  <button
                    id="nav-link-about"
                    onClick={() => handleSelect('about')}
                    className="block text-left text-[14px] text-neutral-400 hover:text-neutral-950 transition-colors cursor-pointer"
                  >
                    About
                  </button>

                  {stories.map((story) => (
                    <button
                      key={story.id}
                      id={`nav-link-${story.id}`}
                      onClick={() => handleSelect(story.id)}
                      className={`block text-left text-[14px] leading-snug transition-colors cursor-pointer ${
                        activeId === story.id ? 'text-neutral-950 font-normal' : 'text-neutral-400 hover:text-neutral-950'
                      }`}
                    >
                      {story.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          ) : (
            /* Quiet, understated navigation links — consistent text size */
            <nav id="nav-links-list" className="space-y-3">
              <button
                id="nav-link-about"
                onClick={() => handleSelect('about')}
                className={`block text-left text-[14px] transition-colors cursor-pointer ${
                  activeId === 'about' ? 'text-neutral-950 font-normal' : 'text-neutral-400 hover:text-neutral-950'
                }`}
              >
                About
              </button>

              {stories.map((story) => (
                <button
                  key={story.id}
                  id={`nav-link-${story.id}`}
                  onClick={() => handleSelect(story.id)}
                  className={`block text-left text-[14px] leading-snug transition-colors cursor-pointer ${
                    activeId === story.id ? 'text-neutral-950 font-normal' : 'text-neutral-400 hover:text-neutral-950'
                  }`}
                >
                  {story.title}
                </button>
              ))}
            </nav>
          )}
        </div>
      </aside>
    </>
  );
}
