import { Project, SITE_CONTENT } from '../data';

interface SidebarProps {
  commissions: Project[];
  personalProjects: Project[];
  activeId: string | null;
  onSelectProject: (project: Project) => void;
  onGoHome: () => void;
  onOpenAbout: () => void;
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

const NavGroup = ({
  label,
  projects,
  activeId,
  onSelectProject,
}: {
  label: string;
  projects: Project[];
  activeId: string | null;
  onSelectProject: (project: Project) => void;
}) => {
  if (projects.length === 0) return null;
  return (
    <div className="mb-8">
      <p className="text-[10px] opacity-40 font-bold mb-3">{label}</p>
      <ul className="space-y-2">
        {projects.map((p) => (
          <li key={p.id}>
            <button
              onClick={() => onSelectProject(p)}
              className={`text-left text-xs leading-snug transition-opacity hover:opacity-100 ${
                activeId === p.id ? 'opacity-100 font-bold' : 'opacity-50'
              }`}
            >
              {p.title}
              {p.client ? <span className="block opacity-60 text-[10px] font-normal">{p.client}</span> : null}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Sidebar({
  commissions,
  personalProjects,
  activeId,
  onSelectProject,
  onGoHome,
  onOpenAbout,
  mobileOpen,
  onCloseMobile,
}: SidebarProps) {
  return (
    <>
      {/* Mobile overlay backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[90] md:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen w-[260px] bg-white border-r border-black/10 z-[100]
        flex flex-col justify-between p-6 pt-8 overflow-y-auto
        transition-transform duration-300 md:translate-x-0
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div>
          <button
            onClick={() => {
              onGoHome();
              onCloseMobile();
            }}
            className="block text-left font-bold text-sm tracking-widest mb-1 hover:opacity-60 transition-opacity"
          >
            {SITE_CONTENT.name}
          </button>
          <p className="text-[9px] opacity-40 mb-10 leading-relaxed">{SITE_CONTENT.role}</p>

          <div className="mb-10 space-y-2">
            <button
              onClick={() => {
                onGoHome();
                onCloseMobile();
              }}
              className={`block text-xs font-bold hover:opacity-60 transition-opacity ${
                activeId === null ? 'opacity-100' : 'opacity-50'
              }`}
            >
              OVERVIEW
            </button>
            <button
              onClick={() => {
                onOpenAbout();
                onCloseMobile();
              }}
              className="block text-xs font-bold opacity-50 hover:opacity-100 transition-opacity"
            >
              ABOUT
            </button>
          </div>

          <NavGroup
            label="COMMISSIONS"
            projects={commissions}
            activeId={activeId}
            onSelectProject={(p) => {
              onSelectProject(p);
              onCloseMobile();
            }}
          />
          <NavGroup
            label="PERSONAL WORK"
            projects={personalProjects}
            activeId={activeId}
            onSelectProject={(p) => {
              onSelectProject(p);
              onCloseMobile();
            }}
          />
        </div>

        <div className="pt-8 text-[10px] opacity-40 space-y-1">
          <a href={SITE_CONTENT.contacts.instagramUrl} target="_blank" rel="noreferrer" className="block hover:opacity-100 transition-opacity">
            {SITE_CONTENT.contacts.instagram}
          </a>
          <p>{SITE_CONTENT.location}</p>
        </div>
      </aside>
    </>
  );
}
