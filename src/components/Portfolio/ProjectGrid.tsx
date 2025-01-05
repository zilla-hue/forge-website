import ProjectCard from './ProjectCard';
import { projects } from './projectData';

const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
          className={project.featured ? 'md:col-span-2 lg:col-span-2' : ''}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;