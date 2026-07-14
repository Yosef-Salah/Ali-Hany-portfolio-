import { motion } from 'motion/react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      id={`project-card-${project.id}`}
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="group cursor-pointer flex flex-col justify-between h-full bg-[#121212]/40 border border-white/[0.03] hover:border-white/10 p-4 rounded-3xl transition-all duration-300 hover:bg-[#121212]/80 shadow-sm"
    >
      {/* Interactive Media Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#121212]">
        <motion.img
          id={`project-card-img-${project.id}`}
          src={project.image}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transform transition-all duration-700 ease-[0.16, 1, 0.3, 1] group-hover:scale-105 opacity-85 group-hover:opacity-100"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-brand-cream/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            className="w-14 h-14 bg-brand-orange rounded-full flex items-center justify-center shadow-lg"
          >
            <ArrowUpRight className="w-6 h-6 text-brand-cream" />
          </motion.div>
        </div>
        {/* Dynamic Category Tag */}
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <span className="font-mono text-[10px] uppercase tracking-wider text-brand-orange">
            {project.category}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-black/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/5">
          <span className="font-mono text-[9px] text-brand-dark font-medium">
            {project.year}
          </span>
        </div>
      </div>

      {/* Info Container */}
      <div className="mt-5 flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="font-display font-semibold text-lg md:text-xl tracking-tight text-brand-dark group-hover:text-brand-orange transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-xs md:text-sm text-brand-muted line-clamp-2 max-w-sm">
            {project.description}
          </p>
        </div>
        <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-brand-orange flex items-center justify-center transition-colors duration-300 shrink-0 mt-1">
          <ArrowUpRight className="w-4 h-4 text-brand-muted group-hover:text-brand-orange transition-colors duration-300" />
        </div>
      </div>

      {/* Tags Footer */}
      <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
        {project.tags.slice(0, 3).map((tag, idx) => (
          <span
            key={idx}
            className="font-mono text-[10px] text-brand-orange/80 bg-white/[0.03] border border-white/[0.05] px-2.5 py-0.5 rounded-full"
          >
            #{tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
