import { motion } from 'motion/react';
import { SITE_CONTENT } from '../data';

export default function InfoPage({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white/95 backdrop-blur-xl text-black z-[200] p-8 flex flex-col overflow-y-auto"
    >
      <div className="flex justify-between items-start mb-20 px-2 md:px-8">
        <h1 className="font-bold tracking-widest text-sm">{SITE_CONTENT.name}</h1>
        <button onClick={onClose} className="opacity-60 hover:opacity-100 font-bold text-xs">
          CLOSE
        </button>
      </div>

      <div className="max-w-xl mx-auto md:ml-8">
        <p className="leading-relaxed mb-16 opacity-80 text-xs md:text-sm font-medium">{SITE_CONTENT.bio}</p>

        <div className="space-y-6 mb-16">
          <h2 className="opacity-40 font-bold text-xs">CONTACT</h2>
          <div className="space-y-4 text-xs">
            <div>
              <p className="opacity-40 text-[10px] mb-1">EMAIL</p>
              <p>{SITE_CONTENT.contacts.email}</p>
            </div>
            <div>
              <p className="opacity-40 text-[10px] mb-1">PHONE</p>
              <p>{SITE_CONTENT.contacts.phone}</p>
            </div>
            <div>
              <p className="opacity-40 text-[10px] mb-1">INSTAGRAM</p>
              <a
                href={SITE_CONTENT.contacts.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-60 transition-opacity"
              >
                {SITE_CONTENT.contacts.instagram}
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-6 pb-20">
          <h2 className="opacity-40 font-bold text-xs">CLIENTS + COLLABORATIONS</h2>
          <div className="flex flex-wrap gap-x-10 gap-y-2 opacity-60 text-xs">
            {SITE_CONTENT.collaborations.map((collab) => (
              <p key={collab}>{collab}</p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
