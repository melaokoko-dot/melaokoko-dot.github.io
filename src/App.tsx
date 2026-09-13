/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Layout / routing logic only. To edit your content (name, bio, projects,
 * photos) go to src/data.ts instead — you should not need to touch this file.
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { COMMISSIONS, PERSONAL_PROJECTS, Project, SITE_CONTENT } from './data';
import Sidebar from './components/Sidebar';
import Gallery from './components/Gallery';
import Home from './components/Home';
import InfoPage from './components/InfoPage';

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [showAbout, setShowAbout] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="fixed inset-0 bg-white text-black flex">
      <Sidebar
        commissions={COMMISSIONS}
        personalProjects={PERSONAL_PROJECTS}
        activeId={activeProject?.id ?? null}
        onSelectProject={setActiveProject}
        onGoHome={() => setActiveProject(null)}
        onOpenAbout={() => setShowAbout(true)}
        mobileOpen={mobileNavOpen}
        onCloseMobile={() => setMobileNavOpen(false)}
      />

      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 w-full h-14 flex items-center justify-between px-4 bg-white border-b border-black/10 z-[80] md:hidden">
        <button onClick={() => setMobileNavOpen(true)} className="font-bold text-xs">
          MENU
        </button>
        <p className="font-bold text-xs">{SITE_CONTENT.name}</p>
        <button onClick={() => setShowAbout(true)} className="font-bold text-xs">
          ABOUT
        </button>
      </div>

      <main className="flex-1 md:ml-[260px] h-screen pt-14 md:pt-0 relative">
        {activeProject ? (
          <Gallery key={activeProject.id} project={activeProject} />
        ) : (
          <Home commissions={COMMISSIONS} personalProjects={PERSONAL_PROJECTS} onSelectProject={setActiveProject} />
        )}
      </main>

      <AnimatePresence>{showAbout && <InfoPage onClose={() => setShowAbout(false)} />}</AnimatePresence>
    </div>
  );
}
