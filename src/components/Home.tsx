import { Project } from '../data';

interface HomeProps {
  commissions: Project[];
  personalProjects: Project[];
  onSelectProject: (project: Project) => void;
}

const CoverGrid = ({
  label,
  projects,
  onSelectProject,
}: {
  label: string;
  projects: Project[];
  onSelectProject: (project: Project) => void;
}) => {
  if (projects.length === 0) return null;
  return (
    <div className="mb-16">
      <p className="text-[10px] opacity-40 font-bold mb-6">{label}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
        {projects.map((p) => (
          <button
            key={p.id}
            onClick={() => onSelectProject(p)}
            className="group text-left"
          >
            <div className="aspect-[4/5] overflow-hidden bg-black/5 mb-2">
              <img
                src={p.coverImage}
                alt={p.title}
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-[1.03] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-[10px] font-bold">{p.title}</p>
            <p className="text-[9px] opacity-40">{p.client || p.category}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default function Home({ commissions, personalProjects, onSelectProject }: HomeProps) {
  return (
    <div className="h-full w-full overflow-y-auto px-6 md:px-12 pt-24 pb-24">
      <div className="max-w-5xl mx-auto">
        <CoverGrid label="COMMISSIONS" projects={commissions} onSelectProject={onSelectProject} />
        <CoverGrid label="PERSONAL WORK" projects={personalProjects} onSelectProject={onSelectProject} />
      </div>
    </div>
  );
}
