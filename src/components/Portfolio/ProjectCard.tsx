import { cn } from "@/lib/utils";
import { ArrowUpRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  link,
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-[#171717]",
        "transition-all duration-500 ease-out hover:shadow-2xl",
        className
      )}
    >
      <div className="aspect-[4/3] overflow-hidden">
        {image.endsWith(".mp4") ? (
          <video
            src={image}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="absolute inset-0 p-4 sm:p-5 md:p-6 flex flex-col justify-end transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 truncate">
              {title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 line-clamp-2">
              {description}
            </p>
          </div>
          <ArrowUpRight className="text-[#FF0006] w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 transform group-hover:translate-x-1" />
        </div>

        <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-xs text-white"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>
      </div>

      <Link
        to="/work"
        className="absolute inset-0 z-20"
        aria-label={`View ${title} project`}
      />
    </div>
  );
};

export default ProjectCard;
