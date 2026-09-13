import { useEffect, useRef, useState } from 'react';
import { STORIES, Project } from './data';
import Navigation from './components/Navigation';
import Overview from './components/Overview';
import StoryView from './components/StoryView';
import AboutView from './components/AboutView';

export default function App() {
  // Read initial active section from URL hash if present
  const getInitialView = (): string => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'about') return 'about';
    const found = STORIES.find((s) => s.id === hash);
    if (found) return found.id;
    return 'overview';
  };

  const [activeView, setActiveView] = useState<string>(getInitialView);
  const [focusedImageIndex, setFocusedImageIndex] = useState<number | null>(null);
  const contentAreaRef = useRef<HTMLDivElement>(null);

  // Sync state with URL hash and listen for back/forward browser events
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      setFocusedImageIndex(null);
      if (hash === 'about') {
        setActiveView('about');
      } else {
        const found = STORIES.find((s) => s.id === hash);
        setActiveView(found ? found.id : 'overview');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (id: string) => {
    setFocusedImageIndex(null);
    setActiveView(id);
    if (id === 'overview') {
      window.history.pushState(null, '', window.location.pathname);
    } else {
      window.history.pushState(null, '', `#${id}`);
    }
    // Scroll content to top on view change
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (contentAreaRef.current) {
      contentAreaRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const currentStory: Project | undefined = STORIES.find((s) => s.id === activeView);

  const handlePrevImage = () => {
    if (!currentStory) return;
    setFocusedImageIndex((prev) => {
      if (prev === null) return 0;
      return prev <= 0 ? currentStory.images.length - 1 : prev - 1;
    });
  };

  const handleNextImage = () => {
    if (!currentStory) return;
    setFocusedImageIndex((prev) => {
      if (prev === null) return 0;
      return prev >= currentStory.images.length - 1 ? 0 : prev + 1;
    });
  };

  const handleCloseImageMode = () => {
    setFocusedImageIndex(null);
  };

  // Keyboard navigation for full-blown image view
  useEffect(() => {
    if (focusedImageIndex === null || !currentStory) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevImage();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        handleCloseImageMode();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [focusedImageIndex, currentStory]);

  return (
    <div
      id="app-layout"
      className="min-h-screen md:h-screen md:overflow-hidden bg-white text-neutral-900 flex flex-col md:flex-row"
    >
      {/* Left navigation on desktop / Top navigation on mobile */}
      <Navigation
        stories={STORIES}
        activeId={activeView}
        onNavigate={handleNavigate}
        activeStory={currentStory}
        focusedImageIndex={focusedImageIndex}
        onPrevImage={handlePrevImage}
        onNextImage={handleNextImage}
        onCloseImageMode={handleCloseImageMode}
      />

      {/* Right-hand media content area with independent vertical scrolling */}
      <main
        id="media-content-container"
        ref={contentAreaRef}
        className="flex-1 min-w-0 md:h-screen md:overflow-y-auto overflow-x-hidden px-4 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12"
      >
        <div className="w-full">
          {activeView === 'about' ? (
            <AboutView />
          ) : currentStory ? (
            <StoryView
              key={currentStory.id}
              story={currentStory}
              focusedImageIndex={focusedImageIndex}
              onSelectImage={(index) => setFocusedImageIndex(index)}
              onNextImage={handleNextImage}
              onPrevImage={handlePrevImage}
            />
          ) : (
            <Overview stories={STORIES} onSelectStory={handleNavigate} />
          )}
        </div>
      </main>
    </div>
  );
}
